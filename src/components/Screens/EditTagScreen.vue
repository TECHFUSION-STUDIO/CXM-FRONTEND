<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/tags')">Tags </a>
          </li>

          <li class="breadcrumb-item active" aria-current="page">Edit Tag</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-12">
          <p class="text-muted">Tag Id : {{ tagDetail.id }}</p>
        </div>
        <div class="col-md-12">
          <div class="mb-2">
            <label class="form-label" for="tagName">Tag Name</label>
            <input
              type="text"
              id="tagName"
              class="form-control"
              v-model="tagDetail.tagName"
              disabled
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-2">
            <label class="form-label" for="tagStatus">Tag Status</label>
            <select id="tagStatus" class="form-select" v-model="tagDetail.tagStatus">
              <option v-for="item in constants.GENERIC_STATUS" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="text-center mt-3 mb-3">
        <button class="btn btn-outline-danger m-2 w-25">Reset</button>
        <button class="btn btn-outline-primary m-2 w-25" @click="updateTagDetail()">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import { constants } from "./constants";

export default {
  name: "EditTagScreen",
  data() {
    return {
      id: "",
      tagDetail: {},
      axiosConn,
      constants,
    };
  },
  mounted() {
    this.id = this.$route.params.tagId;
    this.fetchTagDetail();
  },
  methods: {
    fetchTagDetail() {
      axiosConn
        .get("/getTag?businessId=1&projectId=1&tagId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.tagDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateTagDetail() {
      axiosConn
        .post("/updatetags", this.tagDetail)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
