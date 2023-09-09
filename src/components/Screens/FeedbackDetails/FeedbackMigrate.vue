<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div>
        <button class="btn btn-outline-primary m-1" @click="migrate('FILTERED')">
          Move To Filtered
        </button>
        <button class="btn btn-outline-primary m-1">Move To Raw</button>
        <button class="btn btn-outline-primary m-1">Move To Trash</button>
        <button class="btn btn-outline-primary m-1">Move To Completed</button>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "FeedbackMigrate",
  data() {
    return {
      id: this.$route.params.fid,
    };
  },
  methods: {
    migrate(item) {
      let a = window.location.href.substring(0, window.location.href.lastIndexOf("/"));
      let b = a.substring(a.lastIndexOf("/") + 1).toUpperCase();
      axiosConn
        .get(
          "/migrateFeedback?businessId=1&projectId=1&feedbackId=" +
            this.id +
            "&destination=" +
            item +
            "&source=" +
            b
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
