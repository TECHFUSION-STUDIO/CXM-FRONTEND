<template>
  <div>
    <div class="ms-0 me-0 row d-flex justify-content-center">
      <div class="col-md-7">
        <button
          type="button"
          class="btn btn-primary btn-sm me-2 dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-auto-close="outside"
        >
          Sort
        </button>
        <form
          class="dropdown-menu p-3 shadow-lg"
          style="max-height: 400px; overflow: auto"
        >
          <div class="form-check" v-for="(item, index) in sortListItems" :key="index">
            <input
              class="form-check-input"
              type="radio"
              name="sortSelect"
              :id="item.value"
              :value="item.value"
              v-model="sortSelected"
            />
            <label class="form-check-label" :for="item.value">
              {{ item.name }}
            </label>
          </div>

          <hr />

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="sortOrderSelect"
              id="sortOrder1"
              value="asc"
              v-model="sortOrder"
            />
            <label class="form-check-label" for="sortOrder1"> Low to High </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="sortOrderSelect"
              id="sortOrder2"
              value="desc"
              v-model="sortSelected"
            />
            <label class="form-check-label" for="sortOrder2"> High to Low </label>
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
        <form
          class="dropdown-menu p-4 shadow-lg"
          style="max-height: 400px; overflow: auto"
        >
          <div class="">
            <div class="">
              <label class="form-label" for="subid">Feature</label>

              <multiselect
                tag-placeholder="Add this feature"
                placeholder=""
                label="featureName"
                track-by="id"
                :multiple="true"
                :taggable="true"
                @select="addTag"
                @remove="removeTag"
                :options="featureList"
                @open="openedDrop(item)"
              ></multiselect>
            </div>
            <div class="mt-2">
              <label class="form-label" for="subid">Submission Id</label>
              <input class="form-control form-control-sm" id="subid" type="number" />
            </div>
            <div class="mt-2">
              <label class="form-label" for="subid">Reporter</label>
              <select
                class="form-select form-select-sm"
                aria-label="Small select example"
                id="subid"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mt-2">
              <label class="form-label" for="subid">Creator</label>
              <select
                class="form-select form-select-sm"
                aria-label="Small select example"
                id="subid"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mt-2">
              <label class="form-label" for="subid">Question</label>
              <select
                class="form-select form-select-sm"
                aria-label="Small select example"
                id="subid"
              >
                <option
                  v-for="item in questionList"
                  :key="item.id"
                  :value="item.surveyQuestion"
                >
                  {{ item.surveyQuestion }}
                </option>
              </select>
            </div>
            <div class="mt-2">
              <label class="form-label" for="subid">Status</label>
              <select
                class="form-select form-select-sm"
                aria-label="Small select example"
                id="subid"
              >
                <option
                  v-for="item in constants.FEEDBACK_STATUS"
                  :key="item"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="mt-2">
              <label class="form-label" for="subid">Added Date</label>
              <div class="row">
                <div class="col-md-6">
                  <label
                    class="text-muted fst-italic"
                    style="font-size: small"
                    for="subid"
                    >Start Date</label
                  >
                  <input
                    class="form-control form-control-sm"
                    id="subid"
                    type="datetime-local"
                  />
                </div>
                <div class="col-md-6">
                  <label
                    class="text-muted fst-italic"
                    style="font-size: small"
                    for="subid"
                    >End Date</label
                  >
                  <input
                    class="form-control form-control-sm"
                    id="subid"
                    type="datetime-local"
                  />
                </div>
              </div>
            </div>
            <div class="mt-3">
              <button type="submit" class="btn btn-sm me-1 btn-primary">Reset</button>
              <button type="submit" class="btn btn-sm me-1 btn-primary">Apply</button>
            </div>
          </div>
        </form>
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

    <div class="mt-4">
      <span class="badge border border-1 text-dark m-1">Added Date : Low to High</span>

      <span class="badge text-bg-light border border-1 ms-1"
        >Reporter : Avi<span class="ps-2"
          ><i
            class="fa-regular fa-circle-xmark delfilter"
            style="cursor: pointer"
          ></i></span
      ></span>

      <span class="badge text-bg-light border border-1 ms-1"
        >Status : New<span class="ps-2"
          ><i
            class="fa-regular fa-circle-xmark delfilter"
            style="cursor: pointer"
          ></i></span
      ></span>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive-md mt-4">
          <table class="table table-hover table-bordered w-100 shadow-sm">
            <thead>
              <tr class="bg-light">
                <th style="width: 40%">Response</th>
                <th style="width: 40%">
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
                </th>
                <th>Sub. Id</th>
                <th>Reporter Id</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in rawFeedbackList" :key="item.id">
                <td style="width: 40%">
                  <router-link
                    :to="'/feedbackdetail/' + item.id"
                    style="text-decoration: none"
                  >
                    {{ item.description }}
                  </router-link>
                </td>
                <td style="width: 40%" @mouseover="openedDrop(item)">
                  <TagOption
                    :finalList="[
                      'dawD',
                      'FCSACFV',
                      'fs',
                      'gsgsg',
                      'gsvg',
                      'vdxfv ',
                      'grfsgv',
                      'fedwsf',
                      'bdxc',
                      'JNUTYRGFHNJ v svscvscv sv savvv savaesvv da eabab aevbeab cvscv sv savvv adcsv  svasvasvs vfcacfaacfs savaesvv da eabab aevbeab ',
                      'jhgvfcx v svscvscv sv savvv savaesvv da eabab aevbeab cvscv sv savvv adcsv  svasvasvs vfcacfaacfs savaesvv da eabab aevbeab ',
                      'fghkuygjhgtfdsz v svscvscv sv savvv savaesvv da eabab aevbeab cvscv sv savvv adcsv  svasvasvs vfcacfaacfs savaesvv da eabab aevbeab ',
                      'rrf',
                      'ffffffffffffff',
                    ]"
                    :selectedOptions="['dawD', 'FCSACFV']"
                    @searchText="updateSearch"
                    @selectedText="updateSelect"
                  />
                </td>
                <td>
                  <router-link
                    :to="'/surveys/' + surveyId + '/submission/' + item.formSubmissionId"
                  >
                    {{ item.formSubmissionId }}</router-link
                  >
                </td>
                <td>
                  <router-link :to="'/loggerdetail/' + item.reporterId">
                    {{ item.reporterId }}</router-link
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

                    <div class="me-3">
                      Showing
                      <select class="border border-0">
                        <option value="1">10</option>
                        <option value="2">20</option>
                        <option value="3">30</option>
                      </select>
                      of 21
                    </div>

                    <div>
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-sm btn-outline-primary">
                          &lt;&lt;
                        </button>
                        <button type="button" class="btn btn-sm btn-primary pt-1">
                          3
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-primary">
                          &gt;&gt;
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
import { constants } from "../constants";
import Multiselect from "vue-multiselect";
import CreateFeatureScreenVue from "../CreateFeatureScreen";
import TagOption from "../charts/TagOption.vue";

