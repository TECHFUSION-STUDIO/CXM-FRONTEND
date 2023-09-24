<template>
  <div class="bg-white shadow shadow-sm mt-3 p-3">
    <h6>Migrate Feedback</h6>
    <div class="row mt-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label"><i>Current State :</i></label>
        <select class="form-control" disabled v-model="source">
          <option value="RAW">RAW</option>
          <option value="FILTERED">FILTERED</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="TRASH">TRASH</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label"><i>Migrate To State :</i></label>
        <select class="form-control" v-model="destination">
          <option value="RAW">RAW</option>
          <option value="FILTERED">FILTERED</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="TRASH">TRASH</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import { FeedbackStore } from "../mixins/FeedbackStore";

export default {
  name: "FeedbackMigrate",
  data() {
    return {
      id: this.$route.params.fid,
      source: "",
      destination: "",
      FeedbackStore,
    };
  },
  mounted() {
    console.log(this.FeedbackStore.feedbackDetails.feedbackType);
    this.source = this.FeedbackStore.feedbackDetails.feedbackType;
  },
  methods: {
    migrate() {
      axiosConn
        .get(
          "/migrateFeedback?businessId=1&projectId=1&feedbackId=" +
            this.id +
            "&destination=" +
            this.source +
            "&source=" +
            this.destination
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
