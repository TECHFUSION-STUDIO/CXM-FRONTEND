<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>

          <li class="breadcrumb-item">
            <a @click="this.$router.push('/projectmemberdetail')">Project Members </a>
          </li>

          <li class="breadcrumb-item active" aria-current="page">
            Showing Member Detail <i>for member id {{ memberDetail.id }}</i>
          </li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row">
        <div class="col-md-12">
          <p class="text-muted">Member Id : {{ memberDetail.id }}</p>
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
      <div>
        <p><strong>Project Board Access</strong></p>

        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01"
            >Do you want to give access to all boards ?</label
          >
          <select class="form-select" id="inputGroupSelect01" v-model="isAllBoardAccess">
            <option selected>Choose...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div class="mt-3" v-if="isAllBoardAccess == 'No'">
          <multi-select
            :options="boardSelect.options"
            :selected-options="boardSelect.items"
            placeholder="Type and select Boards to give access"
            @select="onBoardSelect"
          >
          </multi-select>
        </div>
      </div>
      <hr class="mt-3" />

      <div class="mt-3">
        <p><strong>Project Survey Access</strong></p>

        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01"
            >Do you want to give access to all surveys ?</label
          >
          <select class="form-select" id="inputGroupSelect01" v-model="isAllSurveyAccess">
            <option selected>Choose...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div class="mt-3" v-if="isAllSurveyAccess == 'No'">
          <multi-select
            :options="surveySelect.options"
            :selected-options="surveySelect.items"
            placeholder="Type and select Survey To give access"
            @select="onSurveySelect"
          >
          </multi-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import { MultiSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  name: "ProjectMemberDetailScreen",
  components: {
    MultiSelect,
  },
  data() {
    return {
      id: "",
      memberDetail: {},
      isAllBoardAccess: "",
      boardSelect: {
        options: [],
        items: [],
        lastSelectItem: {},
      },

      isAllSurveyAccess: "",
      surveySelect: {
        options: [],
        items: [],
        lastSelectItem: {},
      },

      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.memberId;
    this.fetchMemberDetail();
    this.fetchAllBoard();
    this.fetchAllSurvey();
  },
  methods: {
    onBoardSelect(items, lastSelectItem) {
      this.boardSelect.items = items;
      this.boardSelect.lastSelectItem = lastSelectItem;
      // this.submitAddTag();
    },
    onSurveySelect(items, lastSelectItem) {
      this.surveySelect.items = items;
      this.surveySelect.lastSelectItem = lastSelectItem;
      // this.submitAddTag();
    },
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
    fetchAllSurvey() {
      axiosConn
        .get("/getallsurveyform?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.surveySelect.options = res.data.map((a) => {
            return {
              value: a.id,
              text: a.surveyFormName,
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchAllBoard() {
      axiosConn
        .get("/getallboard?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.boardSelect.options = res.data.map((a) => {
            return {
              value: a.id,
              text: a.boardName,
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
