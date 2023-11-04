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
          <li class="breadcrumb-item active" aria-current="page">Edit Board</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <p class="text-muted">Board Id : {{ boardDetail.id }}</p>
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="boardName" class="form-label">Board Name</label>
            <input
              type="text"
              class="form-control"
              id="boardName"
              v-model="boardDetail.boardName"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="boardDesc" class="form-label">Board Description</label>
            <textarea
              class="form-control"
              id="boardDesc"
              rows="3"
              v-model="boardDetail.boardDescription"
            ></textarea>
          </div>
        </div>
        <!-- <div class="col-md-12">
          <div class="mb-3">
            <label for="boardCapacity" class="form-label">Board Capacity</label>
            <input type="number" class="form-control" id="boardCapacity" />
          </div>
        </div> -->
        <div class="col-md-12">
          <div class="mb-3">
            <label for="boardStatus" class="form-label">Board Status</label>
            <select
              id="boardStatus"
              class="form-select"
              v-model="boardDetail.boardStatus"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <!-- <div class="col-md-12">
          <div class="mb-3">
            <label for="boardStatus" class="form-label">Board Visibility</label>
            <select id="boardStatus" class="form-select" v-model="boardDetail.visibility">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div> -->

        <div class="col-md-12">
          <div class="text-center">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <button class="btn btn-outline-success m-2 w-25" @click="updateBoardDetail()">
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
  name: "EditBoardScreen",
  data() {
    return {
      id: "",
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
        .get("/getBoard?businessId=1&projectId=1&boardId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.boardDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateBoardDetail() {
      axiosConn
        .post("/updateboard", this.boardDetail)
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
