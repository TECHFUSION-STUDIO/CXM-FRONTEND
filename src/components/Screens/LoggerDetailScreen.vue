<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">Loggers </a></li>

          <li class="breadcrumb-item active" aria-current="page">Logger Detail</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row">
        <div class="col-md-12">
          <p class="text-muted">Logger Id : {{ loggerDetail.id }}</p>
          <h5>{{ loggerDetail.loggerName }}</h5>

          <div class="row">
            <div class="col-auto">
              <p>Email : {{ loggerDetail.loggerEmail }}</p>
            </div>
            <div class="col-auto">
              <p>Contact : {{ loggerDetail.loggerContact }}</p>
            </div>
            <div class="col-auto">
              <p>Logger Type : {{ loggerDetail.loggerType }}</p>
            </div>
            <div class="col-auto"><p>Total Response : 6476589</p></div>
            <div class="col-auto"><p>Last Response Recorded : 6476589</p></div>
            <div class="col-auto">
              <p>Added on : {{ loggerDetail.addedDateTime }}</p>
            </div>
          </div>

          <p>
            {{ loggerDetail.loggerAdditionalDetail }}
          </p>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <h6>Logged Feedback</h6>
      <div class="mt-3 d-flex flex-row-reverse">
        <div class="input-group mt-1">
          <input
            class="form-control"
            type="search"
            placeholder="Search Services"
            aria-label="Search"
          />
          <button class="btn btn-success">
            <i class="fa-brands fa-searchengin"></i>
          </button>
        </div>
      </div>

      <div class="table-responsive-md mt-2">
        <table class="table table-hover mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Feedback</td>
              <td>Impact</td>
              <td>Effort</td>
              <td>Priority</td>
              <td>Status</td>
              <td>Submission Id</td>
              <td>Created Time</td>
              <td>Last Updated Time</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                id="feedbackTitle"
                style="width: 40%"
                @click="this.$router.push('/feedbackdetail/raw/1')"
              >
                vsxvb x v
              </td>
              <td>vs</td>
              <td>vs</td>
              <td>vds</td>
              <td>vds</td>
              <td id="feedbackTitle">vds</td>
              <td>vds</td>
              <td>vds</td>
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
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "LoggerDetailScreen",
  data() {
    return {
      axiosConn,
      loggerDetail: {},
      id: "",
    };
  },
  mounted() {
    this.id = this.$route.params.loggerId;
    this.fetchLoggerDetail();
  },
  methods: {
    fetchLoggerDetail() {
      axiosConn
        .get("/getloggersbyid?businessId=1&projectId=1&loggerId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.loggerDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
