<template>
  <div>
    <FeedbackTabular
      :criteria="{ key: 'surveyFormId', value: id, operation: 'EQUAL' }"
      feedbackType="RAW"
      :calledFrom="'SURVEY@' + id"
    />
  </div>
</template>

<script>
// import axiosConn from "@/axioscon";
import FeedbackTabular from "./tables/FeedbackTabular.vue";

export default {
  name: "RawFeedbackScreen",
  components: {
    FeedbackTabular,
  },
  data() {
    return {
      id: this.$route.params.surveyId,
    };
  },
  mounted() {
    this.id = this.$route.params.surveyId;
  },
};
</script>

<style scoped></style>
