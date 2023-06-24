<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">Survey </a></li>
          <li class="breadcrumb-item active" aria-current="page">Survey Name</li>
        </ol>
      </nav>
    </div>

    <div>
      <div class="bg-white shadow shadow-sm mt-3 p-3">
        <div class="row">
          <div class="col">
            <button
              class="btn btn-primary w-100"
              @click="this.$router.push('/surveys/3')"
            >
              Survey Detail
            </button>
          </div>
          <div class="col">
            <button
              class="btn btn-outline-primary w-100"
              @click="this.$router.push('/surveys/3/raw')"
            >
              Raw Feedback Screen
            </button>
          </div>
          <div class="col">
            <button
              class="btn btn-outline-primary w-100"
              @click="this.$router.push('/surveys/3/filtered')"
            >
              Filtered Feedback Screen
            </button>
          </div>
          <div class="col">
            <button
              class="btn btn-outline-primary w-100"
              @click="this.$router.push('/surveys/3/bin')"
            >
              Bin Feedback Screen
            </button>
          </div>
          <div class="col">
            <button
              class="btn btn-outline-primary w-100"
              @click="this.$router.push('/surveys/3/done')"
            >
              Done Feedback Screen
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-3 mb-3">
      <button class="btn btn-danger m-2 w-25">Delete</button>
      <button
        class="btn btn-primary m-2 w-25"
        @click="this.$router.push('/editsurveys/' + id)"
      >
        Edit Survey
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SurveyDetailScreen",
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    this.id = this.$route.params.surveyId;
  },
};
</script>

<style lang="scss" scoped></style>
