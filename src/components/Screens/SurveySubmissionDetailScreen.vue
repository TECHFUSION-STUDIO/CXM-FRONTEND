<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/surveys/')">Survey </a>
          </li>

          <li class="breadcrumb-item" aria-current="page">
            <a @click="this.$router.push('/surveys/' + surveyId + '/submission')"
              >Survey Submission</a
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Showing Submission Details for <i>survey id : {{ id }}</i>
          </li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="d-flex mb-3">
        <div class="text-muted">Submission Id : {{ submissionDetail.id }}</div>
      </div>

      <div class="row">
        <div class="col-auto">
          <p>Logger Id : {{ submissionDetail.loggerId }}</p>
        </div>

        <div class="col-auto">
          <p>Time spent : 20 seconds</p>
        </div>
        <div class="col-auto">
          <p>Opened at : {{ submissionDetail.addedDateTime }}</p>
        </div>
        <div class="col-auto">
          <p>Added on : {{ submissionDetail.addedDateTime }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <h6>Form Data</h6>
      <div class="mt-3">
        <div class="mb-3" v-for="(item, index) in feedbackList" :key="item.id">
          <label for="exampleFormControlInput1" class="form-label">{{
            index + 1 + ". " + item.questionId.surveyQuestion
          }}</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            :value="item.feedbackDescription"
            disabled
          />
        </div>
        <i v-if="feedbackList.length == 0">No Data Found</i>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
export default {
  name: "SurveySubmissionDetailScreen",
  data() {
    return {
      feedbackList: [],
      submissionDetail: {},
      id: this.$route.params.submissionId,
      surveyId: this.$route.params.surveyId,
    };
  },
  mounted() {
    this.getSubmissionDetail();
    this.getAllFeedback();
  },
  methods: {
    getSubmissionDetail() {
      axiosConn
        .get("/getSubmission?submissionId=" + this.id)
        .then((res) => {
          console.log(res);
          this.submissionDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAllFeedback() {
      axiosConn
        .get("/getFeedback?businessId=1&projectId=1&submissionId=" + this.id)
        .then((res) => {
          console.log(res);
          this.feedbackList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
