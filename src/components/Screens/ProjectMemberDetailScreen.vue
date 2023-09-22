<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">Project Members </a></li>

          <li class="breadcrumb-item active" aria-current="page">Member Detail</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row">
        <div class="col-md-12">
          <p class="text-muted">Member Id : {{ memberDetail.id }}</p>
          <h5>{{ memberDetail.teamMemberName }}</h5>

          <div class="row">
            <div class="col-auto">
              <p>Email : {{ memberDetail.teamMemberEmail }}</p>
            </div>
            <div class="col-auto">
              <p>Contact : {{ memberDetail.teamMemberContact }}</p>
            </div>
            <div class="col-auto">
              <p>Status : {{ memberDetail.teamMemberStatus }}</p>
            </div>
            <div class="col-auto">
              <p>Added on : {{ memberDetail.addedDateTime }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2"></div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
// import { ModelSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  name: "ProjectMemberDetailScreen",
  //   components: {
  //     ModelSelect,
  //   },
  data() {
    return {
      id: "",
      memberDetail: {},

      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.memberId;
    this.fetchMemberDetail();
  },
  methods: {
    fetchMemberDetail() {
      axiosConn
        .get("/getteammemberbyid?businessId=1&memberId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.memberDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
