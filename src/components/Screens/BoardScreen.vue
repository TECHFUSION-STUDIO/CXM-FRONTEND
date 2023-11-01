<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        Showing Boards <i>for project id BMRC-9877</i>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row w-100">
        <div class="col-md-3">
          <button class="btn btn-primary mt-2" @click="this.$router.push('/createboard')">
            Create a Board
          </button>
        </div>
        <div class="col-md-6">
          <div class="input-group mt-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search Board"
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
              <td>Board Id</td>
              <td style="width: 40%">Board Name</td>
              <!-- <td>Description</td> -->
              <td class="text-center">Status</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in boardList" :key="item.id">
              <td>
                <a
                  id="feedbackTitle"
                  @click="this.$router.push('/boarddetail/' + item.id)"
                  >{{ item.id }}</a
                >
              </td>
              <td style="width: 40%">
                <a
                  id="feedbackTitle"
                  @click="this.$router.push('/boarddetail/' + item.id)"
                  >{{ item.boardName }}</a
                >
              </td>
              <!-- <td>{{ item.boardDescription }}</td> -->
              <td class="text-center">
                <span class="badge text-bg-success">{{ item.status }}</span>
              </td>
            </tr>
            <tr v-if="boardList.length == 0">
              <td class="text-center" colspan="3"><i>No Data Found</i></td>
            </tr>
          </tbody>
        </table>

        <!-- <div class="text-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link">Prev</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>

              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "BoardScreen",
  data() {
    return {
      boardList: [],
      axiosConn,
    };
  },
  mounted() {
    this.fetchAllBoard();
  },
  methods: {
    fetchAllBoard() {
      axiosConn
        .get("/getBoard?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.boardList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
