<template>
  <div>
    <FeedbackTabular
      :criteria="{ key: 'formId', value: id, operation: 'EQUAL' }"
      :calledFrom="'formId'"
    />
  </div>
</template>

<script>
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
