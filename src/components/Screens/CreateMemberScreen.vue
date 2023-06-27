<template>
  <div class="bg-white shadow shadow-sm mt-3 p-3">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Member Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        v-model="memberName"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Member Email</label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        v-model="memberEmail"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Member Contact</label>
      <input
        type="tel"
        class="form-control"
        id="exampleFormControlInput1"
        v-model="memberContact"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Member Description</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="memberDesc"
      ></textarea>
    </div>

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Member Role</label>
      <select class="form-select" v-model="memberRole">
        <option value="Admin">Admin</option>
        <option value="Member">Member</option>
      </select>
      <br />
    </div>

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Member Status</label>
      <select class="form-select" v-model="memberStatus">
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <br />
    </div>

    <div class="text-center">
      <button class="btn btn-outline-danger m-2 w-25">Reset</button>
      <button class="btn btn-outline-success m-2 w-25" @click="createMember()">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import axioscon from "../../axioscon.js";

export default {
  name: "CreateMemberScreen",
  data() {
    return {
      axioscon,
      memberName: "",
      memberDesc: "",
      memberRole: "",
      memberProjects: "",
      memberContact: "",
      memberEmail: "",
      memberStatus: "",
    };
  },

  methods: {
    createMember() {
      axioscon
        .post("/createteammember", {
          memberDetails: {
            businessId: 1,
            teamMemberName: this.memberName,
            teamMemberEmail: this.memberEmail,
            teamMemberContact: this.memberContact,
            teamMemberRole: this.memberRole,
            teamMemberStatus: this.memberStatus,
            teamMemberLoginAllowed: true,
            lastModifiedDateTime: "2023-06-27T04:09:32.227Z",
            addedDateTime: "2023-06-27T04:09:32.227Z",
          },
          projectIdList: {},
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
