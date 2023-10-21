<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/feature')">Feature </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Showing Feature Detail for <i>{{ featureDetail.featureName }}</i>
          </li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex mb-3">
            <div class="text-muted">Feature Id : {{ featureDetail.id }}</div>
            <div class="ms-auto">
              <button
                class="btn btn-primary btn-sm"
                @click="this.$router.push('/editfeature/' + id)"
              >
                Edit
              </button>
            </div>
          </div>
          <h5>{{ featureDetail.featureName }}</h5>
          <p>
            {{ featureDetail.featureDescription }}
          </p>
          <div class="row">
            <div class="col-auto">
              <p>Status : {{ featureDetail.featureStatus }}</p>
            </div>

            <div class="col-auto"><p>Strength : 6476589</p></div>
            <div class="col-auto"><p>Last feedback added at : 6476589</p></div>
            <div class="col-auto">
              <p>Board Created on : {{ featureDetail.addedDateTime }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-4">
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Status</label>
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option value="OPEN">OPEN</option>
              <option value="INPROGRESS">INPROGRESS</option>
              <option value="DONE">DONE</option>

              <option value="REOPEN">REOPEN</option>

              <option value="CLOSED">CLOSED</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Board</label>
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option selected></option>
              <option v-for="item in boardList" :key="item.id" :value="item.id">
                {{ item.boardName }}
              </option>
            </select>
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Category</label>
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option selected></option>
              <option v-for="item in categoryList" :key="item.id" :value="item.id">
                {{ item.categoryName }}
              </option>
            </select>
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Impact</label>
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Effort</label>
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Priority</label>
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Assignee</label>
            <input type="text" class="form-control" aria-describedby="basic-addon1" />
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Reporter</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="basic-addon1"
              disabled
            />
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Creator</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="basic-addon1"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
    <FeatureTag />
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <FeedbackTabular
        :criteria="{ key: 'loggerId', value: id, operation: 'EQUAL' }"
        feedbackType="ALL"
      />
    </div>

    <FeatureComments />

    <div class="text-end mt-3 mb-3">
      <button class="btn btn-outline-danger m-2 btn-sm">Delete Survey</button>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
import FeedbackTabular from "./tables/FeedbackTabular.vue";
import FeatureComments from "./FeedbackDetails/FeatureComments.vue";
import FeatureTag from "./FeedbackDetails/FeatureTag.vue";
export default {
  name: "FeatureDetailScreen",
  components: {
    FeedbackTabular,
    FeatureComments,
    FeatureTag,
  },
  data() {
    return {
      featureDetail: {},
      id: this.$route.params.featureId,
      boardList: [],
      categoryList: [],
    };
  },
  mounted() {
    this.fetchFeatureDetail();
    this.fetchAllCategory();
    this.fetchAllBoard();
  },
  methods: {
    fetchAllCategory() {
      axiosConn
        .get("/getallcategory?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.categoryList = res.data;
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
          this.boardList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchFeatureDetail() {
      axiosConn
        .get("/getFeatureDetail?featureId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.featureDetail = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
