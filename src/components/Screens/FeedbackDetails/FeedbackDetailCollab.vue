<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3"></div>
  </div>
</template>

<script>
import axioscon from "@/axioscon.js";

export default {
  name: "FeedbackDetailCollab",
  props: ["feedback"],

  data() {
    return {
      feedbackDetails: this.feedback,
      feedbackSearch: {
        searchValue: [],
        dataListItems: [],
        dataSelect: "",
        isLoading: false,
      },
      feedbackCollabList: [],
      feedbackCollabTitle: "",
      axioscon,
    };
  },
  // mounted() {
  //   this.id = this.$route.params.fid;
  //   console.log(this.id);

  //   this.fetchAllFeedbackCollab();
  //   // this.fetchAllFeedback();
  // },
  // beforeRouteUpdate(to, from, next) {
  //   console.log("Before Route Update" + to.params.fid);

  //   this.id = to.params.fid;

  //   console.log(this.id);

  //   this.fetchAllFeedbackCollab();
  //   // this.fetchAllFeedback();
  //   next();
  // },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
