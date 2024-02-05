<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/category')">Category </a>
          </li>

          <li class="breadcrumb-item active" aria-current="page">Edit Category</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-12">
          <p class="text-muted">Category Id : {{ categoryDetail.id }}</p>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Category Name</label>
            <input
              type="text"
              class="form-control"
              id="categoryName"
              disabled
              v-model="categoryDetail.name"
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
              v-model="categoryDetail.description"
            ></textarea>
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Category Status</label>
            <select
              id="categoryStatus"
              class="form-select"
              v-model="categoryDetail.status"
            >
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
              @click="updateCategoryDetail()"
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
import { constants } from "./constants";

export default {
  name: "EditCategoryScreen",

  data() {
    return {
      id: "",
      categoryDetail: {},
      axiosConn,
      constants,
    };
  },
  mounted() {
    this.id = this.$route.params.categoryId;
    this.fetchCategoryDetail();
  },
  methods: {
    fetchCategoryDetail() {
      axiosConn
        .get("/findCategory?businessId=1&workspaceId=1&id=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.categoryDetail = res.data.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateCategoryDetail() {
      axiosConn
        .post("/createCategory", this.categoryDetail)
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