export default {
  name: "FeedbackTabular",
  props: ["criteria", "calledFrom"],
  components: {
    Multiselect,
    CreateFeatureScreenVue,
    TagOption,
  },
  data() {
    return {
      surveyId: this.$route.params.surveyId,
      questionList: [],
      featureList: [],
      featureFeedbackIdOpened: "",
      featureValue: [],
      rawFeedbackList: [],
      showMenu: false,
      id: "",
      endpoint: "",
      filterType: "filter",
      constants,
      sortListItems: [
        {
          name: "Added Date",
          value: "addedDateTime",
        },
        {
          name: "Modified Date",

          value: "lastModifiedDateTime",
        },
        {
          name: "Submission Id",

          value: "formSubmissionId",
        },
      ],
      sortSelected: "",
      sortOrder: "asc",
    };
  },
  updated() {
    console.log(this.questionDropDown);
  },
  mounted() {
    this.fetchAllFeature();
    if (this.calledFrom != "" && this.calledFrom != null) {
      if (this.calledFrom == "formId") {
        this.id = this.$route.params.surveyId;

        this.endpoint =
          "businessId=1&workspaceId=1&" +
          this.calledFrom +
          "=" +
          this.$route.params.surveyId;
      } else if (this.calledFrom == "featureId") {
        this.id = this.$route.params.featureId;

        this.endpoint =
          "businessId=1&workspaceId=1&" +
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
        .get("/getFeature?businessId=1&workspaceId=1")
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
      axiosConn
        .get("/findResponse?" + feedbackEndpoint)
        .then((res) => {
          console.log(res.data);
          this.rawFeedbackList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    fetchSurveyQuestionDetail() {
      axiosConn
        .get("/getSurveyQuestion?businessId=1&workspaceId=1&surveyFormId=" + this.id)
        .then((res) => {
          console.log(res.data);

          this.questionList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="css" scoped>
.delfilter {
  color: #d6d6d6;
  cursor: pointer;
}
.delfilter:hover {
  transform: scale(1.1);
  cursor: pointer;
  color: #000000;
}
</style>
