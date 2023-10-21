<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item active" aria-current="page">
            Showing Feedback Detail
          </li>
        </ol>
      </nav>
    </div>
    <div class="mt-3">
      <FeedbackDetail />
      <!-- <FeedbackDetailTag /> -->
      <FeedbackComments />
    </div>

    <div class="text-end mt-3 mb-3">
      <button class="btn btn-outline-danger m-2 btn-sm">Delete Feedback</button>
    </div>
  </div>
</template>

<script>
import FeedbackDetail from "./FeedbackDetails/FeedbackDetail.vue";
import FeedbackComments from "./FeedbackDetails/FeedbackComments.vue";
// import FeedbackDetailCollab from "./FeedbackDetails/FeedbackDetailCollab.vue";
// import FeedbackDetailTag from "./FeedbackDetails/FeedbackDetailTag.vue";
// import axiosConn from "@/axioscon";
import FeedbackMixin from "./mixins/FeedbackMixin";

export default {
  name: "RawFeedbackDetailScreen",
  components: {
    // FeedbackDetailCollab,
    // FeedbackDetailTag,
    FeedbackComments,
    FeedbackDetail,
  },
  mixins: [FeedbackMixin],

  data() {
    return {
      id: this.$route.params.fid,
    };
  },
  mounted() {
    this.id = this.$route.params.fid;
    console.log(this.id);
  },
  created() {
    this.fetchFeedbackDetail();
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
