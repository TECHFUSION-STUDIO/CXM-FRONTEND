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
            <button class="btn btn-primary">
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
                      type="button"
                      class="btn btn-sm btn-info position-relative"
                      @click="showFilterDialog = !showFilterDialog"
                    >
                      Filter
                      <span
                        v-if="criteriaLocal.length > 0"
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      >
                        {{ criteriaLocal.length }}
                        <span class="visually-hidden">unread messages</span>
                      </span>
                    </button>
                  </div>
                  <div v-if="this.calledFrom != '' && this.calledFrom != null">
                    <a
                      :href="'/feedbackeditormode/'"
                      target="_blank"
                      type="button"
                      class="btn btn-sm btn-primary position-relative disabled"
                    >
                      Work Mode
                    </a>
                  </div>
                </div>

                <div class="alert alert-primary p-2" role="alert">
                  <span class="badge text-bg-light m-1"
                    >Sorted {{ orderBy }} by {{ orderByAsc ? "Ascending" : "Descending" }}
                  </span>

                  <span
                    class="badge text-bg-light m-1"
                    v-for="item in criteriaLocal"
                    :key="item"
                    >{{ item.key }} {{ item.operation }} {{ item.value }}
                    <i class="fa-regular fa-circle-xmark ms-1 zoombadge"></i>
                  </span>
                </div>
              </td>
            </tr>
            <tr class="bg-light">
              <td><input type="checkbox" class="form-check-input" /></td>
              <td style="width: 40%">Feedback Response</td>
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
              <td style="width: 40%">
                <router-link :to="'/feedbackdetail/' + item.id" class="feedbackTitle">
                  {{ item.feedbackDescription }}</router-link
                >
              </td>
              <td>{{ item.feedbackImpact }}</td>
              <td>{{ item.feedbackEffort }}</td>
              <td>{{ item.feedbackPriority }}</td>
              <td>
                <!-- {{ item.feedbackStatus }} -->
                <span class="badge text-bg-success">{{ item.feedbackStatus }}</span>
              </td>
              <td>{{ item.formSubmissionId }}</td>
              <td>{{ item.addedDateTime }}</td>
              <td>{{ item.lastModified }}</td>
            </tr>
            <tr v-if="rawFeedbackList.length == 0">
              <td class="text-center" colspan="9"><i>No Data Found</i></td>
            </tr>
            <tr class="bg-light" v-if="rawFeedbackList.length > 0">
              <td colspan="9">
                <div class="d-flex">
                  <div class="me-auto">
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
  props: ["criteria", "feedbackType", "calledFrom"],
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
        value: "ALL",
        text: "ALL",
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
      this.fetchAllFeedback();
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

<style lang="css" scoped></style>
