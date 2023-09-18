<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row w-100">
        <div class="col-md-3">
          <button
            class="btn btn-primary mt-2"
            @click="this.$router.push('/createsurveys')"
          >
            Create a Survey
          </button>
        </div>
        <div class="col-md-6">
          <div class="input-group mt-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search Services"
              aria-label="Search"
            />
            <button class="btn btn-success">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="table-responsive-md mt-3">
        <table class="table table-hover table-bordered mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Survey Name</td>

              <td>Status</td>
              <td>Last Response</td>
              <td>Tot Response</td>
              <td>Added DateTime</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in surveyFormList" :key="item.id">
              <td style="width: 40%">
                <span
                  id="feedbackTitle"
                  @click="this.$router.push('/surveys/' + item.id)"
                  >{{ item.surveyFormName }}</span
                >
              </td>
              <td>
                <!-- {{ item.surveyFormStatus }} -->
                <span class="badge text-bg-success">{{ item.surveyFormStatus }}</span>
              </td>
              <td>vs</td>

              <td></td>
              <td>{{ item.addedDateTime }}</td>
            </tr>
          </tbody>
        </table>

        <!-- <div class="text-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link">Prev</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>

              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "SurveyScreen",
  data() {
    return {
      surveyFormList: [],
      axiosConn,
    };
  },
  mounted() {
    this.fetchAllSurveyForm();
  },
  methods: {
    fetchAllSurveyForm() {
      axiosConn
        .get("/getallsurveyform?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.surveyFormList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
