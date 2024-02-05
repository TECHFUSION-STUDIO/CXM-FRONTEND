<template>
  <div>
    <div class="ms-0 me-0 row d-flex justify-content-center">
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
                  <multiselect
                    tag-placeholder="Add this feature"
                    placeholder=""
                    label="name"
                    track-by="id"
                    :multiple="true"
                    :taggable="true"
                    @select="addTag"
                    @remove="removeTag"
                    @open="openedDrop(item)"
                    :options="featureList"
                    v-model="featureValue"
                    :block-keys="['Tab', 'Enter']"
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

import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";
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
      featureList: [],
      featureValue: [],
      featureFeedbackIdOpened: "",
      rawFeedbackList: [],
      id: "",
      endpoint: "",
      constants,
    };
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
      console.log(selectedOption + id);

      this.createFeatureResponse();
    },
    removeTag(selectedOption, id) {
      console.log(selectedOption + id);

      this.createFeatureResponse();
    },
    createFeatureResponse() {
      let selectedFeatureList = this.featureValue.map((a) => a.id);
      axiosConn
        .post("/createFeatureResponse", {
          workspaceId: 1,
          businessId: 1,
          featureId: selectedFeatureList,
          responseId: this.featureFeedbackIdOpened.id,
          addedBy: "",
        })
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            toast: true,
            text: "Tags updated successfully",
            icon: "success",
            position: "top",
            width: 300,
            showConfirmButton: false,
            timer: 3000,
            background: "white",
          });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            toast: true,
            text: "Error Occured while updating tags",
            icon: "error",
            position: "top",
            width: 300,
            showConfirmButton: false,
            timer: 3000,
            background: "white",
          });
        });
    },
    fetchAllFeature() {
      axiosConn
        .get("/findFeature?businessId=1&workspaceId=1")
        .then((res) => {
          console.log(res.data);
          this.featureList = res.data.data;
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
