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
            >Posted by {{ item.addedBy }} on {{ item.createdAt }}</span
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
      id: this.$route.params.featureId,
      commentList: [],
    };
  },
  mounted() {
    this.id = this.$route.params.featureId;
    console.log("feature id :" + this.id);
    this.fetchAllComments();
  },
  methods: {
    fetchAllComments() {
      axiosConn
        .get(
          "/findFeatureComment?businessId=1&workspaceId=" + 1 + "&featureId=" + this.id
        )
        .then((res) => {
          console.log(res);
          this.commentList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addComment() {
      axiosConn
        .post("/createFeatureComment", {
          businessId: 1,
          workspaceId: 1,
          featureId: this.id,
          comment: this.commentDesc,
          addedBy: 0,
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
