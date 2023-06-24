<template>
  <div>
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

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="d-flex mb-2">
        <div class="me-auto">
          <h6>Survey Questions</h6>
        </div>
        <!-- <div class="p-2">Flex item</div> -->
        <div>
          <button
            class="btn btn-sm btn-primary"
            @click="this.$router.push('/surveys/' + id + '/createquestion')"
          >
            Add Question
          </button>
        </div>
      </div>

      <div class="table-responsive-md mt-2">
        <table class="table table-hover mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Question</td>
              <td>Question Type</td>
              <td>Question Category</td>
              <td>Mandatory</td>
              <td>Status</td>
              <td>Created Time</td>
              <td>Last Updated Time</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in surveyFormQuestionDetail" :key="item.id">
              <td>{{ item.surveyQuestion }}</td>
              <td>{{ item.surveyQuestionType }}</td>
              <td>{{ item.surveyQuestionCategory }}</td>
              <td>{{ item.surveyQuestionRequired }}</td>
              <td>{{ item.surveyQuestionStatus }}</td>
              <td>{{ item.addedDateTime }}</td>
              <td>{{ item.lastModifiedDateTime }}</td>
              <td>
                <button
                  class="btn btn-primary btn-sm me-1"
                  @click="
                    this.$router.push('/surveys/' + id + '/editquestion/' + item.id)
                  "
                >
                  Edit
                </button>
                <!-- <button class="btn btn-danger btn-sm">Delete</button> -->
              </td>
            </tr>
          </tbody>
        </table>
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
      surveyFormQuestionDetail: {},
      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.surveyId;
    this.fetchSurveyFormDetail();
    this.fetchSurveyQuestionDetail();
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
    fetchSurveyQuestionDetail() {
      axiosConn
        .get("/getallsurveyquestion?businessId=1&projectId=1&surveyFormId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.surveyFormQuestionDetail = res.data;
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
