<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">Boards </a></li>
          <li class="breadcrumb-item active" aria-current="page">Board Name</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row">
        <div class="col-md-12">
          <p class="text-muted">Board Id : {{ boardDetail.id }}</p>
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

    <div class="bg-white shadow shadow-sm mt-3 p-3">


       <div class="ms-0 me-0 d-flex justify-content-center">
          <div class="input-group mt-2 w-50">
            <input
              class="form-control"
              type="search"
              placeholder="Search Feedbacks"
              aria-label="Search"
            />
            <button class="btn btn-success">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>

      <div class="table-responsive-md mt-2">
        <table class="table table-hover table-bordered mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Feedback</td>
              <td>Impact</td>
              <td>Effort</td>
              <td>Priority</td>
              <td>Status</td>
              <td>Created Time</td>
              <td>Last Updated Time</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in rawFeedbackList" :key="item.id">
              <td
                id="feedbackTitle"
                style="width: 40%"
                @click="this.$router.push('/feedbackdetail/raw/' + item.id)"
              >
                {{ item.feedbackDescription }}
              </td>
              <td>{{ item.feedbackImpact }}</td>
              <td>{{ item.feedbackEffort }}</td>
              <td>{{ item.feedbackPriority }}</td>
              <td>{{ item.feedbackStatus }}</td>
              <td>{{ item.addedDateTime }}</td>
              <td>{{ item.lastModified }}</td>
            </tr>
          </tbody>
        </table>
        <div class="text-center">
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
        </div>
      </div>
    </div>

    <div class="text-center mt-3 mb-3">
      <button class="btn btn-danger m-2 w-25">Delete</button>
      <button
        class="btn btn-primary m-2 w-25"
        @click="this.$router.push('/editboard/' + id)"
      >
        Edit Board
      </button>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
export default {
  name: "BoardDetailScreen",

  data() {
    return {
      id: "",
      boardDetail: {},
      axiosConn,
      rawFeedbackList: [],
    };
  },
  mounted() {
    this.id = this.$route.params.boardId;
    this.fetchBoardDetail();
    this.fetchAllFeedback();
  },
  methods: {
    fetchAllFeedback() {
      axiosConn
        .post("/getAllFilteredFeedback", {
          businessId: 1,
          projectId: 1,
          orderBy: "addedDateTime",
          orderByAsc: true,
          criteria: [
            {
              key: "boardId",
              value: this.id,
              operation: "EQUAL",
            },
          ],
        })
        .then((res) => {
          console.log(res.data);
          this.rawFeedbackList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
