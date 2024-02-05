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

        <h5 class="mt-3">{{ feedbackDetail.description }}</h5>

        <p class="text-muted mb-0 mt-2">
          Q : {{ questionDetail.question }}
          <span class="badge text-bg-primary rounded-0 m-1">
            <span class="fst-italic"> Question Type </span> :
            {{ questionDetail.type }}</span
          >
          <span class="badge text-bg-primary rounded-0 m-1">
            <span class="fst-italic"> Question Manadatory </span> :
            {{ questionDetail.isMandatory }}</span
          >
        </p>
        <p class="text-muted mt-2">
          <span v-if="loggerDetail.id != null && loggerDetail.id != ''">
            Logged by
            <a
              :href="'/loggerdetail/' + loggerDetail.id"
              target="blank"
              class="text-decoration-none"
              >{{ loggerDetail.name }} {{ loggerDetail.email }}
              {{ loggerDetail.contact1 }}
            </a>
          </span>
          <span v-if="loggerDetail.postedById != null && loggerDetail.postedById != ''">
            Posted By {{ feedbackDetail.creatorId }}
          </span>
          via Submission Id
          <a
            :href="'/loggerdetail/' + loggerDetail.id"
            target="blank"
            class="text-decoration-none"
            >{{
          }}</a>
          at {{ feedbackDetail.createdAt }}
        </p>
      </div>
      <ResponseFeature />
      <FeedbackComments />
    </div>

    <div class="text-end mt-3 mb-3">
      <button class="btn btn-outline-danger m-2 btn-sm">Delete Feedback</button>
    </div>
  </div>
</template>

<script>
import FeedbackComments from "./FeedbackDetails/FeedbackComments.vue";
import ResponseFeature from "./FeedbackDetails/ResponseFeature.vue";
import axiosConn from "@/axioscon";

export default {
  name: "RawFeedbackDetailScreen",
  components: {
    FeedbackComments,
    ResponseFeature,
  },
  data() {
    return {
      id: this.$route.params.fid,
      feedbackDetail: {},
      questionDetail: {},
      submissionDetail: {},
      loggerDetail: {},
    };
  },
  mounted() {
    this.id = this.$route.params.fid;
    console.log(this.id);
    this.fetchFeedback();
  },

  methods: {
    fetchFeedback() {
      axiosConn
        .get("/findResponse?businessId=1&workspaceId=1&id=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.feedbackDetail = res.data.data.responseDetail;
          this.questionDetail = res.data.data.questionDetail;
          this.loggerDetail = res.data.data.reporterDetail;
          this.submissionDetail = res.data.data.formSubmissionDetail;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
