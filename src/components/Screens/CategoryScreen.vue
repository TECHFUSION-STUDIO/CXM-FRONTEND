<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        Showing Category <i>for project id BMRC-9877</i>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row w-100">
        <div class="col-md-3">
          <!-- <button
            class="btn btn-primary mt-2"
            @click="this.$router.push('/createcategory')"
          >
            Create Category
          </button> -->
          <button
            class="btn btn-primary mt-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            Create Category
          </button>
        </div>
        <div class="col-md-6">
          <div class="input-group mt-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search Category"
              aria-label="Search"
            />
            <button class="btn btn-primary">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>

      <div class="table-responsive-md mt-3">
        <table class="table table-hover table-bordered mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Category Name</td>
              <td class="text-center">Status</td>
              <!-- <td class="text-center">Tot usage</td> -->
              <td class="text-center">Added on</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categoryList" :key="item.id">
              <td style="width: 40%">
                <a
                  id="feedbackTitle"
                  @click="this.$router.push('/categorydetail/' + item.id)"
                  >{{ item.categoryName }}</a
                >
              </td>
              <td class="text-center">
                <span class="badge text-bg-success">{{ item.categoryStatus }}</span>
              </td>

              <!-- <td class="text-center">123</td> -->
              <td class="text-center">{{ item.addedDateTime }}</td>
            </tr>

            <tr v-if="categoryList.length == 0">
              <td class="text-center" colspan="3"><i>No Data Found</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      class="offcanvas offcanvas-end"
      data-bs-backdrop="static"
      tabindex="-1"
      id="staticBackdrop"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="staticBackdropLabel">Create Category</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div><CreateCategoryScreen type="offcanvas" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

import CreateCategoryScreen from "./CreateCategoryScreen.vue";

export default {
  name: "CategoryScreen",
  components: { CreateCategoryScreen },
  data() {
    return {
      categoryList: [],
      axiosConn,
    };
  },
  mounted() {
    this.fetchAllCategory();
  },
  methods: {
    fetchAllCategory() {
      axiosConn
        .get("/getCategory?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.categoryList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
