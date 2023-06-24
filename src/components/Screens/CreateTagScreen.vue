<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">Tags </a></li>

          <li class="breadcrumb-item active" aria-current="page">Create New Tag</li>
        </ol>
      </nav>
    </div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-2">
            <label class="form-label" for="tagName">Tag Name</label>
            <input type="text" id="tagName" class="form-control" v-model="inpTagName" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-2">
            <label class="form-label" for="tagStatus">Tag Status</label>
            <select id="tagStatus" class="form-select" v-model="inpTagStatus">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <div class="text-center mt-3 mb-3">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <button class="btn btn-outline-success m-2 w-25" @click="createTag()">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "CreateTagScreen",
  data() {
    return {
      inpTagName: "",
      inpTagStatus: "",
      axiosConn,
    };
  },
  methods: {
    createTag() {
      axiosConn
        .post("/createtags", {
          businessId: 1,
          projectId: 1,
          tagName: this.inpTagName,
          tagStatus: this.inpTagStatus,
          addedDateTime: "2023-06-24T08:08:57.766Z",
        })
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
