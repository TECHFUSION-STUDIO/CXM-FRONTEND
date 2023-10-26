<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row w-100">
        <div class="col-md-6">
          <button
            class="btn btn-primary mt-2"
            @click="this.$router.push('/createimpactedcustomer')"
          >
            Add Impacted Customer
          </button>
        </div>
        <div class="col-md-6">
          <div class="input-group mt-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search Impacted Customers"
              aria-label="Search"
            />
            <button class="btn btn-primary">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="table-responsive-md mt-3">
        <table class="table table-hover table-bordered mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td>Impacted Ph</td>
              <td class="text-center">Impacted Email</td>
              <td class="text-center">Customer Type</td>
              <td class="text-center">Data Detail</td>

              <td class="text-center">Feedback Id</td>
              <td class="text-center">Is Notified?</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9330142778</td>
              <td class="text-center">avi.kumarsinha@lumen.com</td>
              <td class="text-center">
                <router-link :to="'/feedbackdetail/' + 1" style="text-decoration: none"
                  >Logger / Additional</router-link
                >
              </td>
              <td class="text-center">orderId:8584803849 | mob:985778475</td>
              <td class="text-center">
                <router-link :to="'/feedbackdetail/' + 1" style="text-decoration: none"
                  >1
                </router-link>
              </td>
              <td class="text-center">Yes</td>
            </tr>
            <tr>
              <td class="text-center" colspan="7"><i>No Data Found</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImpactedCustomer",
};
</script>

<style lang="scss" scoped></style>
