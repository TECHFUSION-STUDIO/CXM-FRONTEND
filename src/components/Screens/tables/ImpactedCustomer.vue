<template>
  <div>
    <div class="row w-100">
      <div class="col-md-6">
        <button
          v-if="false"
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
            <th>Impacted Ph</th>
            <th class="text-center">Impacted Email</th>
            <th class="text-center">Impacted Name</th>
            <th class="text-center">Customer Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in impactList" :key="index">
            <td>{{ item.loggerContact }}</td>
            <td class="text-center">{{ item.loggerEmail }}</td>
            <td class="text-center">{{ item.loggerName }}</td>
            <td class="text-center">
              <router-link :to="'/loggerdetail/' + item.id" style="text-decoration: none"
                >Logger</router-link
              >
            </td>
          </tr>
          <tr v-if="impactList.length == 0">
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
  name: "ImpactedCustomer",
  data() {
    return {
      impactList: [],
      id: this.$route.params.featureId,
    };
  },
  mounted() {
    this.fetchImpactedCustomer();
  },
  methods: {
    fetchImpactedCustomer() {
      axiosConn
        .get("/findReporter?businessId=1&workspaceId=1&" + "featureId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.impactList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
