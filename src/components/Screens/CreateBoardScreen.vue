<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="boardName" class="form-label">Board Name</label>
            <input
              type="text"
              class="form-control"
              id="boardName"
              v-model="inpboardName"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="boardDesc" class="form-label">Board Description</label>
            <textarea
              class="form-control"
              id="boardDesc"
              rows="3"
              v-model="inpboardDesc"
            ></textarea>
          </div>
        </div>
        <!-- <div class="col-md-12">
          <div class="mb-3">
            <label for="boardCapacity" class="form-label">Board Capacity</label>
            <input
              type="number"
              class="form-control"
              id="boardCapacity"
              v-model="inpboardCapacity"
            />
          </div>
        </div> -->
        <div class="col-md-12">
          <div class="mb-3">
            <label for="boardStatus" class="form-label">Board Visibility</label>
            <select id="boardStatus" class="form-select" v-model="inpboardVisibility">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div class="col-md-12">
          <div class="mb-3">
            <label for="boardStatus" class="form-label">Board Status</label>
            <select id="boardStatus" class="form-select" v-model="inpboardStatus">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div class="col-md-12">
          <div class="text-center">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <button class="btn btn-outline-success m-2 w-25" @click="createBoard()">
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
  name: "CreateBoardScreen",

  data() {
    return {
      inpboardName: "",
      inpboardDesc: "",
      inpboardVisibility: "",
      inpboardCapacity: "",
      inpboardStatus: "",
      axiosConn,
    };
  },
  methods: {
    createBoard() {
      axiosConn
        .post("/createboard", {
          businessId: 1,
          projectId: 1,
          boardName: this.inpboardName,
          boardDescription: this.inpboardDesc,
          boardType: "GENERAL",
          visibility: this.inpboardVisibility,
          status: this.inpboardStatus,
          addedDateTime: "2023-06-24T09:35:38.067Z",
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
