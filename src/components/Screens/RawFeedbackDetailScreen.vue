<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item active" aria-current="page">
            Showing Feedback Detail
          </li>
        </ol>
      </nav>
    </div>

    <div class="mt-3">
      <div class="bg-white shadow shadow-sm p-3">
        <p class="text-muted mb-0">Id : {{ feedbackDetail.id }}</p>

        <h5 class="mt-1">{{ feedbackDetail.feedbackDescription }}</h5>
        <p>
          <span class="badge text-bg-primary">
            <span class="fst-italic"> Question Type </span> :
            {{ questionDetail.surveyQuestionType }}</span
          >
        </p>

        <p class="text-muted">Question : {{ questionDetail.surveyQuestion }}</p>
        <p class="text-muted">
          <i>
            <span v-if="loggerDetail.id != null && loggerDetail.id != ''">
              Logged by
              <a
                :href="'/loggerdetail/' + loggerDetail.id"
                target="blank"
                class="text-decoration-none"
                >{{ loggerDetail.id }}</a
              >
            </span>
            <span v-if="loggerDetail.postedById != null && loggerDetail.postedById != ''">
              Posted By {{ feedbackDetail.postedById }}
            </span>
            Page Name at {{ feedbackDetail.addedDateTime }}</i
          >
        </p>
      </div>
      <div class="bg-white shadow shadow-sm mt-3 p-2">
        <h6>Linked Feature</h6>
        <multiselect
          class="mt-2"
          tag-placeholder="Add this as new tag"
          placeholder="Search or add a tag"
          label="featureName"
          track-by="id"
          :multiple="true"
          :taggable="true"
          @select="addTag"
          @remove="removeTag"
          :options="featureList"
          v-model="feedbackFeatureList"
        ></multiselect>
      </div>
      <FeedbackComments />
    </div>

    <div class="text-end mt-3 mb-3">
      <button class="btn btn-outline-danger m-2 btn-sm">Delete Feedback</button>
    </div>
  </div>
</template>

<script>
import FeedbackComments from "./FeedbackDetails/FeedbackComments.vue";
import Multiselect from "vue-multiselect";

import axiosConn from "@/axioscon";

export default {
  name: "RawFeedbackDetailScreen",
  components: {
    FeedbackComments,
    Multiselect,
  },
  data() {
    return {
      id: this.$route.params.fid,
      featureList: [],
      feedbackFeatureList: [],
      feedbackDetail: {},
      questionDetail: {},
      loggerDetail: {},
    };
  },
  mounted() {
    this.id = this.$route.params.fid;
    console.log(this.id);
    this.fetchAllFeature();
    this.fetchFeedbackFeature();
    this.fetchFeedback();
  },

  methods: {
    fetchFeedback() {
      axiosConn
        .get("/getFeedback?businessId=1&projectId=1&feedbackId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.feedbackDetail = res.data;
          this.questionDetail = res.data.questionId;
          this.loggerDetail = res.data.loggerId;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addTag(selectedOption, id) {
      console.log(selectedOption);
      console.log(id);
      axiosConn
        .post("/createFeatureFeedback", {
          addedDateTime: 0,
          featureFeedbackId: {
            featureId: selectedOption.id,
            feedbackId: this.id,
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          this.feedbackFeatureList = this.feedbackFeatureList.filter(
            (a) => a.id != selectedOption.id
          );
        });
    },

    removeTag(removedOption, id) {
      console.log(removedOption);
      console.log(id);
      axiosConn
        .get(
          "/deleteFeatureFeedback?featureId=" +
            removedOption.id +
            "&feedbackId=" +
            this.id
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          this.feedbackFeatureList.push(removedOption);
        });
    },

    fetchFeedbackFeature() {
      axiosConn
        .get("/getFeature?feedbackId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.feedbackFeatureList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    fetchAllFeature() {
      axiosConn
        .post("/getFeature", {
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
  },
};
</script>

<style lang="scss" scoped></style>
