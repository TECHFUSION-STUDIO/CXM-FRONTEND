<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item active" aria-current="page">
            Showing Response Detail
          </li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row">
        <div class="col-md-6">
          <button class="btn-sm btn btn-warning w-100 my-1">Previous</button>
        </div>

        <div class="col-md-6">
          <button class="btn-sm btn btn-warning w-100 my-1">Next</button>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <div class="bg-white shadow shadow-sm p-3">
        <p class="text-muted mb-0">Response Id : {{ feedbackDetail.id }}</p>

        <h5 class="mt-3">{{ feedbackDetail.feedbackDescription }}</h5>

        <p class="text-muted mb-0 mt-2">
          Q : {{ questionDetail.surveyQuestion }} Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Rem, facilis rerum? Ducimus dicta quisquam enim perspiciatis
          est cumque magni unde vitae suscipit! Laudantium animi minima praesentium
          eligendi aut officiis culpa?
        </p>
        <p class="mt-1">
          <span class="badge text-bg-primary rounded-0 m-1">
            <span class="fst-italic"> Question Type </span> :
            {{ questionDetail.surveyQuestionType }}</span
          >
          <span class="badge text-bg-primary rounded-0 m-1">
            <span class="fst-italic"> Question Category </span> :
            {{ questionDetail.surveyQuestionCategory }}</span
          >
        </p>
        <p class="text-muted">
          <span v-if="loggerDetail.id != null && loggerDetail.id != ''">
            Logged by
            <a
              :href="'/loggerdetail/' + loggerDetail.id"
              target="blank"
              class="text-decoration-none"
              >{{ loggerDetail.loggerName }} {{ loggerDetail.loggerEmail }}
              {{ loggerDetail.loggerContact1 }} {{ loggerDetail.loggerContact2 }}</a
            >
          </span>
          <span v-if="loggerDetail.postedById != null && loggerDetail.postedById != ''">
            Posted By {{ feedbackDetail.postedById }}
          </span>
          via Submission Id
          <a
            :href="'/loggerdetail/' + loggerDetail.id"
            target="blank"
            class="text-decoration-none"
            >{{
          }}</a>
          at {{ feedbackDetail.addedDateTime }}
        </p>
      </div>
      <div class="bg-white shadow shadow-sm mt-3 p-3">
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
      submissionDetail: {},
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
        .get("/getFeedback?businessId=1&workspaceId=1&feedbackId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.feedbackDetail = res.data;
          this.questionDetail = res.data.questionId;
          this.loggerDetail = res.data.loggerId;
          this.submissionDetail = this.formSubmissionId;
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
          workspaceId: 1,
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
