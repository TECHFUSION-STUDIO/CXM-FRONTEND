<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <h6>Comments</h6>
      <!-- <div class="card mt-2"> -->
      <div class="">
        <textarea class="form-control" v-model="commentDesc" rows="3" />
        <button
          class="btn btn-success btn-sm mt-2 me-2"
          @click="addComment()"
          :disabled="commentDesc == ''"
        >
          Add Comment
        </button>
        <!-- </div> -->
      </div>
      <div class="card mt-3" v-for="item in commentList" :key="item.id">
        <div class="card-body">
          <div>{{ item.comment }}</div>
          <span style="font-size: 12px; color: grey"
            >Added By: hkhkh | Added on : bjbk</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "FeedbackComments",
  data() {
    return {
      commentDesc: "",
      id: this.$route.params.fid,
      commentList: [],
    };
  },
  mounted() {
    this.id = this.$route.params.fid;
    console.log(this.id);
    this.fetchAllComments();
  },

  beforeRouteUpdate(to, from, next) {
    console.log("Before Route Update" + to.params.fid);
    this.id = to.params.fid;
    console.log(this.id);
    this.fetchAllComments();
    next();
  },
  methods: {
    fetchAllComments() {
      axiosConn
        .get(
          "/getFeedbackComments?businessId=1&projectId=" +
            localStorage.getItem("selectedProject") +
            "&feedbackId=" +
            this.id
        )
        .then((res) => {
          console.log(res);
          this.commentList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addComment() {
      axiosConn
        .post("/addFeedbackComments", {
          addedBy: 0,
          addedDateTime: "",
          businessId: 1,
          comment: this.commentDesc,
          feedbackId: this.id,
          projectId: localStorage.getItem("selectedProject"),
        })
        .then((res) => {
          console.log(res.data);
          this.commentDesc = "";

          this.fetchAllComments();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
