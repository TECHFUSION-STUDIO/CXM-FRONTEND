<template>
  <div>
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

            <li class="breadcrumb-item active" aria-current="page">
              Showing Category Detail for <i>{{ categoryDetail.categoryName }}</i>
            </li>
          </ol>
        </nav>
      </div>

      <div class="bg-white shadow shadow-sm mt-3 p-2">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex mb-3">
              <div class="text-muted">Category Id : {{ categoryDetail.id }}</div>
              <div class="ms-auto">
                <button
                  class="btn btn-primary btn-sm"
                  @click="this.$router.push('/editcategory/' + id)"
                >
                  Edit
                </button>
              </div>
            </div>
            <h5>{{ categoryDetail.categoryName }}</h5>

            <div class="row">
              <div class="col-auto">
                <p>Status : {{ categoryDetail.categoryStatus }}</p>
              </div>

              <div class="col-auto"><p>Total Feedback : 6476589</p></div>
              <div class="col-auto"><p>Last used at : 6476589</p></div>
              <div class="col-auto">
                <p>Added on : {{ categoryDetail.addedDateTime }}</p>
              </div>
            </div>
            <p>
              {{ categoryDetail.categoryDesc }}
            </p>
          </div>
        </div>
      </div>

      <div class="text-end mt-3 mb-3">
        <button class="btn btn-outline-danger m-2 btn-sm">Delete Category</button>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
export default {
  name: "CategoryDetailScreen",

  data() {
    return {
      id: this.$route.params.categoryId,
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
        .get("/getCategory?businessId=1&projectId=1&categoryId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.categoryDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
