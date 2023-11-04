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

          <li class="breadcrumb-item active" aria-current="page">
            Showing Vendor Detail <i>for vendor id 1</i>
          </li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-2">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex mb-3">
            <div class="text-muted">Vendor Id : {{ vendorData.id }}</div>
            <div class="ms-auto">
              <button
                class="btn btn-primary btn-sm"
                @click="this.$router.push('/editvendor/' + id)"
              >
                Edit
              </button>
            </div>
          </div>
          <h5>{{ vendorData.vendorOrgName }}</h5>

          <p v-html="vendorDesc"></p>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">Email</span>
            <input
              type="email"
              class="form-control"
              disabled
              :value="vendorData.vendorEmail"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">Owener NAme</span>
            <input
              type="text"
              class="form-control"
              disabled
              :value="vendorData.vendorOwnerName"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">Identification</span>
            <input
              type="text"
              class="form-control"
              disabled
              :value="vendorData.vendorIdentification"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">Status</span>
            <input
              type="text"
              class="form-control"
              disabled
              :value="vendorData.vendorStatus"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1"> Contact 1</span>
            <input
              type="text"
              class="form-control"
              disabled
              :value="vendorData.vendorContact1"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1"> Contact 2</span>
            <input
              type="text"
              class="form-control"
              disabled
              :value="vendorData.vendorContact2"
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
              :value="vendorData.addedDateTime"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">Last update on</span>
            <input
              type="datetime-local"
              class="form-control"
              disabled
              :value="vendorData.lastUpdatedDateTime"
            />
          </div>
        </div>

        <div class="col-md-12">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text">Address</span>
            <textarea
              class="form-control"
              aria-label="With textarea"
              rows="5"
              :value="this.vendorAddress"
              disabled
            >
            </textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 mb-3 p-3 table-responsive">
      <div class="input-group mt-3 mx-auto w-75">
        <input
          class="form-control"
          type="search"
          placeholder="Search Members"
          aria-label="Search"
        />
        <button class="btn btn-primary">
          <i class="fa-brands fa-searchengin"></i>
        </button>
      </div>

      <table class="table table-hover table-bordered mt-3">
        <thead>
          <tr class="bg-light">
            <td>Email</td>
            <td>Name</td>
            <td>Role</td>
            <td>Status</td>
            <td>Added at</td>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="item in memberList" :key="item.id">
            <td>
              <a
                id="feedbackTitle"
                @click="this.$router.push('/projectmemberdetail/' + item.id)"
                >{{ item.teamMemberEmail }}</a
              >
            </td>
            <td>{{ item.teamMemberName }}</td>
            <td>
              {{ item.teamMemberProjectRole }}
            </td>
            <td>
              {{ item.teamMemberStatus }}
            </td>
            <td>{{ item.addedDateTime }}</td>
          </tr>
          <tr v-if="memberList.length == 0">
            <td class="text-center" colspan="5"><i>No Data Found</i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";
export default {
  namme: "VendorDetailScreen",
  data() {
    return {
      id: this.$route.params.id,
      vendorDesc: "Hdibkdhihb  hlf hfol <a>nkvhnvk</a>",
      vendorData: {},
      vendorAddress: "",
      memberList: [],
    };
  },
  mounted() {
    this.getVendors();
    this.fetchAllMember();
  },
  methods: {
    fetchAllMember() {
      axiosConn
        .get("/getTeamMember?businessId=1&vendorId=" + this.id)
        .then((res) => {
          console.log(res);
          this.memberList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getVendors() {
      axiosConn
        .get("/getVendor?vendorId=" + this.id)
        .then((res) => {
          console.log(res);
          this.vendorData = res.data;
          this.vendorAddress =
            res.data.vendorAddress +
            "\n" +
            res.data.vendorCity +
            "-" +
            res.data.vendorZip +
            "\n" +
            res.data.vendorState +
            "\n" +
            res.data.vendorCountry;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
