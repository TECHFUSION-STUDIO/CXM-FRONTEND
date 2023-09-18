<template>
  <div>
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
            <button class="btn btn-success">
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
              <td class="text-center">Tot Usage</td>
              <td class="text-end">Added on</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categoryList" :key="item.id">
              <td style="width: 40%">
                <span
                  id="feedbackTitle"
                  @click="this.$router.push('/categorydetail/' + item.id)"
                  >{{ item.categoryName }}</span
                >
              </td>
              <td class="text-center">
                <!-- {{ item.categoryStatus }} -->

                <span class="badge text-bg-success">{{ item.categoryStatus }}</span>
              </td>

              <td class="text-center">vds</td>
              <td class="text-end">{{ item.addedDateTime }}</td>
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
