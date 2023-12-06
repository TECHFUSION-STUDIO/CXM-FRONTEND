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
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/surveys/' + surveyId)">Survey Detail</a>
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

        <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Question Type</label>
            <select
              id="categoryStatus"
              class="form-select"
              v-model="surveyQuestionDetail.surveyQuestionType"
            >
              <option value="NPS">NPS</option>
              <option value="Rating">Rating</option>
              <option value="Voting">Voting</option>
              <option value="Single Line Text">Single Line Text</option>
              <option value="Multi Line Text">Multi Line Text</option>
              <option value="Multiple Choice">Multiple Choice</option>
              <option value="Single Choice">Single Choice</option>
              <option value="Dropdown">Dropdown</option>
            </select>
          </div>
        </div>

        <div
          class="col-md-6"
          v-if="
            surveyQuestionDetail.surveyQuestionType == 'Multiple Choice' ||
            surveyQuestionDetail.surveyQuestionType == 'Single Choice' ||
            surveyQuestionDetail.surveyQuestionType == 'Dropdown' ||
            surveyQuestionDetail.surveyQuestionType == 'Voting'
          "
        >
          <div class="mb-3">
            <label for="categoryName" class="form-label">
              Enter the number of options
            </label>
            <input
              class="form-control"
              id="categoryName"
              type="number"
              v-model="surveyQuestionDetail.surveyQuestionTotalOption"
            />
          </div>
        </div>

        <template
          v-if="
            (surveyQuestionDetail.surveyQuestionType == 'Multiple Choice' ||
              surveyQuestionDetail.surveyQuestionType == 'Single Choice' ||
              surveyQuestionDetail.surveyQuestionType == 'Dropdown' ||
              surveyQuestionDetail.surveyQuestionType == 'Voting') &&
            surveyQuestionDetail.surveyQuestionTotalOption > 0
          "
        >
          <label for="categoryName" class="form-label">Enter the Options below </label>
          <div
            class="col-md-12"
            v-for="item in surveyQuestionDetail.surveyQuestionTotalOption"
            :key="item"
          >
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">{{ item }}</span>
              <input
                type="text"
                class="form-control"
                v-model="inpSurveyQuestionAnswerOptionsArray[item - 1]"
                :placeholder="'Enter option ' + item"
                @blur="(e) => addOptions(e, item)"
              />
            </div>
          </div>
        </template>

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
      inpSurveyQuestionAnswerOptionsArray: [],
      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.surveyQuestionId;

    this.surveyId = this.$route.params.surveyId;
    this.fetchSurveyQuestionDetail();
  },
  methods: {
    addOptions(e, index) {
      if (e.target.value != null) {
        this.inpSurveyQuestionAnswerOptionsArray[index - 1] = e.target.value;
        console.log(this.inpSurveyQuestionAnswerOptionsArray);
      }
    },
    fetchSurveyQuestionDetail() {
      axiosConn
        .get("/getSurveyQuestion?businessId=1&projectId=1&surveyQuestionId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.surveyQuestionDetail = res.data;
          this.inpSurveyQuestionAnswerOptionsArray = res.data.surveyQuestionOptions.map(
            (a) => a.option
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateSurveyQuestionDetail() {
      if (
        this.inpSurveyQuestionAnswerOptionsArray.length >
        this.surveyQuestionDetail.surveyQuestionTotalOption
      ) {
        this.inpSurveyQuestionAnswerOptionsArray.splice(
          this.surveyQuestionDetail.surveyQuestionTotalOption,
          this.inpSurveyQuestionAnswerOptionsArray.length -
            this.surveyQuestionDetail.surveyQuestionTotalOption
        );
      }
      this.surveyQuestionDetail.optionList = this.inpSurveyQuestionAnswerOptionsArray;
      console.log(this.surveyQuestionDetail.optionList);

      axiosConn
        .post("/updateSurveyQuestion", this.surveyQuestionDetail)
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
