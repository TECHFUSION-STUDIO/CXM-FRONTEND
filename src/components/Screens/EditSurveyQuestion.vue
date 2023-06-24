<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item">
            <a href="#" @click="this.$router.push('/surveys/')">Survey </a>
          </li>
          <li class="breadcrumb-item">
            <a href="#" @click="this.$router.push('/surveys/' + surveyId)"
              >Survey Detail</a
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">Edit Survey Question</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <p class="text-muted">Question Id : {{ surveyQuestionDetail.id }}</p>
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Enter Question</label>
            <input
              type="text"
              class="form-control"
              id="categoryName"
              v-model="surveyQuestionDetail.surveyQuestion"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryDesc" class="form-label">Enter Description</label>
            <textarea
              class="form-control"
              id="categoryDesc"
              rows="3"
              v-model="surveyQuestionDetail.surveyQuestionDesc"
            ></textarea>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Question Type</label>
            <select
              id="categoryStatus"
              class="form-select"
              v-model="surveyQuestionDetail.surveyQuestionType"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Question Category</label>
            <select
              id="categoryStatus"
              class="form-select"
              v-model="surveyQuestionDetail.surveyQuestionCategory"
            >
              <option value="NPS">NPS</option>
              <option value="5 Star">5 Star</option>
              <option value="Questionaire">Questionaire</option>
              <option value="Voting">Voting</option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Question Required</label>
            <select
              id="categoryStatus"
              class="form-select"
              v-model="surveyQuestionDetail.surveyQuestionRequired"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Question Status</label>
            <select
              id="categoryStatus"
              class="form-select"
              v-model="surveyQuestionDetail.surveyQuestionStatus"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <div class="text-center mt-3 mb-3">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <button
              class="btn btn-outline-success m-2 w-25"
              @click="updateSurveyQuestionDetail()"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "EditSurveyQuestion",

  data() {
    return {
      id: "",
      surveyId: "",
      surveyQuestionDetail: {},
      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.surveyQuestionId;

    this.surveyId = this.$route.params.surveyId;
    this.fetchSurveyQuestionDetail();
  },
  methods: {
    fetchSurveyQuestionDetail() {
      axiosConn
        .get(
          "/getsurveyquestionbyid?businessId=1&projectId=1&surveyQuestionId=" + this.id
        )
        .then((res) => {
          console.log(res.data);
          this.surveyQuestionDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateSurveyQuestionDetail() {
      axiosConn
        .post("/updatesurveyquestion", this.surveyQuestionDetail)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
