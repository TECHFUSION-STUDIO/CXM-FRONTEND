<template>
  <div class="ps-2 pe-2 pb-3">
    <label class="me-2">All new Epics created for this Form should be :</label>
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

    <div class="text-start mt-3">
      <button class="btn btn-outline-primary btn-sm ms-0 m-1">Reset</button>

      <button class="btn btn-outline-primary btn-sm m-1">Update</button>
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
