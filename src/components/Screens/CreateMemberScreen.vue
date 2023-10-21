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

        <li class="breadcrumb-item active" aria-current="page">Create Global Member</li>
      </ol>
    </nav>
  </div>

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

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Assign Vendor</label>
      <!-- <model-select
        :options="memberVendor.options"
        v-model="memberVendor.item"
        placeholder="Select a Vendor"
        @searchchange="printSearchText"
        class="form-control border border-2 border-info"
      >
      </model-select> -->
      <multiselect
        :options="memberVendor.options"
        v-model="memberVendor.value"
        placeholder="Select one"
        label="vendorOrgName"
        track-by="id"
      ></multiselect>

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
import Multiselect from "vue-multiselect";

export default {
  name: "CreateMemberScreen",
  components: {
    Multiselect,
  },
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
      memberVendor: {
        value: { name: "Vue.js", language: "JavaScript" },
        options: [
          { name: "Vue.js", language: "JavaScript" },
          { name: "Rails", language: "Ruby" },
          { name: "Sinatra", language: "Ruby" },
          { name: "Laravel", language: "PHP" },
          { name: "Phoenix", language: "Elixir" },
        ],
      },
    };
  },
  mounted() {
    this.getAllVendors();
  },

  methods: {
    createMember() {
      axioscon
        .post("/createteammember", {
          memberDetails: {
            businessId: 1,
            vendorId: this.memberVendor.value.id,
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
    getAllVendors() {
      axioscon
        .get("/getVendor?businessId=1")
        .then((res) => {
          console.log(res);

          this.memberVendor.options = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
