<template>
  <div class="bg-white shadow shadow-sm mt-3 p-3">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Enter Project Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        v-model="projectName"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Project Description</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="projectDescription"
      ></textarea>
    </div>

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Project Visibility</label
      >
      <br />
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="projectVisibility"
      >
        <option value="Public">Public</option>
        <option value="Private">Private</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Project Status</label>
      <br />
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="projectStatus"
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
    </div>

    <div class="text-center">
      <button class="btn btn-outline-danger m-2 w-25">Reset</button>
      <button class="btn btn-outline-success m-2 w-25" @click="createProject()">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import axioscon from "../../axioscon.js";
export default {
  name: "CreateProjectScreen",
  data() {
    return {
      axioscon,
      projectName: "",
      projectDescription: "",
      projectVisibility: "",
      projectStatus: "",
    };
  },
  methods: {
    createProject() {
      axioscon
        .post("/createprojects", {
          addedDateTime: "",
          lastModifiedDatetime: "2023-06-26T17:03:10.147Z",
          businessId: 1,
          projectDescription: this.projectDescription,
          projectName: this.projectName,
          visibility: this.projectVisibility,
          status: this.projectStatus,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
