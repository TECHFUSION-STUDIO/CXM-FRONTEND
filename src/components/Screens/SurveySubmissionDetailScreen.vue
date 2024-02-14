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

      <div class="row mt-3">
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold fw-semibold" id="basic-addon1"
              >Logger Id</span
            >
            <input
              type="text"
              class="form-control"
              disabled
              :value="submissionDetail.id"
            />
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="this.$router.push('/loggerdetail/' + submissionDetail.id)"
            >
              <i class="fa-solid fa-up-right-from-square"></i>
            </button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1"
              >Form Opened at</span
            >
            <input
              type="text"
              class="form-control"
              disabled
              :value="submissionDetail.createdAt"
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1"
              >Form Submitted at</span
            >
            <input
              type="datetime-local"
              class="form-control"
              disabled
              :value="submissionDetail.createdAt"
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1">Time spent</span>
            <input type="text" class="form-control" disabled :value="'20 seconds'" />
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1"
              >Device ip Address</span
            >
            <input type="text" class="form-control" disabled />
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1">Device Geo</span>
            <input type="text" class="form-control" disabled />
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1">Device OS</span>
            <input type="text" class="form-control" disabled />
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1"
              >Device Browser</span
            >
            <input type="text" class="form-control" disabled :value="'20 seconds'" />
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1"
              >Devivce Type</span
            >
            <input type="text" class="form-control" disabled :value="'20 seconds'" />
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1"
              >Device Model</span
            >
            <input type="text" class="form-control" disabled :value="'20 seconds'" />
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1"
              >Device AppModel</span
            >
            <input type="text" class="form-control" disabled :value="'20 seconds'" />
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1"
              >Device Timezone</span
            >
            <input type="text" class="form-control" disabled :value="'20 seconds'" />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <h6>Form Data</h6>
      <div class="mt-3">
        <div class="mb-3" v-for="(item, index) in feedbackList" :key="item.id">
          <label for="exampleFormControlInput1" class="form-label">{{
            index + 1 + ". " + item.formQuestion.question
          }}</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            :value="item.description"
            disabled
          />
        </div>
        <i v-if="feedbackList.length == 0">No Data Found</i>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <h6>Form Decision Flow</h6>
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
    console.log(this.$router.options.history);
    this.getSubmissionDetail();
    this.getAllFeedback();
  },
  methods: {
    getSubmissionDetail() {
      axiosConn
        .get("/findFormSubmission?id=" + this.id)
        .then((res) => {
          console.log(res);
          this.submissionDetail = res.data.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAllFeedback() {
      axiosConn
        .get("/findResponse?businessId=1&workspaceId=1&formSubmissionId=" + this.id)
        .then((res) => {
          console.log(res);
          this.feedbackList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
