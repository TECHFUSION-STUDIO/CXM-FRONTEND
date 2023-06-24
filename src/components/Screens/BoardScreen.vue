<template>
  <div>
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
            <button class="btn btn-success">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="table-responsive-md mt-3">
        <table class="table table-hover mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Board Name</td>
              <td>Description</td>
              <td>Status</td>
              <td>Visibility</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in boardList" :key="item.id">
              <td style="width: 40%">
                <span id="feedbackTitle" @click="this.$router.push('/boarddetail/1')">{{
                  item.boardName
                }}</span>
              </td>
              <td>{{ item.boardDescription }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.visibility }}</td>
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
        .get("/getallboard?businessId=1&projectId=1")
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
