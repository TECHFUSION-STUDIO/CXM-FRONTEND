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

          <li class="breadcrumb-item active" aria-current="page">Create New Vendor</li>
        </ol>
      </nav>
    </div>
    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row mt-2">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Vendor Organization Name</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="vendorOrgName"
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
              v-model="vendorOwnerName"
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
              v-model="vendorEmail"
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
              v-model="vendorIdentification"
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
              v-model="vendorContact1"
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
              v-model="vendorContact2"
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
              v-model="vendorAddress"
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
              v-model="vendorCity"
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
              v-model="vendorState"
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
              v-model="vendorZip"
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
              v-model="vendorCountry"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Vendor Status</label>
            <select class="form-select" v-model="vendorStatus">
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
              v-model="vendorDescription"
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
              v-model="vendorAdditionalDetails"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="text-center mt-3 mb-3">
        <button class="btn btn-outline-danger m-2 w-25">Reset</button>
        <button class="btn btn-outline-success m-2 w-25" @click="addVendor()">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
export default {
  name: "CreateVendorScreen",
  data() {
    return {
      vendorOrgName: "",
      vendorOwnerName: "",
      vendorEmail: "",
      vendorContact1: "",
      vendorContact2: "",
      vendorIdentification: "",
      vendorAddress: "",
      vendorState: "",
      vendorCity: "",
      vendorZip: "",
      vendorCountry: "",
      vendorStatus: "",
      vendorAdditionalDetails: "",
      vendorDescription: "",
      axiosConn,
    };
  },
  methods: {
    addVendor() {
      axiosConn
        .post("/createVendor", {
          businessId: 1,
          vendorOrgName: this.vendorOrgName,
          vendorOwnerName: this.vendorOwnerName,
          vendorStatus: this.vendorStatus,
          vendorIdentification: this.vendorIdentification,
          vendorAddress: this.vendorAddress,
          vendorCity: this.vendorCity,
          vendorState: this.vendorState,
          vendorCountry: this.vendorCountry,
          vendorZip: this.vendorZip,
          vendorContact1: this.vendorContact1,
          vendorContact2: this.vendorContact2,
          vendorEmail: this.vendorEmail,
          vendorDescription: this.vendorDescription,
          vendorAdditionalDetails: this.vendorAdditionalDetails,
          vendorMembersCount: 0,
          addedDateTime: "",
          lastUpdatedDateTime: "",
        })
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
