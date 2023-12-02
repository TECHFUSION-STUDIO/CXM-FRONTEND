<template>
  <div>
    <div>
      <div class="ms-0 me-0 row d-flex justify-content-center">
        <div class="col-md-7">
          <button
            type="button"
            class="btn btn-primary btn-sm me-1 dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            Sort
          </button>
          <form class="dropdown-menu p-3 shadow-lg">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Default radio
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
            <hr />

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Low to High
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                High to Low
              </label>
            </div>
            <div class="mt-3">
              <button type="submit" class="btn btn-sm me-1 btn-primary">Reset</button>
              <button type="submit" class="btn btn-sm me-1 btn-primary">Apply</button>
            </div>
          </form>

          <button
            type="button"
            class="btn btn-primary btn-sm me-1 dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            Filter
          </button>
          <form class="dropdown-menu p-4 shadow-lg"></form>
        </div>

        <div class="col-md-5">
          <div class="input-group">
            <input
              class="form-control"
              type="search"
              placeholder="Search Response"
              aria-label="Search"
            />
            <button class="btn btn-primary btn-sm">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="table-responsive-md mt-4">
        <table class="table table-hover table-bordered w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Response</td>
              <td style="width: 40%">
                Feature
                <router-link
                  to="/createfeature/"
                  style="text-decoration: none; font-size: 12px"
                >
                  <a
                    data-bs-toggle="offcanvas"
                    data-bs-target="#staticBackdrop"
                    aria-controls="staticBackdrop"
                  >
                    Create Feature
                  </a>
                </router-link>
              </td>
              <td>Sub. Id</td>
              <td>Logger Id</td>
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
              <td style="width: 40%" @mouseover="openedDrop(item)">
                <multiselect
                  tag-placeholder="Add this feature"
                  placeholder="Search feature"
                  label="featureName"
                  track-by="id"
                  :multiple="true"
                  :taggable="true"
                  @select="addTag"
                  @remove="removeTag"
                  :options="featureList"
                  v-model="item.featureList"
                  @open="openedDrop(item)"
                ></multiselect>
              </td>
              <td>
                <router-link
                  :to="'/surveys/' + surveyId + '/submission/' + item.formSubmissionId"
                >
                  {{ item.formSubmissionId }}</router-link
                >
              </td>
              <td>
                <router-link :to="'/loggerdetail/' + item.loggerId">
                  {{ item.loggerId }}</router-link
                >
              </td>
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

    <div
      class="offcanvas offcanvas-end"
      data-bs-backdrop="static"
      tabindex="-1"
      id="staticBackdrop"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="staticBackdropLabel">Create Feature</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div><CreateFeatureScreenVue type="offcanvas" caller="survey" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

import Multiselect from "vue-multiselect";
import CreateFeatureScreenVue from "../CreateFeatureScreen";
export default {
  name: "FeedbackTabular",
  props: ["criteria", "calledFrom"],
  components: {
    Multiselect,
    CreateFeatureScreenVue,
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
      rawFeedbackList: [],
      showMenu: false,
      id: "",
      endpoint: "",
    };
  },
  updated() {
    console.log(this.questionDropDown);
  },
  mounted() {
    this.fetchAllFeature();
    if (this.calledFrom != "" && this.calledFrom != null) {
      if (this.calledFrom == "loggerId") {
        this.id = this.$route.params.loggerId;
        this.endpoint =
          "businessId=1&projectId=1&" +
          this.calledFrom +
          "=" +
          this.$route.params.loggerId;
      } else if (this.calledFrom == "surveyFormId") {
        this.id = this.$route.params.surveyId;

        this.endpoint =
          "businessId=1&projectId=1&" +
          this.calledFrom +
          "=" +
          this.$route.params.surveyId;
      } else if (this.calledFrom == "featureId") {
        this.id = this.$route.params.featureId;

        this.endpoint =
          "businessId=1&projectId=1&" +
          this.calledFrom +
          "=" +
          this.$route.params.featureId;
      }
      this.fetchSurveyQuestionDetail();
    }
    this.fetchFeedback();
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
      console.log(this.featureFeedbackIdOpened.id);
      axiosConn
        .post("/createFeatureFeedback", {
          addedDateTime: "",
          featureFeedbackId: {
            featureId: selectedOption.id,
            feedbackId: this.featureFeedbackIdOpened.id,
          },
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
        .get(
          "/deleteFeatureFeedback?featureId=" +
            removedOption.id +
            "&feedbackId=" +
            this.featureFeedbackIdOpened.id
        )
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
        .get("/getFeature?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.featureList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchFeedback() {
      var feedbackEndpoint = this.endpoint;
      if (
        this.questionDropDown.value != null &&
        this.questionDropDown.value.surveyQuestion != "All" &&
        this.questionDropDown.value.surveyQuestion != null &&
        this.questionDropDown.value.id != null &&
        this.questionDropDown.value.id != 0
      ) {
        feedbackEndpoint =
          this.endpoint + "&questionId=" + this.questionDropDown.value.id;
      }
      axiosConn
        .get("/getFeedback?" + feedbackEndpoint)
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
        .get("/getSurveyQuestion?businessId=1&projectId=1&surveyFormId=" + this.id)
        .then((res) => {
          console.log(res.data);
          var temp = [
            {
              id: 0,
              surveyQuestion: "All",
            },
          ];
          this.questionDropDown.value = {
            id: 0,
            surveyQuestion: "All",
          };
          this.questionDropDown.options = [...temp, ...res.data];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="css" scoped></style>
