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
            Showing Feature Detail for <i>{{ featureDetail.name }}</i>
          </li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row">
        <div class="col-md-6">
          <button class="btn-sm btn btn-warning w-100 my-1">Previous</button>
        </div>

        <div class="col-md-6">
          <button class="btn-sm btn btn-warning w-100 my-1">Next</button>
        </div>
      </div>
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
          <h5>{{ featureDetail.name }}</h5>
          <p>
            {{ featureDetail.description }}
          </p>

          <p class="text-muted">
            <i>Created on {{ featureDetail.createdAt }}</i>
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
              v-model="featureDetail.status"
              @change="updateFeature()"
            >
              <option v-for="item in constants.FEATURE_STATUS" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Category</label>
            <multiselect
              class="form-control p-0 border border-0"
              v-model="categoryList.value"
              :options="categoryList.options"
              placeholder=""
              label="name"
              track-by="id"
              @select="updateCategory('add')"
              @remove="updateCategory('remove')"
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
              v-model="featureDetail.impact"
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
              v-model="featureDetail.effort"
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
              v-model="featureDetail.priority"
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
            <label class="input-group-text" for="inputGroupSelect01">Reporter</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="basic-addon1"
              disabled
              :value="featureDetail.reporterId"
            />
          </div>

          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Creator</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="basic-addon1"
              :value="featureDetail.createdBy"
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
    <div class="bg-white shadow shadow-sm mt-3 p-3" v-if="false">
      <h6>Parent of</h6>
      <table class="table table-bordered mt-3">
        <thead>
          <tr>
            <th class="text-center">Id</th>
            <th class="text-center">Feature Name</th>
            <th class="text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Id</td>
            <td>Feature Name</td>
            <td class="text-center">Status</td>
          </tr>
          <tr>
            <td>Id</td>
            <td>Feature Name</td>
            <td class="text-center">Status</td>
          </tr>
        </tbody>
      </table>
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
      categoryList: {
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
    this.fetchCategory();
  },

  methods: {
    updateCategory(type) {
      console.log(this.categoryList);
      if (type == "add") {
        this.featureDetail.category = this.categoryList.value.id;
      } else if (type == "remove") {
        this.featureDetail.category = null;
      }
      this.updateFeature();
    },

    updateFeature() {
      axiosConn
        .post("/updateFeature", this.featureDetail)
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
    fetchCategory() {
      axiosConn
        .get("/findCategory?businessId=1&workspaceId=1")
        .then((res) => {
          console.log(res.data);
          this.categoryList.options = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchCategoryById(id) {
      axiosConn
        .get("/findCategory?businessId=1&workspaceId=1&id=" + id)
        .then((res) => {
          console.log(res.data);
          this.categoryList.value = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchFeatureDetail() {
      axiosConn
        .get("/findFeature?workspaceId=1&businessId=1&id=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.featureDetail = res.data.data[0];
          this.categoryList.value = res.data.featureCategory;
          this.fetchCategoryById(this.featureDetail.category);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
