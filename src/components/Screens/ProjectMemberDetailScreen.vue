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
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">Member Email</span>
            <input
              type="text"
              class="form-control"
              disabled
              :value="memberDetail.teamMemberEmail"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">Member Contact</span>
            <input
              type="text"
              class="form-control"
              disabled
              :value="memberDetail.teamMemberContact"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">Member Status</span>
            <input
              type="text"
              class="form-control"
              disabled
              :value="memberDetail.teamMemberStatus"
            />
          </div>
        </div>

        <div class="col-md-4" v-if="memberDetail.vendorId != null">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">Vendor</span>
            <input
              type="text"
              class="form-control"
              disabled
              :value="
                memberDetail.vendorId != null ? memberDetail.vendorId.vendorOrgName : ''
              "
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">Created on</span>
            <input
              type="datetime-local"
              class="form-control"
              disabled
              :value="memberDetail.addedDateTime"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2" v-if="falsex">
      <div>
        <p><strong>Project Board Access</strong></p>

        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01"
            >Do you want to give access to all boards ?</label
          >
          <select class="form-select" id="inputGroupSelect01" v-model="isAllBoardAccess">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div class="mt-3" v-if="isAllBoardAccess == 'No'">
          <!-- <multi-select
            :options="boardSelect.options"
            :selected-options="boardSelect.items"
            placeholder="Type and select Boards to give access"
            @select="onBoardSelect"
          >
          </multi-select> -->

          <multiselect
            v-model="boardSelect.value"
            tag-placeholder="Add this as new tag"
            placeholder="Search or add a tag"
            label="boardName"
            track-by="id"
            :options="boardSelect.options"
            :multiple="true"
            :taggable="true"
            @tag="onBoardSelect"
          ></multiselect>
        </div>
        <div class="">
          <button class="btn btn-sm btn-outline-danger m-2">Reset</button>
          <button class="btn btn-sm btn-primary m-2">Update</button>
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
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div class="mt-3" v-if="isAllSurveyAccess == 'No'">
          <multiselect
            v-model="surveySelect.value"
            tag-placeholder="Add this as new tag"
            placeholder="Search or add a tag"
            label="surveyFormName"
            track-by="id"
            :options="surveySelect.options"
            :multiple="true"
            :taggable="true"
            @tag="onSurveySelect"
          ></multiselect>
        </div>
        <div class="">
          <button class="btn btn-sm btn-outline-danger m-2">Reset</button>
          <button class="btn btn-sm btn-primary m-2">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import Multiselect from "vue-multiselect";

export default {
  name: "ProjectMemberDetailScreen",
  components: {
    Multiselect,
  },
  data() {
    return {
      id: "",
      memberDetail: {},
      isAllBoardAccess: "",
      boardSelect: {
        options: [],
        value: [],
      },

      isAllSurveyAccess: "",
      surveySelect: {
        options: [],
        value: [],
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
    onBoardSelect(newTag) {
      console.log(newTag);
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.boardSelect.options.push(tag);
      this.boardSelect.value.push(tag);
    },
    onSurveySelect(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.surveySelect.options.push(tag);
      this.surveySelect.value.push(tag);
    },

    fetchMemberDetail() {
      axiosConn
        .get("/getTeamMember?businessId=1&memberId=" + this.id)
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
        .get("/getSurveyForm?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.surveySelect.options = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchAllBoard() {
      axiosConn
        .get("/getBoard?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.boardSelect.options = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
