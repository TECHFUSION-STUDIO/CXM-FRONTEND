<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2" v-if="type != 'offcanvas'">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/surveys/')">Survey </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Create New Survey</li>
        </ol>
      </nav>
    </div>

    <div :class="type != 'offcanvas' ? 'bg-white shadow shadow-sm mt-3 p-3' : ''">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryName" class="form-label"
              >Form Name<span class="ms-1 fw-bold"><sup>*</sup></span></label
            >
            <input
              type="text"
              class="form-control"
              id="categoryName"
              v-model="inpSurveyName"
            />
          </div>
        </div>

        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryDesc" class="form-label">Form Description</label>
            <textarea
              class="form-control"
              id="categoryDesc"
              rows="3"
              v-model="inpSurveyDesc"
            ></textarea>
          </div>
        </div>
        <!-- <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Survey Start Date</label>
            <input
              type="datetime-local"
              class="form-control"
              id="categoryName"
              v-model="inpSurveyStartTime"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Survey End Date</label>
            <input
              type="datetime-local"
              class="form-control"
              id="categoryName"
              v-model="inpSurveyEndTime"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Survey Status</label>
            <select id="categoryStatus" class="form-select" v-model="inpSurveyStatus">
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Survey Type</label>
            <select id="categoryStatus" class="form-select" v-model="inpSurveyType">
              <option value="SURVEY">Survey</option>
              <option value="QUIZ" disabled>Quiz (coming soon)</option>
            </select>
          </div>
        </div> -->

        <div class="col-md-12">
          <div class="text-center mt-3 mb-3">
            <button class="btn btn-outline-danger m-2 w-25 fw-bold">Reset</button>
            <button
              :class="
                submitButtonEnable
                  ? 'btn btn-outline-success m-2 w-25 fw-bold'
                  : 'btn btn-outline-success m-2 w-25 fw-bold disabled'
              "
              @click="createSurvey()"
            >
              Submit
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
  name: "CreateSurveyScreen",
  props: ["type"],

  data() {
    return {
      inpSurveyName: "",
      inpSurveyStatus: "INACTIVE",
      inpSurveyStartTime: "",
      inpSurveyEndTime: "",
      inpSurveyDesc: "",
      inpSurveyType: "SURVEY",
      errMsg: {
        surveyName: "",
        status: "",
        startTime: "",
        timeerror: "",
      },
      axiosConn,
      submitButtonEnable: false,
    };
  },
  updated() {
    if (this.inpSurveyName != null && this.inpSurveyName.trim() != "") {
      this.submitButtonEnable = true;
      return true;
    } else {
      this.submitButtonEnable = false;
      return false;
    }
  },
  methods: {
    validate() {
      if (this.inpSurveyName != null && this.inpSurveyName.trim() != "") {
        this.submitButtonEnable = true;
        return true;
      } else {
        this.submitButtonEnable = false;
        return false;
      }
    },
    createSurvey() {
      if (this.validate()) {
        axiosConn
          .post("/createSurveyForm", {
            businessId: 1,
            projectId: 1,
            surveyFormName: this.inpSurveyName,
            surveyFormDescription: this.inpSurveyDesc,
            surveyFormStatus: this.inpSurveyStatus,
            startDateTime: this.inpSurveyStartTime,
            surveyType: this.inpSurveyType,
            endDateTime: this.inpSurveyEndTime,
            addedDateTime: "2023-06-24T10:16:01.682Z",
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
