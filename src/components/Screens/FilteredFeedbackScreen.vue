<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">Survey </a></li>
          <li class="breadcrumb-item">Survey Name</li>
          <li class="breadcrumb-item active" aria-current="page">Filtered Feedback</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col">
          <button
            class="btn btn-outline-primary w-100"
            @click="this.$router.push('/surveys/' + id)"
          >
            Survey Detail
          </button>
        </div>
        <div class="col">
          <button
            class="btn btn-outline-primary w-100"
            @click="this.$router.push('/surveys/' + id + '/raw')"
          >
            Raw Feedback Screen
          </button>
        </div>
        <div class="col">
          <button class="btn btn-primary w-100">Filtered Feedback Screen</button>
        </div>
        <div class="col">
          <button
            class="btn btn-outline-primary w-100"
            @click="this.$router.push('/surveys/' + id + '/bin')"
          >
            Bin Feedback Screen
          </button>
        </div>
        <div class="col">
          <button
            class="btn btn-outline-primary w-100"
            @click="this.$router.push('/surveys/' + id + '/done')"
          >
            Done Feedback Screen
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <FeedbackTabular
        :criteria="{ key: 'surveyFormId', value: id, operation: 'EQUAL' }"
        feedbackType="FILTERED"
        :calledFrom="'FILTERED_SURVEY@' + id"
      />
    </div>
  </div>
</template>

<script>
import FeedbackTabular from "./designlib/FeedbackTabular.vue";

export default {
  name: "FilteredFeedbackScreen",
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

<style lang="scss" scoped></style>
