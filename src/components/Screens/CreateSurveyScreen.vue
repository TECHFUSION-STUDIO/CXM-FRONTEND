<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Survey Name</label>
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
            <label for="categoryDesc" class="form-label">Survey Description</label>
            <textarea
              class="form-control"
              id="categoryDesc"
              rows="3"
              v-model="inpSurveyDesc"
            ></textarea>
          </div>
        </div>
        <div class="col-md-6">
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
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Survey Status</label>
            <select id="categoryStatus" class="form-select" v-model="inpSurveyStatus">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <div class="text-center mt-3 mb-3">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <button class="btn btn-outline-success m-2 w-25" @click="createSurvey()">
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
  data() {
    return {
      inpSurveyName: "",
      inpSurveyStatus: "",
      inpSurveyStartTime: "",
      inpSurveyEndTime: "",
      inpSurveyDesc: "",

      axiosConn,
    };
  },
  methods: {
    createSurvey() {
      axiosConn
        .post("/createsurveyform", {
          businessId: 1,
          projectId: 1,
          surveyFormName: this.inpSurveyName,
          surveyFormDescription: this.inpSurveyDesc,
          surveyFormStatus: this.inpSurveyStatus,
          startDateTime: this.inpSurveyStartTime,
          endDateTime: this.inpSurveyEndTime,
          addedDateTime: "2023-06-24T10:16:01.682Z",
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
