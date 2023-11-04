<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/board')">Boards </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Showing Board Detail for <i>{{ boardDetail.boardName }}</i>
          </li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex mb-3">
            <div class="text-muted">Board Id : {{ boardDetail.id }}</div>
            <div class="ms-auto">
              <button
                class="btn btn-primary btn-sm"
                @click="this.$router.push('/editboard/' + id)"
              >
                Edit
              </button>
            </div>
          </div>
          <h5>{{ boardDetail.boardName }}</h5>

          <p>
            {{ boardDetail.boardDescription }}
          </p>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">Board Status</span>
            <input
              type="text"
              class="form-control"
              disabled
              :value="boardDetail.boardStatus"
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
              :value="boardDetail.addedDateTime"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="d-flex justify-content-center">
        <div class="input-group mt-2 w-50">
          <input
            class="form-control"
            type="search"
            placeholder="Search Feature"
            aria-label="Search"
          />
          <button class="btn btn-primary">
            <i class="fa-brands fa-searchengin"></i>
          </button>
        </div>
      </div>
      <div class="table-responsive-md mt-3">
        <table class="table table-hover table-bordered mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Feature</td>
              <td class="text-center">Status</td>
              <td class="text-center">Category</td>

              <td class="text-center">Impact</td>
              <td class="text-center">Effort</td>
              <td class="text-center">Priority</td>
              <td class="text-center">Strength</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in featureList" :key="item.id">
              <td style="width: 40%">
                <a id="feedbackTitle" @click="this.$router.push('/feature/' + item.id)">{{
                  item.featureName
                }}</a>
              </td>
              <td class="text-center">
                <span class="badge text-bg-success">{{ item.featureStatus }}</span>
              </td>
              <td class="text-center">
                {{ item.featureCategory }}
              </td>
              <td class="text-center">
                {{ item.featureImpact }}
              </td>
              <td class="text-center">
                {{ item.featureEffort }}
              </td>
              <td class="text-center">
                {{ item.featurePriority }}
              </td>
              <td class="text-center">56</td>
            </tr>
            <tr v-if="featureList.length == 0">
              <td class="text-center" colspan="7"><i>No Data Found</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <ImpactedCustomer type="feature" />
    </div>
    <div class="text-end mt-3 mb-3">
      <button class="btn btn-outline-danger m-2 btn-sm">Delete Survey</button>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import ImpactedCustomer from "./tables/ImpactedCustomer.vue";

export default {
  name: "BoardDetailScreen",
  components: {
    ImpactedCustomer,
  },
  data() {
    return {
      id: this.$route.params.boardId,
      boardDetail: {},
      featureList: [],
      axiosConn,
    };
  },
  mounted() {
    this.id = this.$route.params.boardId;
    this.fetchBoardDetail();
    this.fetchAllFeature();
  },
  methods: {
    fetchBoardDetail() {
      axiosConn
        .get("/getBoard?businessId=1&projectId=1&boardId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.boardDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchAllFeature() {
      axiosConn
        .post("/getAllFeature", {
          businessId: 1,
          projectId: 1,
          orderBy: "addedDateTime",
          orderByAsc: false,
        })
        .then((res) => {
          console.log(res.data);
          this.featureList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
