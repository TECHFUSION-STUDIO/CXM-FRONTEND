<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2" v-if="type != 'offcanvas'">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/category')">Category </a>
          </li>

          <li class="breadcrumb-item active" aria-current="page">Create New Category</li>
        </ol>
      </nav>
    </div>

    <div :class="type != 'offcanvas' ? 'bg-white shadow shadow-sm mt-3 p-3' : ''">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Category Name</label>
            <input
              type="text"
              class="form-control"
              id="categoryName"
              v-model="inpCategoryName"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryDesc" class="form-label">Category Description</label>
            <textarea
              class="form-control"
              id="categoryDesc"
              rows="3"
              v-model="inpCategoryDesc"
            ></textarea>
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Category Status</label>
            <select id="categoryStatus" class="form-select" v-model="inpCategoryStatus">
              <option v-for="item in constants.GENERIC_STATUS" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <div class="text-center mt-3 mb-3">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <button
              class="btn btn-outline-success m-2 w-25"
              @click="createCategory()"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";
import { constants } from "./constants";

export default {
  name: "CreateCategoryScreen",
  props: ["type"],

  data() {
    return {
      inpCategoryName: "",
      inpCategoryDesc: "",
      inpCategoryStatus: "",
      axiosConn,
      constants,
    };
  },
  methods: {
    createCategory() {
      axiosConn
        .post("/createCategory", {
          businessId: 1,
          projectId: 1,
          categoryName: this.inpCategoryName,
          categoryDesc: this.inpCategoryDesc,
          categoryStatus: this.inpCategoryStatus,
          addedDateTime: "2023-06-24T09:08:57.763Z",
        })
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            toast: true,
            animation: false,
            text: "Category saved successfully!",
            icon: "success",
            position: "top",
            width: 300,
            padding: "1em",
            showConfirmButton: false,
            timer: 3000,
            background: "white",
          });

          this.$emit("success", true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
