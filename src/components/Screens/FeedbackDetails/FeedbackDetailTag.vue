<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <h6>Tags</h6>

      <div class="mt-3" id="collapseAddTag">
        <div class="input-group mt-2 mb-2">
          <div class="w-100"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axioscon from "../../../axioscon.js";

export default {
  name: "FeedbackDetailTag",
  props: ["feedback"],

  data() {
    return {
      feedbackDetails: this.feedback,
      tagSearch: {
        searchValue: this.feedback.tags,
        dataListItems: [],
      },
      tagList: [],
      axioscon,
      id: "",
    };
  },
  // mounted() {
  //   this.id = this.$route.params.fid;
  //   console.log(this.feedbackDetails);
  //   console.log(this.id);
  //   this.fetchAllTags();
  //   // this.fetchFeedbackTags();
  // },

  // beforeRouteUpdate(to, from, next) {
  //   console.log("Before Route Update" + to.params.fid);

  //   this.id = to.params.fid;

  //   console.log(this.id);
  //   this.fetchAllTags();
  //   // this.fetchFeedbackTags();

  //   next();
  // },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
