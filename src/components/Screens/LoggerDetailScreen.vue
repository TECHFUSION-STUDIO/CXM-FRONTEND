<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>

          <li class="breadcrumb-item">
            <a @click="this.$router.push('/logger')">Loggers </a>
          </li>

          <li class="breadcrumb-item active" aria-current="page">
            Showing Logger Detail for<i> Logger id {{ loggerDetail.id }}</i>
          </li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <p class="text-muted">Reporter Id : {{ loggerDetail.id }}</p>
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1"
              >Logger Name</span
            >
            <input type="text" class="form-control" disabled :value="loggerDetail.name" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1"
              >Logger Email</span
            >
            <input
              type="text"
              class="form-control"
              disabled
              :value="loggerDetail.email"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1"
              >Logger Contact</span
            >
            <input
              type="text"
              class="form-control"
              disabled
              :value="loggerDetail.contact"
            />
          </div>
        </div>

        <div class="col-md-5">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text fw-semibold" id="basic-addon1">Created on</span>
            <input
              type="text"
              class="form-control"
              disabled
              :value="loggerDetail.createdAt"
            />
          </div>
        </div>
      </div>
      <p>
        {{ loggerDetail.additionalDetail }}
      </p>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div>
        <h6 class="text-muted">Submission Details</h6>
        <div class="table-responsive-md mt-3">
          <table class="table table-bordered table-hover w-100 shadow-sm">
            <thead>
              <tr class="bg-light">
                <th>Submission Id</th>
                <th>Logger Id</th>
                <th>Time Spent</th>
                <th>Form Open Time</th>
                <th>Submission Time</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in submissionList" :key="item.id">
                <td>
                  <a
                    @click="
                      this.$router.push('/surveys/' + id + '/submission/' + item.id)
                    "
                    >{{ item.id }}</a
                  >
                </td>
                <td>{{ item.id }}</td>
                <td>2 min</td>
                <td>{{ item.createdAt }}</td>
                <td>{{ item.createdAt }}</td>
              </tr>
              <tr v-if="submissionList.length == 0">
                <td class="text-center" colspan="5"><i>No Data Found</i></td>
              </tr>
            </tbody>
          </table>
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
      submissionList: [],
      id: this.$route.params.loggerId,
    };
  },
  mounted() {
    this.id = this.$route.params.loggerId;
    this.fetchLoggerDetail();
    this.fetchAllSubmission();
  },
  methods: {
    fetchLoggerDetail() {
      axiosConn
        .get("/findReporter?businessId=1&workspaceId=1&id=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.loggerDetail = res.data.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchAllSubmission() {
      axiosConn
        .get("/findFormSubmission?businessId=1&workspaceId=1&reporterId=" + this.id)
        .then((res) => {
          console.log(res);
          this.submissionList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
