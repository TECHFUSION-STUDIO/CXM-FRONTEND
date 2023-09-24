<template>
  <div>
    <div class="bg-white shadow shadow-sm p-3">
      <p class="text-muted mb-0">Id : {{ this.FeedbackStore.feedbackDetails.id }}</p>

      <h5 class="mt-1">{{ this.FeedbackStore.feedbackDetails.feedbackDescription }}</h5>
      <p class="text-muted">
        Created By Anonymous via Page Name at
        {{ this.FeedbackStore.feedbackDetails.addedDateTime }}
      </p>

      <p>{{ this.FeedbackStore.feedbackDetails.feedbackDescription }}</p>
    </div>
  </div>
</template>

<script>
// import axiosConn from "@/axioscon";
import FeedbackMixin from "../mixins/FeedbackMixin";
import { FeedbackStore } from "../mixins/FeedbackStore";

export default {
  name: "FeedbackDetail",
  mixins: [FeedbackMixin],

  data() {
    return {
      id: this.$route.params.fid,
      FeedbackStore,
    };
  },
  mounted() {
    this.id = this.$route.params.fid;
    console.log(this.FeedbackStore.feedbackDetails);
    console.log(this.FeedbackStore.testTemp);
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
