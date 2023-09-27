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
            <td>Vendor Name</td>
            <td>Total Member</td>
            <!-- <td>Contact</td> -->
            <td>Total Projects</td>
            <td>Added Date</td>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="item in memberList" :key="item.id">
            <td>
              <a
                id="feedbackTitle"
                @click="this.$router.push('/memberdetail/' + item.id)"
                >{{ item.teamMemberEmail }}</a
              >
            </td>
            <td>{{ item.teamMemberName }}</td>

            <!-- <td>{{ item.teamMemberContact }}</td> -->
            <td>
              {{ item.teamMemberRole }}
            </td>

            <td>{{ item.addedDateTime }}</td>
          </tr>

          <tr>
            <td>
              <a id="feedbackTitle" @click="this.$router.push('/vendordetail/' + 1)"
                >abc</a
              >
            </td>
            <td>abc</td>

            <!-- <td>{{ item.teamMemberContact }}</td> -->
            <td>abc</td>

            <td>abc</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "VendorScreen",
};
</script>

<style lang="scss" scoped></style>
