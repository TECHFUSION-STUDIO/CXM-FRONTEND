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
          <li class="breadcrumb-item active" aria-current="page">
            Showing Survey Detail <i> for {{ surveyDetail.surveyFormName }} </i>
          </li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="d-flex mb-3">
        <div class="text-muted">Survey Id : {{ surveyDetail.id }}</div>
        <div class="ms-auto">
          <button
            class="btn btn-primary btn-sm ps-3 pe-3"
            @click="this.$router.push('/editsurvey/' + id)"
          >
            Edit
          </button>
        </div>
      </div>

      <h5>{{ surveyDetail.surveyFormName }}</h5>

      <p>
        {{ surveyDetail.surveyFormDescription }}
      </p>

      <div class="row">
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold rounded-0" id="basic-addon1"
              >Status</span
            >
            <input
              type="text"
              class="form-control"
              disabled
              :value="surveyDetail.surveyFormStatus"
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1"
              >Survey Type</span
            >
            <input
              type="text"
              class="form-control"
              disabled
              :value="surveyDetail.surveyType"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1">Created on</span>
            <input
              type="datetime-local"
              class="form-control"
              disabled
              :value="surveyDetail.addedDateTime"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1">Start at</span>
            <input
              type="datetime-local"
              class="form-control"
              disabled
              :value="surveyDetail.startDateTime"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1">End on</span>
            <input
              type="datetime-local"
              class="form-control"
              disabled
              :value="surveyDetail.endDateTime"
            />
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="bg-white shadow shadow-sm mt-3 p-3">
        <div class="nav nav-underline nav-fill" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-Analytics-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Analytics"
            type="button"
            role="tab"
            aria-controls="nav-Analytics"
            aria-selected="true"
            @click="this.$router.push('/surveys/' + id)"
          >
            ANALYTICS
          </button>
          <button
            class="nav-link"
            id="nav-Question-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Question"
            type="button"
            role="tab"
            aria-controls="nav-Question"
            aria-selected="false"
            @click="this.$router.push('/surveys/' + id + '/question')"
          >
            QUESTION
          </button>
          <button
            class="nav-link"
            id="nav-Responses-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Responses"
            type="button"
            role="tab"
            aria-controls="nav-Responses"
            aria-selected="false"
            @click="this.$router.push('/surveys/' + id + '/responses')"
          >
            RESPONSES
          </button>
          <button
            class="nav-link"
            id="nav-Submission-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Submission"
            type="button"
            role="tab"
            aria-controls="nav-Submission"
            aria-selected="false"
            @click="this.$router.push('/surveys/' + id + '/submission')"
          >
            SUBMISSION
          </button>

          <button
            class="nav-link"
            id="nav-Loggers-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Loggers"
            type="button"
            role="tab"
            aria-controls="nav-Loggers"
            aria-selected="false"
            @click="this.$router.push('/surveys/' + id + '/loggers')"
          >
            REPORTER
          </button>

          <!-- <button
            class="nav-link"
            id="nav-Loggers-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Loggers"
            type="button"
            role="tab"
            aria-controls="nav-Loggers"
            aria-selected="false"
            @click="this.$router.push('/surveys/' + id + '/loggers')"
          >
            FEATURES
          </button> -->

          <button
            class="nav-link"
            id="nav-Loggers-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Loggers"
            type="button"
            role="tab"
            aria-controls="nav-Loggers"
            aria-selected="false"
            @click="this.$router.push('/surveys/' + id + '/settings')"
          >
            SETTTING
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm p-3 mt-0">
      <router-view></router-view>
    </div>

    <div class="text-end mt-3 mb-3">
      <button class="btn btn-outline-danger m-2 btn-sm">Delete Survey</button>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "SurveyDetailScreen",
  data() {
    return {
      id: "",
      surveyFormQuestionDetail: {},
      surveyDetail: {},
    };
  },
  mounted() {
    this.id = this.$route.params.surveyId;
    this.fetchSurveyDetail();
    this.fetchSurveyQuestionDetail();
  },

  methods: {
    fetchSurveyDetail() {
      axiosConn
        .get("/getSurveyForm?businessId=1&projectId=1&surveyFormId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.surveyDetail = res.data;
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
          this.surveyFormQuestionDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="css" scoped></style>
