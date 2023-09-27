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
            <div class="text-muted">Vendor Id : 1</div>
            <div class="ms-auto">
              <button
                class="btn btn-primary btn-sm"
                @click="this.$router.push('/editvendor/' + id)"
              >
                Edit
              </button>
            </div>
          </div>
          <h5>MMT PVT LTD</h5>

          <div class="row">
            <div class="col-auto">
              <p>Status : A</p>
            </div>

            <div class="col-auto"><p>Total Feedback : 6476589</p></div>
            <div class="col-auto"><p>Last used at : 6476589</p></div>
            <div class="col-auto">
              <p>Added on : 2023-09-28</p>
            </div>
          </div>
          <p v-html="vendorDesc"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  namme: "VendorDetailScreen",
  data() {
    return {
      id: this.$route.params.id,
      vendorDesc: "Hdibkdhihb  hlf hfol <a>nkvhnvk</a>",
    };
  },
};
</script>

<style lang="scss" scoped></style>
