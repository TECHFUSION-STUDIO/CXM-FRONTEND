<template>
  <div>
    <div>
      <div class="ms-0 me-0 row d-flex justify-content-center">
        <div class="col-md-7">
          <span
            class="input-group-text p-0"
            v-if="this.calledFrom != '' && this.calledFrom != null"
          >
            <multiselect
              :options="questionDropDown.options"
              v-model="questionDropDown.value"
              placeholder="Select one"
              label="surveyQuestion"
              track-by="id"
            ></multiselect>
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
      <div class="mt-4 text-center">
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" class="rounded-0 btn btn-sm btn-outline-secondary active">
            NEW
          </button>
          <button type="button" class="rounded-0 btn btn-sm btn-outline-secondary">
            ASSIGNED
          </button>
          <button type="button" class="rounded-0 btn btn-sm btn-outline-secondary">
            INPROGRESS
          </button>
          <button type="button" class="rounded-0 btn btn-sm btn-outline-secondary">
            TRASH
          </button>
          <button type="button" class="rounded-0 btn btn-sm btn-outline-secondary">
            SPAM
          </button>
          <button type="button" class="rounded-0 btn btn-sm btn-outline-secondary">
            COMPLETED
          </button>
        </div>
      </div>
      <div class="table-responsive-md mt-4">
        <table class="table table-hover table-bordered w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Feedback Response</td>
              <td>Feature</td>
              <td>Sub. Id</td>
              <!-- <td>Created Time</td> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in rawFeedbackList" :key="item.id">
              <td style="width: 40%">
                <router-link
                  :to="'/feedbackdetail/' + item.id"
                  style="text-decoration: none"
                >
                  {{ item.feedbackDescription }}
                </router-link>
              </td>
              <td>
                <multiselect
                  tag-placeholder="Add this as new tag"
                  placeholder="Search or add a tag"
                  label="featureName"
                  track-by="id"
                  :multiple="true"
                  :taggable="true"
                  @select="addTag"
                  @remove="removeTag"
                  :options="featureList"
                  v-model="item.feature"
                  @open="openedDrop(item)"
                ></multiselect>
              </td>
              <td>
                <router-link :to="'/surveys/' + surveyId + '/submission/' + item.id">
                  {{ item.formSubmissionId }}</router-link
                >
              </td>
              <!-- <td>{{ item.addedDateTime }}</td> -->
            </tr>
            <tr v-if="rawFeedbackList.length == 0">
              <td class="text-center" colspan="4"><i>No Data Found</i></td>
            </tr>
            <tr class="bg-light" v-if="rawFeedbackList.length > 0">
              <td colspan="9">
                <div class="d-flex">
                  <div class="me-auto"></div>

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
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

import Multiselect from "vue-multiselect";

export default {
  name: "FeedbackTabular",
  props: ["criteria", "feedbackType", "calledFrom"],
  components: {
    Multiselect,
  },
  data() {
    return {
      surveyId: this.$route.params.surveyId,
      questionDropDown: {
        options: [],
        value: {},
      },
      featureList: [],
      featureFeedbackIdOpened: "",
      featureValue: [],
      criteriaLocal: [this.criteria],
      rawFeedbackList: [],
      showSortDialog: false,
      showFilterDialog: false,
      orderBy: "addedDateTime",
      orderByAsc: true,
    };
  },
  mounted() {
    this.fetchFeedback();
    this.fetchAllFeature();
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
    openedDrop(item) {
      console.log(item);
      this.featureFeedbackIdOpened = item;
    },
    addTag(selectedOption, id) {
      console.log(selectedOption);
      console.log(id);
      console.log(this.featureFeedbackIdOpened.feature);
      axiosConn
        .post("/createFeatureFeedback", {
          featureId: selectedOption.id,
          feedbackId: this.featureFeedbackIdOpened.id,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          this.featureFeedbackIdOpened.feature = this.featureFeedbackIdOpened.feature.filter(
            (a) => a.id != selectedOption.id
          );
        });
    },

    removeTag(removedOption, id) {
      console.log(removedOption);
      console.log(id);
      console.log(this.featureFeedbackIdOpened.feature);
      axiosConn
        .get("/deleteFeatureFeedback?id=")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          this.featureFeedbackIdOpened.feature.push(removedOption);
        });
    },

    fetchAllFeature() {
      axiosConn
        .post("/getAllFeature", {
          businessId: 1,
          projectId: 1,
          orderBy: "addedDateTime",
          orderByAsc: false,
        })
        .then((res) => {
          console.log(res.data);
          this.featureList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchFeedback() {
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

    fetchSurveyQuestionDetail() {
      axiosConn
        .get(
          "/getallsurveyquestion?businessId=1&projectId=1&surveyFormId=" +
            this.calledFrom.substring(this.calledFrom.indexOf("@") + 1)
        )
        .then((res) => {
          console.log(res.data);
          this.questionDropDown.options = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="css" scoped></style>
