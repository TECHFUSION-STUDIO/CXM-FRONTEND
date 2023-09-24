<template>
  <div class="bg-white shadow shadow-sm mt-1 p-2">
    <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
      <ol class="breadcrumb p-0 m-0">
        <a @click="this.$router.go(-1)" title="Go to Previous Page"
          ><i class="fa-solid fa-arrow-left me-2"></i>
        </a>

        <li class="breadcrumb-item">
          <a @click="this.$router.push('/generalmember')">General Members </a>
        </li>

        <li class="breadcrumb-item active" aria-current="page">Edit Member</li>
      </ol>
    </nav>
  </div>

  <div class="bg-white shadow shadow-sm mt-3 p-3">
    <p class="text-muted">Member Id : {{ id }}</p>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Member Email</label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        v-model="memberDetail.teamMemberEmail"
        disabled
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Member Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        v-model="memberDetail.teamMemberName"
      />
    </div>

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Member Contact</label>
      <input
        type="tel"
        class="form-control"
        id="exampleFormControlInput1"
        v-model="memberDetail.teamMemberContact"
      />
    </div>
    <!-- <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Member Description</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="memberDetail.teamMemberDesc"
      ></textarea>
    </div> -->

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Member Role</label>
      <select class="form-select" v-model="memberDetail.teamMemberRole">
        <option value="Admin">Admin</option>
        <option value="Member">Member</option>
      </select>
      <br />
    </div>

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Member Status</label>
      <select class="form-select" v-model="memberDetail.teamMemberStatus">
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <br />
    </div>

    <div class="text-center">
      <button class="btn btn-outline-danger m-2 w-25">Reset</button>
      <button class="btn btn-outline-success m-2 w-25" @click="updateMember()">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import axioscon from "../../axioscon.js";

export default {
  name: "EditMemberScreen",
  data() {
    return {
      axioscon,
      memberDetail: {},

      id: "",
    };
  },
  mounted() {
    this.id = this.$route.params.memberId;
    this.fetchMemberDetail();
  },
  methods: {
    fetchMemberDetail() {
      axioscon
        .get("/getteammemberbyid?businessId=1&memberId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.memberDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateMember() {
      axioscon
        .post("/updateteammember", this.memberDetail)
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
