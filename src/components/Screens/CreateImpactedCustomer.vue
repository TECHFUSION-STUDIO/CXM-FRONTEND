<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/category')">Impacted Customer </a>
          </li>

          <li class="breadcrumb-item active" aria-current="page">
            Create Impacted Customer
          </li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Customer Name</label>
            <input
              type="text"
              class="form-control"
              id="categoryName"
              v-model="customerName"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Customer Email</label>
            <input
              type="text"
              class="form-control"
              id="categoryName"
              v-model="customerEmail"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Customer Contact</label>
            <input
              type="text"
              class="form-control"
              id="categoryName"
              v-model="customerContact"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryDesc" class="form-label">Additional Detail</label>
            <textarea
              class="form-control"
              id="categoryDesc"
              rows="3"
              v-model="customerDetail"
            ></textarea>
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Associate Feature Id </label>
            <multiselect
              tag-placeholder="Add this as new tag"
              placeholder="Search or add a tag"
              label="featureName"
              track-by="id"
              :multiple="true"
              :taggable="true"
              :options="featureList"
              v-model="featureValue"
            ></multiselect>
          </div>
        </div>
        <div class="col-md-12">
          <div class="text-center mt-3 mb-3">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <button
              class="btn btn-outline-success m-2 w-25"
              @click="createImpactedCustomer()"
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
import Multiselect from "vue-multiselect";
import axiosConn from "@/axioscon";

export default {
  name: "CreateImpactedCustomer",
  components: {
    Multiselect,
  },
  data() {
    return {
      customerName: "",
      customerEmail: "",
      customerContact: "",
      customerDetail: "",
      featureList: [],
      featureValue: [],
    };
  },
  mounted() {
    this.fetchAllFeature();
  },
  methods: {
    fetchAllFeature() {
      axiosConn
        .post("/getFeature", {
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
    createImpactedCustomer() {
      var featureIds = this.featureValue.map((a) => a.id);
      axiosConn
        .post("/createImpactedCustomer", [
          {
            businessId: 1,
            projectId: 1,
            customerName: this.customerName,
            customerEmail: this.customerEmail,
            customerContact: this.customerContact,
            customerDetail: this.customerDetail,
            featureId: featureIds,
          },
        ])
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
