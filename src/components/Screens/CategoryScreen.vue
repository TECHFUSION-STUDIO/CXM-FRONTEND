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
          <button
            class="btn btn-primary mt-2"
            @click="this.$router.push('/createcategory')"
          >
            Create a Category
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
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "CategoryScreen",
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
        .get("/getallcategory?businessId=1&projectId=1")
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
