<template>
  <div>
    <div class="table-responsive-md mt-2">
      <table class="table table-bordered table-hover mt-4 w-100">
        <thead>
          <tr class="bg-light">
            <td>Submission Id</td>
            <td>Logger Id</td>
            <td>Time Spent</td>
            <td>Form Open Time</td>
            <td>Submission Time</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in submissionList" :key="item.id">
            <td>
              <a
                @click="this.$router.push('/surveys/' + id + '/submission/' + item.id)"
                >{{ item.id }}</a
              >
            </td>
            <td>{{ item.loggerId }}</td>
            <td>2 min</td>
            <td>{{ item.addedDateTime }}</td>
            <td>{{ item.addedDateTime }}</td>
          </tr>
          <tr v-if="submissionList.length == 0">
            <td class="text-center" colspan="5"><i>No Data Found</i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
export default {
  name: "SurveySubmissionScreen",
  data() {
    return {
      submissionList: [],
      id: this.$route.params.surveyId,
    };
  },
  mounted() {
    this.fetchAllSubmission();
  },
  methods: {
    fetchAllSubmission() {
      axiosConn
        .get("/getSubmission?businessId=1&projectId=1&surveyId=" + this.id)
        .then((res) => {
          console.log(res);
          this.submissionList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
