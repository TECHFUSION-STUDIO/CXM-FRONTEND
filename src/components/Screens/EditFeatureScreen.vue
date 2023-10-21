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

          <li class="breadcrumb-item">
            <a @click="this.$router.push('/feature/' + id)">Feature Detail</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Create New Feature</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-12">
          <p class="text-muted">Feature Id : {{ featureDetail.id }}</p>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Feature Name</label>
            <input
              type="test"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="featureDetail.featureName"
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
              v-model="featureDetail.featureDescription"
            ></textarea>
          </div>
        </div>

        <div class="col-md-12">
          <div class="text-center mt-3 mb-3">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <button class="btn btn-outline-success m-2 w-25" @click="updateFeature()">
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
  name: "EditFeatureScreen",
  data() {
    return {
      featureDetail: {},
      id: this.$route.params.featureId,
    };
  },
  mounted() {
    this.fetchFeatureDetail();
  },
  methods: {
    fetchFeatureDetail() {
      axiosConn
        .get("/getFeatureDetail?featureId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.featureDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    updateFeature() {
      axiosConn
        .post("/updatefeature", this.featureDetail)
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            toast: true,
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
