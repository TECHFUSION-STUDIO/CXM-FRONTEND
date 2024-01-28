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
            <a @click="this.$router.push('/surveys/' + id)">Survey Detail</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Survey Question
          </li>
        </ol>
      </nav>
    </div>

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
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Question Type</label>
            <select
              id="categoryStatus"
              class="form-select"
              v-model="inpSurveyQuestionType"
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
            inpSurveyQuestionType == 'Multiple Choice' ||
            inpSurveyQuestionType == 'Single Choice' ||
            inpSurveyQuestionType == 'Dropdown' ||
            inpSurveyQuestionType == 'Voting'
          "
        >
          <div class="mb-3">
            <label for="categoryName" class="form-label"
              >Enter the number of options
            </label>
            <input
              class="form-control"
              id="categoryName"
              type="number"
              v-model="inpSurveyQuestionAnswerTotOptions"
            />
          </div>
        </div>

        <template
          v-if="
            (inpSurveyQuestionType == 'Multiple Choice' ||
              inpSurveyQuestionType == 'Single Choice' ||
              inpSurveyQuestionType == 'Dropdown' ||
              inpSurveyQuestionType == 'Voting') &&
            inpSurveyQuestionAnswerTotOptions > 0
          "
        >
          <label for="categoryName" class="form-label">Enter the Options below </label>
          <div
            class="col-md-12"
            v-for="item in inpSurveyQuestionAnswerTotOptions"
            :key="item"
          >
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">{{ item }}</span>
              <input
                type="text"
                class="form-control"
                :placeholder="'Enter option ' + item"
                @blur="(e) => addOptions(e, item)"
              />
            </div>
          </div>
        </template>
      </div>
      <!-- <div class="row mt-4">
        <div class="col-md-6">
          <div class="mb-3">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"
                >Marking Scheme required?</span
              >
              <select
                id="categoryStatus"
                class="form-select"
                v-model="inpSurveyQuestionMarkingReq"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
        </div>
        <template v-if="inpSurveyQuestionMarkingReq == 'true'">
          <div class="col-md-3">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Positive Marks</span>
              <input
                type="number"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col-md-3">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Negative Mark</span>
              <input
                type="number"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div></div
        ></template>
      </div>

      <div class="row mt-4">
        <div class="col-md-4">
          <div class="mb-3">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Timeout Required?</span>
              <select
                id="categoryStatus"
                class="form-select"
                v-model="inpSurveyQuestionTimeoutReq"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
        </div>
        <template v-if="inpSurveyQuestionTimeoutReq == 'true'">
          <div class="col-md-4">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Timeout Period</span>
              <input
                type="number"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="inpSurveyQuestionTimeout"
              /><select
                id="categoryStatus"
                class="form-select"
                v-model="inpSurveyQuestionTimeoutUnitReq"
              >
                <option value="hr">Hour</option>
                <option value="min">Min</option>

                <option value="sec">Sec</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">After Timeout</span>
              <select
                id="categoryStatus"
                class="form-select"
                v-model="inpSurveyQuestionAfterTimeout"
              >
                <option value="hr">Show Timeout Alert</option>
                <option value="min">Move to Next Question</option>

                <option value="sec">Sec</option>
              </select>
            </div>
          </div></template
        >
      </div> -->

      <div class="">
        <div class="text-center mt-3 mb-3">
          <button class="btn btn-outline-danger m-2 w-25">Reset</button>
          <button
            class="btn btn-outline-success m-2 w-25"
            @click="createSurveyQuestion()"
          >
            Create
          </button>
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
      inpSurveyQuestionRequired: false,
      inpSurveyQuestionMarkingReq: "",
      inpSurveyQuestionTimeoutReq: "",
      inpSurveyQuestionTimeoutUnitReq: "",
      inpSurveyQuestionTimeout: "",
      inpSurveyQuestionAfterTimeout: "",
      inpSurveyQuestionAnswerTotOptions: 0,
      inpSurveyQuestionAnswerOptionsArray: [],

      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.surveyId;
  },
  methods: {
    addOptions(e, index) {
      if (e.target.value != null) {
        this.inpSurveyQuestionAnswerOptionsArray[index - 1] = e.target.value;
        console.log(this.inpSurveyQuestionAnswerOptionsArray);
      }
    },
    createSurveyQuestion() {
      axiosConn
        .post("/createQuestion", {
          businessId: 1,
          workspaceId: 1,
          formId: this.id,
          question: this.inpSurveyQuestionName,
          status: this.inpSurveyQuestionStatus,
          description: this.inpSurveyQuestionDesc,
          type: this.inpSurveyQuestionType,
          options: this.inpSurveyQuestionAnswerOptionsArray,
          isMandatory: this.inpSurveyQuestionRequired,
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
