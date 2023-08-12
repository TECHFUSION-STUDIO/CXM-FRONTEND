<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row w-100">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="input-group mt-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search Category"
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
        <table class="table table-hover table-bordered mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Logger Name</td>
              <td>Email</td>
              <td>Contact</td>
              <td>Logged at</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in loggerList" :key="item.id">
              <td
                id="feedbackTitle"
                @click="this.$router.push('/loggerdetail/' + item.id)"
                style="width: 40%"
              >
                {{ item.loggerName }}
              </td>
              <td>{{ item.loggerEmail }}</td>
              <td>{{ item.loggerContact }}</td>
              <td>{{ item.addedDateTime }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
export default {
  name: "LoggerScreen",
  data() {
    return {
      axiosConn,
      loggerList: [],
    };
  },
  mounted() {
    this.fetchAllLoggerList();
  },
  methods: {
    fetchAllLoggerList() {
      axiosConn
        .get("/getallloggers?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.loggerList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
