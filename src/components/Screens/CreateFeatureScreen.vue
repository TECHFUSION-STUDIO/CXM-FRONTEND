<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2" v-if="type != 'offcanvas'">
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

    <div :class="type != 'offcanvas' ? 'bg-white shadow shadow-sm mt-3 p-3' : ''">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Feature Name</label>
            <input
              type="test"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="name"
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
              v-model="description"
            ></textarea>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Status</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="status"
            >
              <option v-for="item in constants.FEATURE_STATUS" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Category</label>
            <!-- <select
              class="form-select"
              aria-label="Default select example"
              v-model="category"
            >
              <option selected></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select> -->

            <multiselect
              class="form-control p-0 border border-0"
              v-model="categoryList.value"
              :options="categoryList.options"
              placeholder=""
              label="name"
              track-by="id"
              @select="updateCategory('add')"
              @remove="updateCategory('remove')"
            ></multiselect>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Impact</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="impact"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>

        <div class="col-md-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Effort</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="effort"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Priority</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="priority"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <div class="text-end mt-3 mb-3">
            <button
              class="btn btn-sm btn-primary m-2 w-25"
              @click="createFeature()"
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
import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";
import axiosConn from "@/axioscon";
import { constants } from "./constants";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";
import Multiselect from "vue-multiselect";
export default {
  name: "CreateFeatureScreen",
  props: ["type"],
  components: {
    Multiselect,
  },
  data() {
    return {
      name: "",
      description: "",
      status: "",
      category: "",
      impact: "",
      effort: "",
      priority: "",
      categoryList: {
        options: [],
        value: {},
      },
      constants,
    };
  },
  mounted() {
    this.fetchCategory();
  },
  methods: {
    fetchCategory() {
      axiosConn
        .get("/findCategory?businessId=1&workspaceId=1")
        .then((res) => {
          console.log(res.data);
          this.categoryList.options = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createFeature() {
      axiosConn
        .post("/createFeature", {
          businessId: 1,
          workspaceId: 1,
          name: this.name,
          description: this.description,
          status: this.status,
          category: this.category,
          priority: this.priority,
          impact: this.impact,
          effort: this.effort,
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
