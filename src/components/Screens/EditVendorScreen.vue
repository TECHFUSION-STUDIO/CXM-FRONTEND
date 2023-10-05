<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <a @click="this.$router.go(-1)" title="Go to Previous Page"
            ><i class="fa-solid fa-arrow-left me-2"></i>
          </a>
          <li class="breadcrumb-item">
            <a @click="this.$router.push('/vendor')">Vendor </a>
          </li>

          <li class="breadcrumb-item active" aria-current="page">Edit Vendor</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row mt-2">
        <div class="col-md-12">
          <p class="text-muted">Vendor Id : {{ vendorData.id }}</p>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Vendor Organization Name</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="vendorData.vendorOrgName"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Vendor Owner Name</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="vendorData.vendorOwnerName"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Vendor Email</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="vendorData.vendorEmail"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Vendor Identification</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="vendorData.vendorIdentification"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Vendor Contact1</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="vendorData.vendorContact1"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Vendor Contact 2</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="vendorData.vendorContact2"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Vendor Address</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="vendorData.vendorAddress"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Vendor City</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="vendorData.vendorCity"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Vendor State</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="vendorData.vendorState"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Vendor Zipcode</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="vendorData.vendorZip"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Vendor Country</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="vendorData.vendorCountry"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Vendor Status</label>
            <select class="form-select" v-model="vendorData.vendorStatus">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryDesc" class="form-label">Vendor Description</label>
            <textarea
              class="form-control"
              id="categoryDesc"
              rows="3"
              v-model="vendorData.vendorDescription"
            ></textarea>
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryDesc" class="form-label">Vendor Additional Detail</label>
            <textarea
              class="form-control"
              id="categoryDesc"
              rows="3"
              v-model="vendorData.vendorAdditionalDetails"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="text-center mt-3 mb-3">
        <button class="btn btn-outline-danger m-2 w-25">Reset</button>
        <button class="btn btn-outline-success m-2 w-25" @click="updateVendor()">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
export default {
  name: "EditVendorScreen",
  data() {
    return {
      vendorData: {},
      id: this.$route.params.id,

      axiosConn,
    };
  },
  mounted() {
    this.getVendors();
  },
  methods: {
    getVendors() {
      axiosConn
        .get("/getVendor?vendorId=" + this.id)
        .then((res) => {
          console.log(res);
          this.vendorData = res.data;
          console.log(this.vendorList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateVendor() {
      axiosConn
        .post("/updateVendor", this.vendorData)
        .then((res) => {
          console.log(res);
          this.vendorData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
