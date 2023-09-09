<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">Survey </a></li>
          <li class="breadcrumb-item"><a href="#">Survey Name</a></li>

          <li class="breadcrumb-item"><a href="#">Raw Feedback</a></li>
          <li class="breadcrumb-item active" aria-current="page">Feedback Detail</li>
        </ol>
      </nav>
    </div>
    <div class="mt-3">
      <div class="row w-100">
        <div class="col-md-8">
          <FeedbackDetail />
          <FeedbackDetailTag />

          <FeedbackMigrate :feedbackDetails="feedbackDetails" />

          <FeedbackDetailCollab />
          <FeedbackComments />
        </div>

        <div class="col-md-4">
          <FeedbackDetailAssignmentVue />
          <div class="bg-white shadow shadow-sm p-3 mt-2 row m-auto text-center">
            <div class="col-md-12">
              <button class="btn btn-outline-danger m-2 w-100">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeedbackDetail from "./FeedbackDetails/FeedbackDetail.vue";
import FeedbackMigrate from "./FeedbackDetails/FeedbackMigrate.vue";
import FeedbackComments from "./FeedbackDetails/FeedbackComments.vue";
import FeedbackDetailCollab from "./FeedbackDetails/FeedbackDetailCollab.vue";
import FeedbackDetailTag from "./FeedbackDetails/FeedbackDetailTag.vue";
import FeedbackDetailAssignmentVue from "./FeedbackDetails/FeedbackDetailAssignment.vue";
import axiosConn from "@/axioscon";

export default {
  name: "RawFeedbackDetailScreen",
  components: {
    FeedbackDetailCollab,
    FeedbackDetailTag,
    FeedbackComments,
    FeedbackDetailAssignmentVue,
    FeedbackDetail,
    FeedbackMigrate,
  },
  data() {
    return {
      id: this.$route.params.fid,
      feedbackDetails: {},
    };
  },
  mounted() {
    this.id = this.$route.params.fid;
    console.log(this.id);
    this.fetchFeedbackDetail();
  },

  methods: {
    fetchFeedbackDetail() {
      axiosConn
        .get(
          "/getfeedbackdetailsbyid?businessId=1&feedbackType=FILTERED&projectId=" +
            1 +
            "&feedbackId=" +
            this.id
        )
        .then((res) => {
          console.log(res);
          this.feedbackDetails = res.data.feedbackDetail;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
