<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/board')">Boards </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Showing Board Detail for <i>{{ boardDetail.boardName }}</i>
          </li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex mb-3">
            <div class="text-muted">Board Id : {{ boardDetail.id }}</div>
            <div class="ms-auto">
              <button
                class="btn btn-primary btn-sm"
                @click="this.$router.push('/editboard/' + id)"
              >
                Edit
              </button>
            </div>
          </div>
          <h5>{{ boardDetail.boardName }}</h5>

          <div class="row">
            <div class="col-auto">
              <p>Status : {{ boardDetail.status }}</p>
            </div>

            <div class="col-auto"><p>Total Feedbacks : 6476589</p></div>
            <div class="col-auto"><p>Last feedback added at : 6476589</p></div>
            <div class="col-auto">
              <p>Board Created on : {{ boardDetail.addedDateTime }}</p>
            </div>
          </div>
          <p>
            {{ boardDetail.boardDescription }}
          </p>
        </div>
      </div>
    </div>
    <div class="text-end mt-3 mb-3">
      <button class="btn btn-outline-danger m-2 btn-sm">Delete Survey</button>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
export default {
  name: "BoardDetailScreen",

  data() {
    return {
      id: this.$route.params.boardId,
      boardDetail: {},
      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.boardId;
    this.fetchBoardDetail();
  },
  methods: {
    fetchBoardDetail() {
      axiosConn
        .get("/getboardbyid?businessId=1&projectId=1&boardId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.boardDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
