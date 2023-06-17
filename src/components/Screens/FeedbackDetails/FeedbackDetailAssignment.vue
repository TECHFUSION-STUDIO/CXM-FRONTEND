<template>
  <div>
    <div class="bg-light shadow shadow-sm p-3">
      <p>Created at :</p>
      <p>0 Comments</p>
      <p>0 Backing Customers</p>
      <hr />
      <p>
        <label for="customRange1" class="form-label">Assigned Board :</label>
      </p>
      <p>
        <label for="customRange1" class="form-label">Assigned to :</label>
      </p>

      <p>
        <label for="customRange1" class="form-label">Logger Id :</label>

        <input class="form-control" disabled />
      </p>

      <p>
        <label for="customRange1" class="form-label">Posted By :</label>

        <input class="form-control" disabled />
      </p>

      <p>
        <label for="customRange1" class="form-label">Owned By :</label>
      </p>

      <hr />
      <p>
        <label for="customRange1" class="form-label">Status :</label>
      </p>
      <p>
        <label for="customRange1" class="form-label">Category :</label>
      </p>
      <hr />
      <p>
        <label for="customRange1" class="form-label">Source Type :</label>
      </p>
      <p>
        <label for="customRange1" class="form-label">Source Item :</label>
      </p>
      <hr />
      <p>
        <label for="customRange1" class="form-label">Priority</label>
      </p>
      <p>
        <label for="customRange1" class="form-label">Impact</label>
      </p>
      <p>
        <label for="customRange1" class="form-label">Effort </label>
      </p>
      <hr />
      <p>Nice To Have Voters : 10</p>
      <p>Important Voters : 10</p>

      <p>Critical Voters : 10</p>
    </div>
  </div>
</template>

<script>
import axioscon from "@/axioscon";

export default {
  name: "FeedbackDetailAssignment",

  props: ["feedback"],
  data() {
    return {
      axioscon,
      id: "",
      feedbackDetails: this.feedback,
      selectedPriority: { name: this.feedback.detail.feedbackPriority },
      selectedImpact: { name: this.feedback.detail.feedbackImpact },
      selectedEffort: { name: this.feedback.detail.feedbackEffort },

      pieData: [
        { name: "Very High" },
        { name: "High" },
        { name: "Medium" },
        { name: "Low" },
        { name: "Very Low" },
      ],
      status: {
        searchValue: { name: this.feedback.detail.feedbackStatus },
        dataListItems: [
          {
            name: "RAW",
          },
          {
            name: "FILTERED",
          },
          {
            name: "SCREENED",
          },
          {
            name: "PLANNED",
          },
          { name: "PROGRESS" },
          {
            name: "DONE",
          },
          {
            name: "CLOSED",
          },
          {
            name: "OPEN",
          },
        ],
      },
    };
  },
  // mounted() {
  //   this.id = this.$route.params.fid;
  //   console.log(this.id);
  //   console.log(this.feedbackDetails);
  //   this.fetchAllCategory();
  //   console.log(this.status.searchValue);
  //   this.fetchAllBoards();
  // },
  // beforeRouteUpdate(to, from, next) {
  //   console.log("Before Route Update" + to.params.fid);
  //   this.id = to.params.fid;
  //   console.log(this.id);

  //   this.fetchAllCategory();
  //   this.fetchAllBoards();
  //   next();
  // },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
