<template>
  <div>
    <div class="w-100">
      <div class="">
        <div class="input-group w-50 me-auto ms-auto mt-2">
          <input
            class="form-control"
            type="search"
            placeholder="Search Survey Loggers"
            aria-label="Search"
          />
          <button class="btn btn-primary">
            <i class="fa-brands fa-searchengin"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="table-responsive-md mt-3">
      <table class="table table-hover table-bordered mt-4 w-100">
        <thead>
          <tr class="bg-light">
            <td style="width: 40%">Logger Name</td>
            <td>Email</td>
            <td>Contact</td>
            <td>Logged at</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in loggerList" :key="item.id">
            <td style="width: 40%">
              <a
                id="feedbackTitle"
                @click="this.$router.push('/loggerdetail/' + item.id)"
              >
                {{ item.loggerName }}</a
              >
            </td>
            <td>{{ item.loggerEmail }}</td>
            <td>{{ item.loggerContact }}</td>
            <td>{{ item.addedDateTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
export default {
  name: "SurveyLoggerScreen",
  data() {
    return {
      axiosConn,
      id: this.$route.params.surveyId,
      loggerList: [],
    };
  },
  mounted() {
    this.id = this.$route.params.surveyId;
    this.fetchAllLoggerList();
  },
  methods: {
    fetchAllLoggerList() {
      axiosConn
        .get("/getallloggers?businessId=1&projectId=1&surveyId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.loggerList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
