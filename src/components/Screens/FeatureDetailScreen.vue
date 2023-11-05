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

          <p class="text-muted">
            <i>Created on {{ featureDetail.addedDateTime }}</i>
          </p>
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
              v-model="featureDetail.featureStatus"
              @change="updateFeature()"
            >
              <option v-for="item in constants.FEATURE_STATUS" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Board</label>

            <multiselect
              class="form-control p-0 border border-0"
              :options="boardList.options"
              v-model="boardList.value"
              placeholder="Select one"
              label="boardName"
              track-by="id"
              selectLabel=""
              deselectLabel=""
              @select="updateBoard('add')"
              @remove="updateBoard('remove')"
            ></multiselect>
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Category</label>
            <multiselect
              class="form-control p-0 border border-0"
              :options="categoryList.options"
              v-model="categoryList.value"
              placeholder="Select one"
              label="categoryName"
              track-by="id"
              selectLabel=""
              deselectLabel=""
              @select="updateCatgeory('add')"
              @remove="updateCatgeory('remove')"
            ></multiselect>
          </div>
        </div>

        <div class="col-md-4">
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Impact</label>
            <select
              class="form-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              v-model="featureDetail.featureImpact"
              @change="updateFeature()"
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
              v-model="featureDetail.featureEffort"
              @change="updateFeature()"
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
              v-model="featureDetail.featurePriority"
              @change="updateFeature()"
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
            <multiselect
              class="form-control p-0 border border-0"
              :options="questionDropDown.options"
              v-model="questionDropDown.value"
              placeholder="Select one"
              label="surveyQuestion"
              track-by="id"
            ></multiselect>
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
      <h6>Linked Feedback Responses</h6>
      <FeedbackTabular
        class="mt-3"
        :calledFrom="'featureId'"
        :criteria="{ key: 'loggerId', value: id, operation: 'EQUAL' }"
      />
    </div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <h6>Impacted Customer</h6>

      <ImpactedCustomer type="feature" />
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
import ImpactedCustomer from "./tables/ImpactedCustomer.vue";
import { constants } from "./constants";
import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";
import Multiselect from "vue-multiselect";

export default {
  name: "FeatureDetailScreen",
  components: {
    FeedbackTabular,
    FeatureComments,
    FeatureTag,
    ImpactedCustomer,
    Multiselect,
  },
  data() {
    return {
      questionDropDown: {
        options: [],
        value: {},
        isLoading: false,
      },

      categoryList: {
        options: [],
        value: {},
      },

      boardList: {
        options: [],
        value: {},
      },

      featureDetail: {},
      id: this.$route.params.featureId,
      constants,
    };
  },
  mounted() {
    this.fetchFeatureDetail();
    this.fetchAllCategory();
    this.fetchAllBoard();
  },
  updated() {
    console.log(this.featureDetail);
  },
  methods: {
    updateCatgeory(type) {
      console.log("id");
      if (type == "add") {
        this.featureDetail.featureCategory = this.categoryList.value;
      } else if (type == "remove") {
        this.featureDetail.featureCategory = null;
      }
      this.updateFeature();
    },
    updateBoard(type) {
      if (type == "add") {
        this.featureDetail.boardId = this.boardList.value;
      } else if (type == "remove") {
        this.featureDetail.boardId = null;
      }
      this.updateFeature();
    },
    updateFeature() {
      axiosConn
        .post("/updatefeature", {
          id: this.featureDetail.id,
          businessId: this.featureDetail.businessId,
          projectId: this.featureDetail.projectId,
          boardId:
            this.featureDetail.boardId != null && this.featureDetail.boardId != ""
              ? this.featureDetail.boardId.id
              : null,
          assigneeId: this.featureDetail.assigneeId,
          reporterId: this.featureDetail.reporterId,
          createdBy: this.featureDetail.createdBy,
          featureName: this.featureDetail.featureName,
          featureDescription: this.featureDetail.featureDescription,
          featureStatus: this.featureDetail.featureStatus,
          featureCategory:
            this.featureDetail.featureCategory != null &&
            this.featureDetail.featureCategory != ""
              ? this.featureDetail.featureCategory.id
              : null,
          featurePriority: this.featureDetail.featurePriority,
          featureImpact: this.featureDetail.featureImpact,
          featureEffort: this.featureDetail.featureEffort,
          lastModified: this.featureDetail.lastModified,
          addedDateTime: this.featureDetail.addedDateTime,
        })
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            toast: true,
            text: "Feature updated successfully",
            icon: "success",
            position: "top",
            width: 300,
            showConfirmButton: false,
            timer: 3000,
            background: "white",
          });
          this.fetchFeatureDetail();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchAllCategory() {
      axiosConn
        .get("/getCategory?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.categoryList.options = res.data;
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
          this.boardList.options = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchFeatureDetail() {
      axiosConn
        .get("/getFeature?featureId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.featureDetail = res.data;
          this.boardList.value = res.data.boardId;
          this.categoryList.value = res.data.featureCategory;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
