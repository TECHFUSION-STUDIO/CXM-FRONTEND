<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        Showing Tags <i>for project id BMRC-9877</i>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row w-100">
        <div class="col-md-3">
          <!-- <button class="btn btn-primary mt-2" @click="this.$router.push('/createtags')">
            Create a Tag
          </button> -->
          <button
            class="btn btn-primary mt-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            Create Tag
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
            <button class="btn btn-primary">
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
              <td class="text-center">Status</td>
              <!-- <td>Tot Usage</td> -->
              <td>Created on</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tagList" :key="item.id">
              <td style="width: 40%">
                <a
                  id="feedbackTitle"
                  @click="this.$router.push('/tagsdetail/' + item.id)"
                  >{{ item.tagName }}</a
                >
              </td>

              <td class="text-center">
                <span class="badge text-bg-success">{{ item.tagStatus }}</span>
              </td>
              <!-- <td>215</td> -->
              <td>{{ item.addedDateTime }}</td>
            </tr>
            <tr v-if="tagList.length == 0">
              <td class="text-center" colspan="3"><i>No Data Found</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      class="offcanvas offcanvas-end"
      data-bs-backdrop="static"
      tabindex="-1"
      id="staticBackdrop"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="staticBackdropLabel">Create Tag</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div><CreateTagScreen type="offcanvas" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import CreateTagScreen from "./CreateTagScreen.vue";

export default {
  name: "TagScreen",
  components: { CreateTagScreen },
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
        .get("/getTag?businessId=1&projectId=1")
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
