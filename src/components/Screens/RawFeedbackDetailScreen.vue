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
          <FeedbackDetailTag
            :feedback="feedbackDetails"
            :key="feedbackDetails.detail.id"
          />

          <FeedbackDetailCollab
            :feedback="feedbackDetails"
            :key="feedbackDetails.detail.id"
          />
          <FeedbackComments
            :feedback="feedbackDetails"
            :key="feedbackDetails.detail.id"
          />
        </div>

        <div class="col-md-4">
          <FeedbackDetailAssignmentVue
            :feedback="feedbackDetails"
            :key="feedbackDetails.detail.id"
            @refresh="reloading()"
          />
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

import FeedbackComments from "./FeedbackDetails/FeedbackComments.vue";
import FeedbackDetailCollab from "./FeedbackDetails/FeedbackDetailCollab.vue";
import FeedbackDetailTag from "./FeedbackDetails/FeedbackDetailTag.vue";
import FeedbackDetailAssignmentVue from "./FeedbackDetails/FeedbackDetailAssignment.vue";
export default {
  name: "RawFeedbackDetailScreen",
  components: {
    FeedbackDetailCollab,
    FeedbackDetailTag,
    FeedbackComments,
    FeedbackDetailAssignmentVue,
    FeedbackDetail,
  },
  data() {
    return {
      id: this.$route.params.fid,
      feedbackDetails: {
        comments: [],
        votes: [],
        detail: {
          id: 0,
          businessId: 0,
          projectId: 0,
          boardId: 0,
          loggerId: 0,
          assignedTo: 0,
          postedBy: 0,
          ownedBy: 0,
          formSubmissionId: 0,
          feedbackSource: "",
          sourcePageId: 0,
          feedbackTitle: "",
          feedbackDescription: "",
          feedbackStatus: "",
          feedbackCategory: "",
          feedbackPriority: "",
          feedbackImpact: 0,
          feedbackEffort: 0,
          feedbackAdditionalDetail: "",
          lastModified: null,
          addedDateTime: "",
        },
        tags: [],
      },
    };
  },
  mounted() {
    this.id = this.$route.params.fid;
    console.log(this.id);
    // this.fetchFeedbackDetail();
  },
  // beforeRouteUpdate(to, from, next) {
  //   console.log("Before Route Update" + to.params.fid);
  //   this.id = to.params.fid;
  //   console.log(this.id);
  //   this.fetchFeedbackDetail();
  //   next();
  // },
  methods: {
    // reloading() {
    //   this.fetchFeedbackDetail();
    // },
  },
};
</script>

<style lang="scss" scoped></style>
