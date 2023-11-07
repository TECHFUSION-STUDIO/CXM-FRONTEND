<template>
  <div class="mt-5">
    <h5>Plan Setup</h5>

    <div class="mt-4">
      We have enrolled you to a 15 days <b>free</b> trial on our Basic Plan.
    </div>

    <div class="row mt-4 mb-3">
      <div class="col-md-12">
        <p class="text-muted fs-5"><i>Basic Plan</i></p>
      </div>
      <div class="col-md-3 text-center">
        <p class="p-3 border">2 Surveys</p>
      </div>
      <div class="col-md-3 text-center">
        <p class="p-3 border">5 Questions/Surveys</p>
      </div>
      <div class="col-md-3 text-center">
        <p class="p-3 border">500 Responses/Month</p>
      </div>
      <div class="col-md-3 text-center">
        <p class="p-3 border">1 Member/Month</p>
      </div>
      <div class="col-md-3 text-center">
        <p class="p-3 border">10 Boards</p>
      </div>
      <div class="col-md-3 text-center">
        <p class="p-3 border">100 Feature</p>
      </div>
      <div class="col-md-3 text-center">
        <p class="p-3 border">20 Vendors</p>
      </div>

      <div class="col-md-3 text-center">
        <p class="p-3 border">500 Feedback/Month</p>
      </div>
      <div class="col-md-3 text-center">
        <p class="p-3 border">500 Feedback/Month</p>
      </div>
    </div>

    <div>
      Check details of all our plans ( Basic , Business , Enterprise ).
      <a href="#">View all Plans</a>
    </div>
    <div>
      <div class="text-center mt-4">
        <button class="btn btn-primary m-1 w-25" @click="backToWorkspaceSetup()">
          Back
        </button>
        <button class="btn btn-primary m-1 w-25" @click="completePlanSetup()">
          Finish
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanSetup",
  data() {
    return {};
  },
  methods: {
    backToWorkspaceSetup() {
      this.$emit("target", "workspace");
    },
    completePlanSetup() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
