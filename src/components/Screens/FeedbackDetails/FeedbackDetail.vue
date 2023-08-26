<template>
  <div>
    <div class="bg-white shadow shadow-sm p-3">
      <p class="text-muted mb-0">Id : {{ feedbackDetails.id }}</p>

      <h5 class="mt-1">{{ feedbackDetails.feedbackDescription }}</h5>
      <p class="text-muted">
        Created By Anonymous via Page Name at {{ feedbackDetails.addedDateTime }}
      </p>

      <p>{{ feedbackDetails.feedbackDescription }}</p>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "FeedbackDetail",
  data() {
    return {
      id: this.$route.params.fid,
      feedbackDetails: {},
    };
  },
  mounted() {
    this.id = this.$route.params.fid;
    this.fetchFeedbackDetail();
  },
  methods: {
    fetchFeedbackDetail() {
      axiosConn
        .get(
          "/getfeedbackdetailsbyid?businessId=1&feedbackType=RAW&projectId=" +
            1 +
            "&feedbackId=" +
            this.id
        )
        .then((res) => {
          console.log(res);
          this.feedbackDetails = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
