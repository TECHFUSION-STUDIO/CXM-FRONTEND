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

  methods: {},
};
</script>

<style lang="scss" scoped></style>
