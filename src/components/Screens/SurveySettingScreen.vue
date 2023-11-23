<template>
  <div class="ps-2 pe-2 pb-3">
    <label class="me-2">All new Epics created for this form should be :</label>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1"
        value="option1"
      />
      <label class="form-check-label" for="inlineRadio1">Public</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio2"
        value="option2"
      />
      <label class="form-check-label" for="inlineRadio2">Private</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "SurveySettingScreen",
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
