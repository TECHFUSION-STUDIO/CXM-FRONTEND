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
            @click.prevent="showCreateCategoryMenu = true"
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
        <table class="table table-hover table-bordered mt-4 w-100 shadow-sm">
          <thead>
            <tr class="bg-light">
              <th style="width: 40%">Category Name</th>
              <th class="text-center">Status</th>
              <th class="text-center">Added on</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categoryList" :key="item.id">
              <td style="width: 40%">
                <!-- <a
                  id="feedbackTitle"
                  @click="this.$router.push('/categorydetail/' + item.id)"
                  >{{ item.categoryName }}</a
                > -->

                <a
                  id="feedbackTitle"
                  @click.prevent="showCategoryDetail(item)"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#staticBackdropCategoryDetail"
                  aria-controls="staticBackdropCategoryDetail"
                  >{{ item.categoryName }}</a
                >
              </td>
              <td class="text-center">
                <span class="text-success fw-bold">{{ item.categoryStatus }}</span>
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
      :class="showCreateCategoryMenu ? 'show' : ''"
      tabindex="-1"
      :style="{ visibility: showCreateCategoryMenu ? 'visible' : 'hidden' }"
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
          @click.prevent="showCreateCategoryMenu = false"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div><CreateCategoryScreen type="offcanvas" /></div>
      </div>
    </div>

    <div
      class="offcanvas offcanvas-end"
      :class="showCategoryDetailMenu ? 'show' : ''"
      tabindex="-1"
      :style="{ visibility: showCategoryDetailMenu ? 'visible' : 'hidden' }"
      data-bs-backdrop="static"
      id="staticBackdropCategoryDetail"
      aria-labelledby="staticBackdropCategoryDetailLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="staticBackdropCategoryDetailLabel">
          Category Detail
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click.prevent="
            showCategoryDetailMenu = false;
            categoryDetail = {};
          "
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <p class="text-muted">
            <i>Category Id : {{ categoryDetail.id }}</i>
          </p>
          <h5>{{ categoryDetail.categoryName }}</h5>
          <p>{{ categoryDetail.categoryDesc }}</p>
          <div class="mt-3">
            <span class="fw-medium">Status : </span>
            <span class="text-success fw-bold">{{ categoryDetail.categoryStatus }}</span>
          </div>
          <div class="mt-2">
            <p>
              <span class="fw-medium">Added on : </span>{{ categoryDetail.addedDateTime }}
            </p>
          </div>

          <div class="text-end">
            <button
              class="btn btn-primary btn-sm m-1"
              @click="this.$router.push('/editcategory/' + categoryDetail.id)"
            >
              Edit Category
            </button>

            <button class="btn btn-outline-danger btn-sm m-1">Delete Category</button>
          </div>
        </div>
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
      categoryDetail: {},
      showCategoryDetailMenu: false,
      showCreateCategoryMenu: false,
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

    showCategoryDetail(item) {
      this.showCategoryDetailMenu = true;
      this.categoryDetail = item;
    },
  },
};
</script>

<style lang="scss" scoped></style>
