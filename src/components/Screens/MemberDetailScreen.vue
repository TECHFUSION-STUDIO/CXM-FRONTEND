<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">General Members </a></li>

          <li class="breadcrumb-item active" aria-current="page">Member Detail</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row">
        <div class="col-md-12">
          <p class="text-muted">Member Id : 6476589</p>
          <h5>grgrg</h5>

          <div class="row">
            <div class="col-auto"><p>Email : 6476589</p></div>
            <div class="col-auto"><p>Contact : 6476589</p></div>
            <div class="col-auto"><p>Status : 6476589</p></div>
            <div class="col-auto">
              <p>Added on : 6476589</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <h6>Associated Projects</h6>

      <table class="table table-hover table-bordered mt-4 w-100">
        <thead>
          <tr class="bg-light">
            <td style="width: 40%">Project</td>
            <td>Role</td>
            <td>Added Time</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr class="table-primary">
            <td style="width: 40%">
              <select class="form-select form-select-sm">
                <option value="Admin">Admin</option>
                <option value="Member">Member</option>
              </select>
            </td>
            <td>
              <select class="form-select form-select-sm">
                <option value="Admin">Admin</option>
                <option value="Member">Member</option>
              </select>
            </td>
            <td></td>
            <td><button class="btn btn-primary btn-sm">Submit</button></td>
          </tr>
          <tr>
            <td style="width: 40%">vsxvb x v</td>

            <td>
              <select class="form-select form-select-sm">
                <option value="Admin">Admin</option>
                <option value="Member">Member</option>
              </select>
            </td>
            <td>vs</td>
            <td><button class="btn btn-danger btn-sm">delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="text-center mt-3 mb-3">
      <button class="btn btn-danger m-2 w-25">Delete</button>
      <button
        class="btn btn-primary m-2 w-25"
        @click="this.$router.push('/editmember/1')"
      >
        Edit Member
      </button>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "MemberDetailScreen",
  data() {
    return {
      id: "",
      memberDetail: {},
      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.memberId;
  },
  methods: {
    fetchMemberDetail() {
      axiosConn
        .get("/getteammemberbyid?businessId=1&memberId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.memberDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
