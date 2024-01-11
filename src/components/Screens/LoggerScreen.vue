<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        Showing Loggers <i>for project id BMRC-9877</i>
      </nav>
    </div>

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
            <button class="btn btn-primary">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="table-responsive-md mt-3">
        <table class="table table-hover table-bordered mt-4 w-100 shadow-sm">
          <thead>
            <tr class="bg-light">
              <th style="width: 40%">Reporter Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Logged at</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in loggerList" :key="item.id">
              <td style="width: 40%">
                <!--                   @click="this.$router.push('/loggerdetail/' + item.id)"
                                  @click.prevent="showLoggerDetail(item)"

 -->
                <a
                  id="feedbackTitle"
                  @click="this.$router.push('/loggerdetail/' + item.id)"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#staticBackdropCategoryDetail"
                  aria-controls="staticBackdropCategoryDetail"
                >
                  {{ item.loggerName }}</a
                >
              </td>
              <td>{{ item.loggerEmail }}</td>
              <td>{{ item.loggerContact }}</td>
              <td>{{ item.addedDateTime }}</td>
            </tr>
            <tr v-if="loggerList.length == 0">
              <td class="text-center" colspan="4"><i>No Data Found</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      class="offcanvas offcanvas-end"
      :class="showLoggerDetailMenu ? 'show' : ''"
      tabindex="-1"
      :style="{ visibility: showLoggerDetailMenu ? 'visible' : 'hidden' }"
      data-bs-backdrop="static"
      id="staticBackdropCategoryDetail"
      aria-labelledby="staticBackdropCategoryDetailLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="staticBackdropCategoryDetailLabel">
          Logger Detail
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click.prevent="
            showLoggerDetailMenu = false;
            loggerDetail = {};
          "
        ></button>
      </div>
      <div class="offcanvas-body"></div>
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
      showLoggerDetailMenu: false,
      loggerDetail: {},
    };
  },
  mounted() {
    this.fetchAllLoggerList();
  },
  methods: {
    fetchAllLoggerList() {
      axiosConn
        .get("/getLoggers?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.loggerList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showLoggerDetail(item) {
      this.showLoggerDetailMenu = true;
      this.loggerDetail = item;
    },
  },
};
</script>

<style lang="scss" scoped></style>
