<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">Survey </a></li>
          <li class="breadcrumb-item">Survey Name</li>
          <li class="breadcrumb-item active" aria-current="page">Raw Feedback</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col">
          <button
            class="btn btn-outline-primary w-100"
            @click="this.$router.push('/surveys/' + id)"
          >
            Survey Detail
          </button>
        </div>
        <div class="col">
          <button class="btn btn-primary w-100">Raw Feedback Screen</button>
        </div>
        <div class="col">
          <button
            class="btn btn-outline-primary w-100"
            @click="this.$router.push('/surveys/' + id + '/filtered')"
          >
            Filtered Feedback Screen
          </button>
        </div>

        <div class="col">
          <button
            class="btn btn-outline-primary w-100"
            @click="this.$router.push('/surveys/' + id + '/bin')"
          >
            Bin Feedback Screen
          </button>
        </div>
        <div class="col">
          <button
            class="btn btn-outline-primary w-100"
            @click="this.$router.push('/surveys/' + id + '/done')"
          >
            Done Feedback Screen
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div>
        <span class="input-group-text p-0">
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
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="ms-0 me-0 d-flex justify-content-center">
        <div class="input-group mt-2 w-50">
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
                  <span class="badge rounded-pill text-bg-secondary"
                    >Created Date = 12/03/2022</span
                  >
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

        <SortDialog :display="showSortDialog" />
        <FilterDialog :display="showFilterDialog" />
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import { ModelSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
import SortDialog from "./designlib/SortDialog.vue";
import FilterDialog from "./designlib/FilterDialog.vue";
export default {
  name: "RawFeedbackScreen",
  components: {
    ModelSelect,
    SortDialog,
    FilterDialog,
  },
  data() {
    return {
      // item1
      options: [
        { value: "91", text: "aa" + " - " + "1" },
        { value: "92", text: "ab" + " - " + "2" },
        { value: "93", text: "bc" + " - " + "3" },
        { value: "94", text: "cd" + " - " + "4" },
        { value: "95", text: "de" + " - " + "5" },
        { value: "96", text: "ef" + " - " + "6" },
        { value: "10", text: "ef" + " - " + "10" },
        { value: "11", text: "ef" + " - " + "11" },
        { value: "12", text: "ef" + " - " + "12" },
        { value: "13", text: "down case" + " - " + "testcase" },
        { value: "14", text: "camel case" + " - " + "testCase" },
        { value: "15", text: "Capitalize case" + " - " + "Testcase" },
        { value: "16", text: "more a" + " - " + "1" },
        { value: "17", text: "more a" + " - " + "2" },
        { value: "18", text: "more a" + " - " + "3" },
        { value: "19", text: "more a" + " - " + "4" },
        { value: "20", text: "more a" + " - " + "5" },
        { value: "21", text: "more a" + " - " + "6" },
        { value: "22", text: "more a" + " - " + "7" },
        { value: "23", text: "more a" + " - " + "8" },
        { value: "24", text: "more a" + " - " + "9" },
      ],
      item: {
        value: "",
        text: "",
      },
      searchText: "",
      id: "",
      rawFeedbackList: [],
      showSortDialog: false,
      showFilterDialog: false,
    };
  },
  mounted() {
    this.id = this.$route.params.surveyId;
    this.fetchAllFeedback();
  },
  methods: {
    fetchAllFeedback() {
      axiosConn
        .post("/getAllRawFeedback", {
          businessId: 1,
          projectId: 1,
          orderBy: "addedDateTime",
          orderByAsc: true,
          criteria: [
            {
              key: "surveyFormId",
              value: this.id,
              operation: "EQUAL",
            },
          ],
        })
        .then((res) => {
          console.log(res.data);
          this.rawFeedbackList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    reset() {
      this.item = {};
    },
    selectOption() {
      // select option from parent component
      this.item = this.options[1];
    },
    printSearchText(searchText) {
      this.searchText = searchText;
    },
  },
};
</script>

<style scoped></style>
