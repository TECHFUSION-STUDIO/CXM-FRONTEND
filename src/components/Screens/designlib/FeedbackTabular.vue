<template>
  <div>
    <div>
      <div class="ms-0 me-0 row d-flex justify-content-center">
        <div class="col-md-7">
          <span
            class="input-group-text p-0"
            v-if="this.calledFrom != '' && this.calledFrom != null"
          >
            <model-select
              :options="options"
              v-model="item"
              placeholder="Select a Question"
              @searchchange="printSearchText"
              class="form-control border border-2 border-info w-100"
            >
            </model-select>
          </span>
        </div>

        <div class="col-md-5">
          <div class="input-group">
            <input
              class="form-control"
              type="search"
              placeholder="Search Feedbacks"
              aria-label="Search"
            />
            <button class="btn btn-success">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="table-responsive-md mt-4">
        <table class="table table-hover table-bordered w-100">
          <thead>
            <tr class="bg-white">
              <td colspan="9">
                <div class="d-flex mb-2">
                  <div class="me-auto">
                    <button
                      class="btn btn-info btn-sm me-1"
                      @click="showSortDialog = !showSortDialog"
                    >
                      Sort
                    </button>
                    <button
                      class="btn btn-info btn-sm"
                      @click="showFilterDialog = !showFilterDialog"
                    >
                      Filter
                    </button>
                  </div>
                  <div>
                    Showing
                    <select class="border border-0">
                      <option value="1">10</option>
                      <option value="2">20</option>
                      <option value="3">30</option>
                    </select>
                    of 21
                  </div>
                </div>
                <div>
                  <span class="badge rounded-pill text-bg-secondary">Sort </span>
                </div>
              </td>
            </tr>
            <tr class="bg-light">
              <td><input type="checkbox" class="form-check-input" /></td>
              <td style="width: 40%">Feedback</td>
              <td>Impact</td>
              <td>Effort</td>
              <td>Priority</td>
              <td>Status</td>
              <td>Sub. Id</td>
              <td>Created Time</td>
              <td>Last Updated Time</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in rawFeedbackList" :key="item.id">
              <td><input type="checkbox" class="form-check-input" /></td>
              <td
                id="feedbackTitle"
                style="width: 40%"
                @click="this.$router.push('/feedbackdetail/raw/' + item.id)"
              >
                {{ item.feedbackDescription }}
              </td>
              <td>{{ item.feedbackImpact }}</td>
              <td>{{ item.feedbackEffort }}</td>
              <td>{{ item.feedbackPriority }}</td>
              <td>{{ item.feedbackStatus }}</td>
              <td>{{ item.formSubmissionId }}</td>
              <td>{{ item.addedDateTime }}</td>
              <td>{{ item.lastModified }}</td>
            </tr>
            <tr class="bg-light" v-if="true">
              <td colspan="9">
                <div>
                  <button class="btn btn-sm btn-outline-secondary me-1">
                    Move to Trash
                  </button>
                  <button class="btn btn-sm btn-outline-secondary me-1">
                    Mark as Spam
                  </button>
                  <button class="btn btn-sm btn-outline-secondary me-1">
                    Mark as Filtered
                  </button>
                  <button class="btn btn-sm btn-outline-secondary me-1">
                    Move to Trash
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="text-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link">Prev</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>

              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>

        <SortDialog :display="showSortDialog" @sort-selected="sortUpdate" />
        <FilterDialog :display="showFilterDialog" @filter-selected="filterUpdate" />
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

import { ModelSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
import SortDialog from "./SortDialog.vue";
import FilterDialog from "./FilterDialog.vue";
export default {
  name: "FeedbackTabular",
  props: ["id", "criteria", "feedbackCategory", "calledFrom"],
  components: {
    ModelSelect,
    SortDialog,
    FilterDialog,
  },
  data() {
    return {
      // item1
      options: [
        {
          value: "ALL",
          text: "ALL",
        },
      ],
      item: {
        value: "",
        text: "",
      },
      criteriaLocal: [this.criteria],
      searchText: "",
      rawFeedbackList: [],
      showSortDialog: false,
      showFilterDialog: false,
      orderBy: "addedDateTime",
      orderByAsc: true,
    };
  },
  mounted() {
    this.fetchFeedback();
    if (this.calledFrom != "" && this.calledFrom != null) {
      this.fetchSurveyQuestionDetail();
    }
  },
  watch: {
    item(newQuestion, oldQuestion) {
      if (newQuestion != oldQuestion) {
        this.addQuestionFilter();
      }
    },
  },
  methods: {
    sortUpdate(sortVal) {
      console.log("event omitted");
      let a = sortVal.split("@");
      this.orderBy = a[0];
      this.orderByAsc = a[1] == "ASC" ? true : false;
      console.log(this.orderBy);
      console.log(this.orderByAsc);
      this.fetchFeedback();
    },
    filterUpdate(filterVal) {
      console.log("event omitted");
      let a = filterVal.split("@");
      this.criteriaLocal.push({
        key: a[0],
        value: a[2],
        operation: a[1],
      });

      this.fetchFeedback();
    },
    addQuestionFilter() {
      this.criteriaLocal = this.criteriaLocal.filter((a) => a.key != "questionId");
      if (this.item.value != "ALL") {
        this.criteriaLocal.push({
          key: "questionId",
          value: this.item.value,
          operation: "EQUAL",
        });
        this.fetchFeedback();
      } else {
        this.fetchFeedback();
      }
    },
    fetchFeedback() {
      if (this.feedbackCategory == "ALL") {
        this.fetchAllFeedback();
      } else if (this.feedbackCategory == "RAW") {
        this.fetchRawFeedback();
      } else if (this.feedbackCategory == "FILTERED") {
        this.fetchFilteredFeedback();
      }
    },
    fetchAllFeedback() {
      axiosConn
        .post("/getAllFeedback", {
          businessId: 1,
          projectId: 1,
          orderBy: this.orderBy,
          orderByAsc: this.orderByAsc,
          criteria: this.criteriaLocal,
        })
        .then((res) => {
          console.log(res.data);
          this.rawFeedbackList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    fetchRawFeedback() {
      axiosConn
        .post("/getAllRawFeedback", {
          businessId: 1,
          projectId: 1,
          orderBy: this.orderBy,
          orderByAsc: this.orderByAsc,
          criteria: this.criteriaLocal,
        })
        .then((res) => {
          console.log(res.data);
          this.rawFeedbackList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    fetchFilteredFeedback() {
      axiosConn
        .post("/getAllFilteredFeedback", {
          businessId: 1,
          projectId: 1,
          orderBy: this.orderBy,
          orderByAsc: this.orderByAsc,
          criteria: this.criteriaLocal,
        })
        .then((res) => {
          console.log(res.data);
          this.rawFeedbackList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    printSearchText(searchText) {
      this.searchText = searchText;
    },

    fetchSurveyQuestionDetail() {
      axiosConn
        .get(
          "/getallsurveyquestion?businessId=1&projectId=1&surveyFormId=" +
            this.calledFrom.substring(this.calledFrom.indexOf("@") + 1)
        )
        .then((res) => {
          console.log(res.data);
          res.data.forEach((a) => {
            this.options.push({
              value: a.id,
              text: a.surveyQuestion,
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
