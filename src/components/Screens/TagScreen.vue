<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row w-100">
        <div class="col-md-3">
          <button class="btn btn-primary mt-2" @click="this.$router.push('/createtags')">
            Create a Tag
          </button>
        </div>
        <div class="col-md-6">
          <div class="input-group mt-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search Tag"
              aria-label="Search"
            />
            <button class="btn btn-success">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="table-responsive-md mt-3">
        <table class="table table-hover table-bordered mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Tag Name</td>
              <td>Status</td>
              <td>Tot Usage</td>
              <td>Created on</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tagList" :key="item.id">
              <td style="width: 40%">
                <span
                  id="feedbackTitle"
                  @click="this.$router.push('/tagsdetail/' + item.id)"
                  >{{ item.tagName }}</span
                >
              </td>

              <td>
                <!-- {{ item.tagStatus }} -->
                <span class="badge text-bg-success">{{ item.tagStatus }}</span>
              </td>
              <td>vds</td>
              <td>{{ item.addedDateTime }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "TagScreen",
  data() {
    return {
      tagList: [],
      axiosConn,
    };
  },
  mounted() {
    this.fetchAllTags();
  },
  methods: {
    fetchAllTags() {
      axiosConn
        .get("/getalltag?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.tagList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
