<template>
  <div class="mt-5">
    <h5>Workspace Setup</h5>
    <p class="text-muted"><i>Please create a workspace to proceed</i></p>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Workspace Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="memberName"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Workspace Category</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="workspaceCategory"
          >
            <option value="1">Sports</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="col-md-12">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Workspace Description</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="workspaceDescription"
          ></textarea>
        </div>
      </div>
      <div class="col-md-12">
        <div class="text-center mt-4">
          <button class="btn btn-primary m-1 w-25" @click="backToProfileSetup()">
            Back
          </button>
          <button class="btn btn-primary m-1 w-25" @click="completeWorkspaceSetup()">
            Proceed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceSetup",
  data() {
    return {
      workspaceName: "",
      workspaceCategory: "",
      workspaceDescription: "",
    };
  },
  methods: {
    backToProfileSetup() {
      this.$emit("target", "profile");
    },
    completeWorkspaceSetup() {
      this.$emit("target", "plan");
    },
  },
};
</script>

<style lang="scss" scoped></style>
