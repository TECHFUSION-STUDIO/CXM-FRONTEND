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

          <li class="breadcrumb-item active" aria-current="page">Showing Logger Detail for<i> Logger id {{ loggerDetail.id }}</i></li>
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
      <FeedbackTabular
        :criteria="{ key: 'loggerId', value: id, operation: 'EQUAL' }"
        feedbackType="ALL"
      />
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import FeedbackTabular from "./designlib/FeedbackTabular.vue";

export default {
  name: "LoggerDetailScreen",
  components: {
    FeedbackTabular,
  },
  data() {
    return {
      axiosConn,
      loggerDetail: {},
      id: this.$route.params.loggerId,
      rawFeedbackList: [],
    };
  },
  mounted() {
    this.id = this.$route.params.loggerId;
    this.fetchLoggerDetail();
    // this.fetchAllFeedback();
  },
  methods: {
    fetchAllFeedback() {
      axiosConn
        .post("/getAllFeedback", {
          businessId: 1,
          projectId: 1,
          orderBy: "addedDateTime",
          orderByAsc: true,
          criteria: [
            {
              key: "loggerId",
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
