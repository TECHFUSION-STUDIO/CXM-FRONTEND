<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">Survey </a></li>
          <li class="breadcrumb-item"><a href="#">Survey Name</a></li>
          <li class="breadcrumb-item"><a href="#">Filtered Feedback</a></li>

          <li class="breadcrumb-item active" aria-current="page">Feedback Detail</li>
        </ol>
      </nav>
    </div>
    <div class="mt-3">
      <div class="row w-100">
        <div class="col-md-8 col-lg-8">
          <div class="bg-white shadow shadow-sm p-3">
            <p class="text-muted mb-0">Id : 12</p>

            <h5 class="mt-1">abc</h5>
            <p class="text-muted">Created By Anonymous via Page Name at 23/04/2023</p>

            <p>adf</p>
          </div>

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

        <div class="col-md-4 col-lg-4">
          <FeedbackDetailAssignmentVue
            :feedback="feedbackDetails"
            :key="feedbackDetails.detail.id"
            @refresh="reloading()"
          />
          <div class="bg-white shadow shadow-sm p-3 mt-2 row w-100 m-auto text-center">
            <div class="col-md-12">
              <button class="btn btn-outline-danger w-100">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeedbackComments from "./FeedbackDetails/FeedbackComments.vue";
import FeedbackDetailCollab from "./FeedbackDetails/FeedbackDetailCollab.vue";
import FeedbackDetailTag from "./FeedbackDetails/FeedbackDetailTag.vue";
import FeedbackDetailAssignmentVue from "./FeedbackDetails/FeedbackDetailAssignment.vue";
export default {
  name: "FilteredFeedbackDetailScreen",
  components: {
    FeedbackDetailCollab,
    FeedbackDetailTag,
    FeedbackComments,
    FeedbackDetailAssignmentVue,
  },
  data() {
    return {
      id: "",
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

  methods: {},
};
</script>

<style lang="scss" scoped></style>
