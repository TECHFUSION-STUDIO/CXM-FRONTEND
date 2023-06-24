<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Enter Question</label>
            <input
              type="text"
              class="form-control"
              id="categoryName"
              v-model="inpSurveyQuestionName"
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
              v-model="inpSurveyQuestionDesc"
            ></textarea>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Question Type</label>
            <select
              id="categoryStatus"
              class="form-select"
              v-model="inpSurveyQuestionType"
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
              v-model="inpSurveyQuestionCategory"
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
              v-model="inpSurveyQuestionRequired"
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
              v-model="inpSurveyQuestionStatus"
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
              @click="createSurveyQuestion()"
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
  name: "CreateSurveyQuestion",
  data() {
    return {
      id: "",
      inpSurveyQuestionName: "",
      inpSurveyQuestionStatus: "",
      inpSurveyQuestionDesc: "",
      inpSurveyQuestionType: "",
      inpSurveyQuestionCategory: "",
      inpSurveyQuestionRequired: "",

      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.surveyId;
  },
  methods: {
    createSurveyQuestion() {
      axiosConn
        .post("/createsurveyquestion", {
          businessId: 1,
          projectId: 1,
          surveyFormId: this.id,
          surveyQuestion: this.inpSurveyQuestionName,
          surveyQuestionStatus: this.inpSurveyQuestionStatus,
          surveyQuestionDesc: this.inpSurveyQuestionDesc,
          surveyQuestionType: this.inpSurveyQuestionType,
          surveyQuestionCategory: this.inpSurveyQuestionCategory,
          lastModifiedDateTime: "2023-06-24T10:57:19.485Z",
          addedDateTime: "2023-06-24T10:57:19.485Z",
          surveyQuestionRequired: this.inpSurveyQuestionRequired,
        })
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
