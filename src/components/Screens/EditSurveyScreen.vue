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
          <li class="breadcrumb-item active" aria-current="page">Edit Survey</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <p class="text-muted">Survey Id : {{ id }}</p>
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Survey Name</label>
            <input
              type="text"
              class="form-control"
              id="categoryName"
              v-model="surveyFormDetail.surveyFormName"
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
              v-model="surveyFormDetail.surveyFormDescription"
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
              v-model="surveyFormDetail.startDateTime"
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
              v-model="surveyFormDetail.endDateTime"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Survey Status</label>
            <select
              id="categoryStatus"
              class="form-select"
              v-model="surveyFormDetail.surveyFormStatus"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <div class="text-center mt-3 mb-3">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <!-- <button class="btn btn-outline-primary m-2 w-25">Edit</button> -->
            <button
              class="btn btn-outline-success m-2 w-25"
              @click="updateSurveyFormDetail()"
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
  name: "EditSurveyScreen",
  data() {
    return {
      id: "",
      surveyFormDetail: {},
      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.surveyId;
    this.fetchSurveyFormDetail();
  },
  methods: {
    fetchSurveyFormDetail() {
      axiosConn
        .get("/getsurveyformbyid?businessId=1&projectId=1&surveyFormId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.surveyFormDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateSurveyFormDetail() {
      axiosConn
        .post("/updatesurveyform", this.surveyFormDetail)
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
