<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        Showing Project Members <i>for project id BMRC-9877</i>
      </nav>
    </div>
    <!-- <h4>Welcome to Memeber Screen</h4> -->
    <div class="p-2 bg-white shadow shadow-sm mt-2" v-if="false">
      <button class="btn btn-success mt-2" @click="this.$router.push('/createfeedback')">
        <i class="fa-regular fa-square-plus me-2"></i>Add Member
      </button>
    </div>
    <div class="bg-white shadow shadow-sm mt-3 p-3 table-responsive" v-if="false">
      <div class="row w-100">
        <div class="col-md-3">
          <input
            class="form-control m-1"
            type="email"
            placeholder="Email"
            v-model="searchVal"
          />
        </div>
        <div class="col-md-3">
          <input
            class="form-control m-1"
            type="text"
            placeholder="Name"
            aria-label="Search"
            v-model="searchVal"
          />
        </div>
        <div class="col-md-3">
          <select class="form-select m-1">
            <option>Admin</option>
            <option>Member</option>
          </select>
        </div>
        <div class="col-md-3">
          <button class="btn btn-outline-success m-1">
            <i class="fa-regular fa-square-plus me-2"></i>Submit
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3 table-responsive">
      <div class="input-group mt-3 mx-auto w-75">
        <input
          class="form-control"
          type="search"
          placeholder="Search Members"
          aria-label="Search"
        />
        <button class="btn btn-primary">
          <i class="fa-brands fa-searchengin"></i>
        </button>
      </div>

      <table class="table table-hover table-bordered mt-3">
        <thead>
          <tr class="bg-light">
            <td>Email</td>
            <td>Name</td>
            <!-- <td>Contact</td> -->
            <td>Role</td>
            <td>Status</td>
            <td>Added at</td>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="item in memberList" :key="item.id">
            <td>
              <a id="feedbackTitle">{{ item.teamMemberEmail }}</a>
            </td>
            <td>{{ item.teamMemberName }}</td>

            <!-- <td>{{ item.teamMemberContact }}</td> -->
            <td>
              {{ item.teamMemberProjectRole }}
            </td>
            <td>
              {{ item.teamMemberStatus }}
            </td>
            <td>{{ item.addedDateTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axioscon from "../../axioscon.js";

export default {
  name: "ProjectMemberScreen",
  data() {
    return {
      memberList: [],
      axioscon,
    };
  },
  mounted() {
    this.fetchAllMember();
  },
  methods: {
    fetchAllMember() {
      axioscon
        .get("/getallteammemberbyproject?businessId=1&projectId=1")
        .then((res) => {
          console.log(res);
          this.memberList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="css" scoped></style>
