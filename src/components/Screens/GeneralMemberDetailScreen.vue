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
          <div class="d-flex mb-3">
            <div class="text-muted">Member Id : {{ memberDetail.id }}</div>
            <div class="ms-auto">
              <button
                class="btn btn-primary btn-sm"
                @click="this.$router.push('/editmember/' + id)"
              >
                Edit
              </button>
            </div>
          </div>
          <h5>{{ memberDetail.teamMemberName }}</h5>

          <div class="row">
            <div class="col-auto">
              <p>Email : {{ memberDetail.teamMemberEmail }}</p>
            </div>
            <div class="col-auto">
              <p>Contact : {{ memberDetail.teamMemberContact }}</p>
            </div>
            <div class="col-auto">
              <p>Status : {{ memberDetail.teamMemberStatus }}</p>
            </div>
            <div class="col-auto">
              <p>Added on : {{ memberDetail.addedDateTime }}</p>
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
              <model-select
                :options="inpProjectSelected.options"
                v-model="inpProjectSelected.item"
                placeholder="placeholder text"
                @searchchange="printSearchText"
                class="form-control border border-2 border-info"
              >
              </model-select>
            </td>
            <td>
              <select class="form-select" v-model="inpProjectRoleSelected">
                <option value="Admin">Admin</option>
                <option value="Member">Member</option>
              </select>
            </td>
            <td></td>
            <td>
              <button class="btn btn-primary" @click="createTeamMemberProject()">
                Submit
              </button>
            </td>
          </tr>
          <tr v-for="item in teamMemberProjectList" :key="item.id">
            <td style="width: 40%">{{ item.projectName }}</td>

            <td>
              <select
                class="form-select form-select-sm"
                v-model="item.teamMemberProjectRole"
                @change="updateTeamMemberProject(item)"
              >
                <option value="Admin">Admin</option>
                <option value="Member">Member</option>
              </select>
            </td>
            <td>{{ item.addedDateTime }}</td>
            <td><button class="btn btn-danger">delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="text-center mt-3 mb-3">
      <button class="btn btn-danger m-2 w-25">Delete</button>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import { ModelSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  name: "GeneralMemberDetailScreen",
  components: {
    ModelSelect,
  },
  data() {
    return {
      id: "",
      memberDetail: {},
      projectList: [],
      teamMemberProjectList: [],
      inpProjectRoleSelected: "",
      inpProjectSelected: {
        options: [],
        item: {},
        searchText: "",
      },
      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.memberId;
    this.fetchAllProjects();
    this.fetchMemberDetail();
    this.fetchAllTeamMemberProject();
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
    fetchAllTeamMemberProject() {
      axiosConn
        .get("/getallteammemberprojectbymemberId?businessId=1&memberId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.teamMemberProjectList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    fetchAllProjects() {
      axiosConn
        .get("/getallprojects?businessId=1")
        .then((res) => {
          console.log(res.data);
          this.projectList = res.data;
          this.inpProjectSelected.options = this.projectList.map((a, index) => {
            return {
              value: index,
              text: a.projectName,
              id: a.id,
              //id: a.id,
            };
          });
          console.log(this.inpProjectSelected.options);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createTeamMemberProject() {
      axiosConn
        .post("/createteammemberproject", {
          businessId: 1,
          projectId: this.inpProjectSelected.item.id,
          teamMemberId: this.id,
          teamMemberProjectRole: this.inpProjectRoleSelected,
          lastModifiedDateTime: "2023-06-29T07:18:28.533Z",
          addedDateTime: "2023-06-29T07:18:28.533Z",
        })
        .then((res) => {
          console.log(res.data);
          this.fetchAllTeamMemberProject();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateTeamMemberProject(item) {
      console.log(item);
      axiosConn
        .post("/updateteammemberproject", item)
        .then((res) => {
          console.log(res.data);
          this.fetchAllTeamMemberProject();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    reset() {
      this.inpProjectSelected.item = {};
    },
    selectOption() {
      // select option from parent component
      this.inpProjectSelected.item = this.inpProjectSelected.options[1];
    },
    printSearchText(searchText) {
      this.inpProjectSelected.searchText = searchText;
    },
  },
};
</script>

<style lang="scss" scoped></style>
