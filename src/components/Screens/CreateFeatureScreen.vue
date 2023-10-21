<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/feature')">Feature </a>
          </li>

          <li class="breadcrumb-item active" aria-current="page">Create New Feature</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Feature Name</label>
            <input
              type="test"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="featureName"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Feature Description</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="featureDescription"
            ></textarea>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Status</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="featureStatus"
            >
              <option selected></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Category</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="featureCategory"
            >
              <option selected></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Impact</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="featureImpact"
            >
              <option selected></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <div class="col-md-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Effort</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="featureEffort"
            >
              <option selected></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Priority</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="featurePriority"
            >
              <option selected></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <div class="text-center mt-3 mb-3">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <button class="btn btn-outline-success m-2 w-25" @click="createFeature()">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";
import axiosConn from "@/axioscon";
export default {
  name: "CreateFeatureScreen",
  data() {
    return {
      featureName: "",
      featureDescription: "",
      featureStatus: "",
      featureCategory: "",
      featureTags: "",
      featureImpact: "",
      featureEffort: "",
      featurePriority: "",
    };
  },
  methods: {
    createFeature() {
      axiosConn
        .post("/createfeature", {
          businessId: 1,
          projectId: 1,

          featureName: this.featureName,
          featureDescription: this.featureDescription,
          featureStatus: this.featureCategory,
          featureCategory: this.featureCategory,
          featurePriority: this.featurePriority,
          featureImpact: this.featureImpact,
          featureEffort: this.featureEffort,
        })
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            toast: true,
            animation: false,
            text: "Feature added successfully",
            icon: "success",
            position: "top",
            width: 300,
            showConfirmButton: false,
            timer: 3000,
            background: "white",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
