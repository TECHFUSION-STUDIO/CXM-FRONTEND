<template>
  <div>
    <div>
      <div class="bg-white shadow shadow-sm mt-1 p-2">
        <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
          <ol class="breadcrumb p-0 m-0">
            <li class="breadcrumb-item"><a href="#">Tags </a></li>

            <li class="breadcrumb-item active" aria-current="page">Tag Detail</li>
          </ol>
        </nav>
      </div>

      <div class="bg-white shadow shadow-sm mt-3 p-2">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex mb-3">
              <div class="text-muted">Tag Id : {{ tagDetail.id }}</div>
              <div class="ms-auto">
                <button
                  class="btn btn-primary btn-sm"
                  @click="this.$router.push('/edittags/' + tagDetail.id)"
                >
                  Edit Tag
                </button>
              </div>
            </div>
            <h5>{{ tagDetail.tagName }}</h5>
            <div class="row">
              <div class="col-auto">
                <p>Status : {{ tagDetail.tagStatus }}</p>
              </div>

              <div class="col-auto"><p>Total Feedback : 6476589</p></div>
              <div class="col-auto"><p>Last used at : 6476589</p></div>
              <div class="col-auto">
                <p>Added on : {{ tagDetail.addedDateTime }}</p>
              </div>
              <div class="col-auto"></div>
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>

      <div class="text-center mt-3 mb-3">
        <button class="btn btn-danger m-2 w-25">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "TagDetailScreen",
  components: {},
  data() {
    return {
      id: this.$route.params.tagId,
      tagDetail: {},
      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.tagId;
    this.fetchTagDetail();
  },
  methods: {
    fetchTagDetail() {
      axiosConn
        .get("/gettagsbyid?businessId=1&projectId=1&tagId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.tagDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
