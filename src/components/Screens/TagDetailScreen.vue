<template>
  <div>
    <div>
      <div class="bg-white shadow shadow-sm mt-1 p-2">
        <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
          <ol class="breadcrumb p-0 m-0">
            <li class="breadcrumb-item"><a href="#">Tags </a></li>

            <li class="breadcrumb-item active" aria-current="page">Tag Detail</li>
          </ol>
        </nav>
      </div>

      <div class="bg-white shadow shadow-sm mt-3 p-2">
        <div class="row">
          <div class="col-md-12">
            <p class="text-muted">Tag Id : {{ tagDetail.id }}</p>
            <h5>{{ tagDetail.tagName }}</h5>
            <div class="row">
              <div class="col-auto">
                <p>Status : {{ tagDetail.tagStatus }}</p>
              </div>

              <div class="col-auto"><p>Total Feedback : 6476589</p></div>
              <div class="col-auto"><p>Last used at : 6476589</p></div>
              <div class="col-auto">
                <p>Added on : {{ tagDetail.addedDateTime }}</p>
              </div>
              <div class="col-auto"></div>
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>

      <div class="bg-white shadow shadow-sm mt-3 p-3">
        <h6>Tags Usage</h6>
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
          <table class="table table-hover table-bordered mt-4 w-100">
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

      <div class="text-center mt-3 mb-3">
        <button class="btn btn-danger m-2 w-25">Delete</button>
        <button
          class="btn btn-primary m-2 w-25"
          @click="this.$router.push('/edittags/' + tagDetail.id)"
        >
          Edit Tag
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "TagDetailScreen",
  data() {
    return {
      id: "",
      tagDetail: {},
      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.tagId;
    this.fetchTagDetail();
  },
  methods: {
    fetchTagDetail() {
      axiosConn
        .get("/gettagsbyid?businessId=1&projectId=1&tagId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.tagDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
