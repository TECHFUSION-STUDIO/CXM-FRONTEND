<template>
  <div>
    <div class="table-responsive-md mt-2">
      <table class="table table-bordered table-hover mt-4 w-100 shadow-sm">
        <thead>
          <tr class="bg-light">
            <th>Submission Id</th>
            <th>Logger Id</th>
            <th>Time Spent</th>
            <th>Form Open Time</th>
            <th>Submission Time</th>
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
            <td>{{ item.reporterId }}</td>
            <td>2 min</td>
            <td>{{ item.createdAt }}</td>
            <td>{{ item.createdAt }}</td>
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
        .get("/findFormSubmission?businessId=1&workspaceId=1&formId=" + this.id)
        .then((res) => {
          console.log(res);
          this.submissionList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
