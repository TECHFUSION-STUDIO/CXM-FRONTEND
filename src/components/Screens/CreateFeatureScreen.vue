<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2" v-if="type != 'offcanvas'">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/feature')">Feature </a>
          </li>

          <li class="breadcrumb-item active" aria-current="page">Create New Feature</li>
        </ol>
      </nav>
    </div>

    <div :class="type != 'offcanvas' ? 'bg-white shadow shadow-sm mt-3 p-3' : ''">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Feature Name</label>
            <input
              type="test"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="featureName"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Feature Description</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="featureDescription"
            ></textarea>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Status</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="featureStatus"
            >
              <option selected></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Category</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="featureCategory"
            >
              <option selected></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Impact</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="featureImpact"
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
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Effort</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="featureEffort"
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
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Priority</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="featurePriority"
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
        <div class="col-md-12" v-if="caller != 'survey'">
          <div class="mb-3">
            <label class="form-label" for="ajax">Survey Id</label>
            <multiselect
              v-model="surveyList.value"
              id="ajax"
              label="surveyFormName"
              track-by="id"
              placeholder="Type to search"
              open-direction="bottom"
              :options="surveyList.option"
              :searchable="true"
              :loading="surveyList.isLoading"
              :internal-search="false"
              :clear-on-select="true"
              :close-on-select="true"
              :options-limit="300"
              :limit="3"
              :max-height="600"
              :show-no-results="false"
              :hide-selected="false"
              @search-change="asyncFindSurvey"
            >
            </multiselect>
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label class="form-label" for="ajax">Select Parent</label>
            <multiselect
              v-model="featureList.value"
              id="ajax"
              label="featureName"
              track-by="id"
              placeholder="Type to search"
              open-direction="bottom"
              :options="featureList.option"
              :searchable="true"
              :loading="featureList.isLoading"
              :internal-search="false"
              :clear-on-select="true"
              :close-on-select="true"
              :options-limit="300"
              :limit="3"
              :max-height="600"
              :show-no-results="false"
              :hide-selected="false"
              @search-change="asyncFind"
            >
            </multiselect>
          </div>
        </div>

        <div class="col-md-12">
          <div class="text-end mt-3 mb-3">
            <button
              class="btn btn-sm btn-primary m-2 w-25"
              @click="createFeature()"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";
import axiosConn from "@/axioscon";
import Multiselect from "vue-multiselect";

export default {
  name: "CreateFeatureScreen",
  props: ["type", "caller"],
  components: {
    Multiselect,
  },
  data() {
    return {
      featureName: "",
      featureDescription: "",
      featureStatus: "",
      featureCategory: "",
      featureTags: "",
      featureImpact: "",
      featureEffort: "",
      featurePriority: "",
      featureList: {
        value: [],
        option: [],
        isLoading: false,
      },
      surveyList: {
        value: [],
        option: [],
        isLoading: false,
      },
    };
  },
  methods: {
    asyncFind(query) {
      console.log(query);
      this.featureList.isLoading = true;
      axiosConn
        .get("/getFeature?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.featureList.option = res.data;
          this.featureList.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    asyncFindSurvey(query) {
      console.log(query);
      this.surveyList.isLoading = true;
      axiosConn
        .get("/getSurveyForm?businessId=1&projectId=1")
        .then((res) => {
          console.log(res.data);
          this.surveyList.option = res.data;
          this.surveyList.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    createFeature() {
      axiosConn
        .post("/createFeature", {
          businessId: 1,
          projectId: 1,

          featureName: this.featureName,
          featureDescription: this.featureDescription,
          featureStatus: this.featureCategory,
          featureCategory: this.featureCategory,
          featurePriority: this.featurePriority,
          featureImpact: this.featureImpact,
          featureEffort: this.featureEffort,
          parentId: this.featureList.value.id,
          surveyFormId:
            this.caller == "survey"
              ? this.$route.params.surveyId
              : this.surveyList.value.id,
        })
        .then((res) => {
          console.log(res.data);

          Swal.fire({
            toast: true,
            animation: false,
            text: "Feature added successfully",
            icon: "success",
            position: "top",
            width: 300,
            showConfirmButton: false,
            timer: 3000,
            background: "white",
          });

          this.$emit("success", true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
