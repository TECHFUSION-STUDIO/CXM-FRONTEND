<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
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
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <div class="text-center mt-3 mb-3">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <button class="btn btn-outline-success m-2 w-25" @click="createCategory()">
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
  name: "CreateCategoryScreen",
  data() {
    return {
      inpCategoryName: "",
      inpCategoryDesc: "",
      inpCategoryStatus: "",
      axiosConn,
    };
  },
  methods: {
    createCategory() {
      axiosConn
        .post("/createcategory", {
          businessId: 1,
          projectId: 1,
          categoryName: this.inpCategoryName,
          categoryDesc: this.inpCategoryDesc,
          categoryStatus: this.inpCategoryStatus,
          addedDateTime: "2023-06-24T09:08:57.763Z",
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
