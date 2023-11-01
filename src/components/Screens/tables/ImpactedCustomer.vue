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
            <td>Impacted Ph</td>
            <td class="text-center">Impacted Email</td>
            <td class="text-center">Impacted Name</td>
            <td class="text-center">Customer Type</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in impactList" :key="index">
            <td>{{ item.ph }}</td>
            <td class="text-center">{{ item.email }}</td>
            <td class="text-center">{{ item.name }}</td>
            <td class="text-center">
              <router-link
                :to="'/loggerdetail/' + item.id"
                style="text-decoration: none"
                >{{ item.type }}</router-link
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
  props: ["type"],
  data() {
    return {
      impactList: [],
      id:
        this.type == "feature"
          ? this.$route.params.featureId
          : this.$route.params.boardId,
    };
  },
  mounted() {
    this.fetchImpactedCustomer();
  },
  methods: {
    fetchImpactedCustomer() {
      axiosConn
        .get(
          "/getImpactedCustomer?businessId=1&projectId=1&" +
            (this.type == "feature" ? "featureId=" + this.id : "boardId=" + this.id)
        )
        .then((res) => {
          console.log(res.data);
          this.impactList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
