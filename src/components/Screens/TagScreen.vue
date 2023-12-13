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
          <button
            class="btn btn-primary mt-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
            @click.prevent="showCreateTagMenu = true"
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
              <th style="width: 40%">Tag Name</th>
              <th class="text-center">Status</th>
              <th>Created on</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tagList" :key="item.id">
              <td style="width: 40%">
                <a
                  id="feedbackTitle"
                  @click.prevent="showTagDetail(item)"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#staticBackdropTagDetail"
                  aria-controls="staticBackdropTagDetail"
                  >{{ item.tagName }}</a
                >
              </td>

              <td class="text-center">
                <!-- <span class="text-success fw-bold">{{ item.tagStatus }}</span> -->
                <span class="text-success fw-bold">{{ item.tagStatus }}</span>
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
      :class="showCreateTagMenu ? 'show' : ''"
      tabindex="-1"
      :style="{ visibility: showCreateTagMenu ? 'visible' : 'hidden' }"
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
          @click="showCreateTagMenu = false"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <CreateTagScreen type="offcanvas" @success="showCreateTagMenu = false" />
        </div>
      </div>
    </div>

    <div
      class="offcanvas offcanvas-end"
      :class="showTagDetailMenu ? 'show' : ''"
      tabindex="-1"
      :style="{ visibility: showTagDetailMenu ? 'visible' : 'hidden' }"
      data-bs-backdrop="static"
      id="staticBackdropTagDetail"
      aria-labelledby="staticBackdropTagDetailLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="staticBackdropTagDetailLabel">Tag Detail</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click.prevent="
            showTagDetailMenu = false;
            tagDetail = {};
          "
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <p class="text-muted">
            <i>Tag Id : {{ tagDetail.id }}</i>
          </p>
          <h5>{{ tagDetail.tagName }}</h5>
          <div class="mt-3">
            <span class="fw-medium">Status : </span>
            <span class="text-success fw-bold">{{ tagDetail.tagStatus }}</span>
          </div>
          <div class="mt-2">
            <p><span class="fw-medium">Added on : </span>{{ tagDetail.addedDateTime }}</p>
          </div>

          <div class="text-end">
            <button
              class="btn btn-primary btn-sm m-1"
              @click="this.$router.push('/edittags/' + tagDetail.id)"
            >
              Edit Tag
            </button>

            <button class="btn btn-outline-danger btn-sm m-1">Delete Tag</button>
          </div>
        </div>
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
      showTagDetailMenu: false,
      showCreateTagMenu: false,
      tagDetail: {},
      axiosConn,
    };
  },
  mounted() {
    this.fetchAllTags();
  },
  computed: {
    axiosParams() {
      const params = new URLSearchParams();
      params.append("param1", "value1");
      params.append("param2", "value2");
      return params;
    },
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
    showTagDetail(item) {
      this.showTagDetailMenu = true;
      this.tagDetail = item;
    },
  },
};
</script>

<style lang="scss" scoped></style>
