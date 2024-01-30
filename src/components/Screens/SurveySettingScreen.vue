<template>
  <div class="my-4">
    <div class="ms-2 me-2 mb-3 row">
      <div class="col-md-6">
        <label class="me-2">All new Epics created for this Form should be :</label>
      </div>
      <div class="col-md-6">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="Public"
            v-model="featureAccessModifier"
          />
          <label class="form-check-label" for="inlineRadio1">Public</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="Private"
            v-model="featureAccessModifier"
          />
          <label class="form-check-label" for="inlineRadio2">Private</label>
        </div>
      </div>
    </div>
    <div class="ms-2 me-2 mb-3 row">
      <div class="col-md-6">
        <label class="me-2"
          >Sentiment Analysis Engine
          <span class="text-muted fst-italic">(Only on Single/Multi Line Text)</span>
          :</label
        >
      </div>
      <div class="col-md-6">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="Public"
            v-model="featureAccessModifier"
          />
          <label class="form-check-label" for="inlineRadio1">On</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="Private"
            v-model="featureAccessModifier"
          />
          <label class="form-check-label" for="inlineRadio2">Off</label>
        </div>
      </div>
    </div>

    <div class="ms-2 me-2 mb-3 row">
      <div class="col-md-6">
        <label class="me-2"
          >Feature Analysis Engine
          <span class="text-muted fst-italic">(Only on Single/Multi Line Text)</span>
          :</label
        >
      </div>
      <div class="col-md-6">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="Public"
            v-model="featureAccessModifier"
          />
          <label class="form-check-label" for="inlineRadio1">On</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="Private"
            v-model="featureAccessModifier"
          />
          <label class="form-check-label" for="inlineRadio2">Off</label>
        </div>
      </div>
    </div>
    <div class="ms-2 me-2 mb-3 row">
      <div class="col-md-6"><label class="me-2">Survey Status :</label></div>
      <div class="col-md-6">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="surveyStatus"
            id="surveyStatusActive"
            value="Active"
          />
          <label class="form-check-label" for="surveyStatusActive">Active</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="surveyStatus"
            id="surveyStatusInactive"
            value="Inactive"
          />
          <label class="form-check-label" for="surveyStatusInactive">Inactive</label>
        </div>
      </div>
    </div>
    <div class="ms-2 me-2 mb-3 row">
      <div class="col-md-6">
        <label class="me-2">Survey Start Date :</label>
      </div>
      <div class="col-md-6">
        <input
          type="datetime-local"
          class="form-control form-control-sm"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
    </div>
    <div class="ms-2 me-2 mb-3 row">
      <div class="col-md-6">
        <label class="me-2">Survey End Date :</label>
      </div>
      <div class="col-md-6">
        <input
          type="datetime-local"
          class="form-control form-control-sm"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
    </div>

    <div class="ms-2 me-2 mb-3">
      <button class="btn btn-primary btn-sm ms-0 m-1">Reset</button>

      <button class="btn btn-primary btn-sm m-1">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SurveySettingScreen",
  data() {
    return {
      id: "",
      featureAccessModifier: "Public",
    };
  },
  mounted() {
    this.id = this.$route.params.surveyId;
  },
};
</script>

<style lang="scss" scoped></style>
