<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item">
            <a href="#" @click="this.$router.push('/surveys/')">Survey </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Survey Name</li>
        </ol>
      </nav>
    </div>

    <div>
      <div class="bg-white shadow shadow-sm mt-3 p-3">
        <div class="row">
          <div class="col">
            <button
              class="btn btn-primary w-100"
              @click="this.$router.push('/surveys/' + id)"
            >
              Survey Detail
            </button>
          </div>
          <div class="col">
            <button
              class="btn btn-outline-primary w-100"
              @click="this.$router.push('/surveys/' + id + '/raw')"
            >
              Raw Feedback Screen
            </button>
          </div>
          <div class="col">
            <button
              class="btn btn-outline-primary w-100"
              @click="this.$router.push('/surveys/' + id + '/filtered')"
            >
              Filtered Feedback Screen
            </button>
          </div>
          <div class="col">
            <button
              class="btn btn-outline-primary w-100"
              @click="this.$router.push('/surveys/' + id + '/bin')"
            >
              Bin Feedback Screen
            </button>
          </div>
          <div class="col">
            <button
              class="btn btn-outline-primary w-100"
              @click="this.$router.push('/surveys/' + id + '/done')"
            >
              Done Feedback Screen
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
        <table class="table table-bordered table-hover mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Question</td>
              <td>Type</td>
              <td>Category</td>
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

    <div class="text-center mt-3 mb-3">
      <button class="btn btn-danger m-2 w-25">Delete</button>
      <button
        class="btn btn-primary m-2 w-25"
        @click="this.$router.push('/surveys/' + id + '/surveysettings/general/')"
      >
        Survey Settings
      </button>
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
    };
  },
  mounted() {
    this.id = this.$route.params.surveyId;
    this.fetchSurveyQuestionDetail();
  },

  methods: {
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
  },
};
</script>

<style lang="scss" scoped></style>
