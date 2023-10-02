<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">Showing All Vendors</nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3 table-responsive">
      <div class="row w-100">
        <div class="col-md-3">
          <button
            class="btn btn-primary mt-2"
            @click="this.$router.push('/createvendor')"
          >
            Add Vendor
          </button>
        </div>
        <div class="col-md-6">
          <div class="input-group mt-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search Vendor"
              aria-label="Search"
            />
            <button class="btn btn-primary">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>

      <table class="table table-hover table-bordered mt-3">
        <thead>
          <tr class="bg-light">
            <td>Vendor Org</td>
            <td>Vendor Email</td>
            <td>Vendor Status</td>
            <td>Vendor Identification</td>
            <td>Added Date</td>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="item in vendorList" :key="item.id">
            <td>
              <a
                id="feedbackTitle"
                @click="this.$router.push('/vendordetail/' + item.id)"
                >{{ item.vendorOrgName }}</a
              >
            </td>
            <td>{{ item.vendorEmail }}</td>
            <td>
              {{ item.vendorStatus }}
            </td>

            <td>{{ item.vendorIdentification }}</td>
            <td>{{ item.addedDateTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
export default {
  name: "VendorScreen",
  data() {
    return {
      vendorList: [],
    };
  },
  mounted() {
    this.getAllVendors();
  },
  methods: {
    getAllVendors() {
      axiosConn
        .get("/getVendor?businessId=1")
        .then((res) => {
          console.log(res);
          this.vendorList = res.data;
          console.log(this.vendorList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
