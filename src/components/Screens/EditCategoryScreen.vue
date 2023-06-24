<template>
  <div>
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
              v-model="categoryDetail.categoryName"
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
              v-model="categoryDetail.categoryDesc"
            ></textarea>
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Category Status</label>
            <select
              id="categoryStatus"
              class="form-select"
              v-model="categoryDetail.categoryStatus"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
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

export default {
  name: "EditCategoryScreen",

  data() {
    return {
      id: "",
      categoryDetail: {},
      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.categoryId;
    this.fetchCategoryDetail();
  },
  methods: {
    fetchCategoryDetail() {
      axiosConn
        .get("/getcategorybyid?businessId=1&projectId=1&categoryId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.categoryDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateCategoryDetail() {
      axiosConn
        .post("/updatecategory", this.categoryDetail)
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
