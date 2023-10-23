<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        Showing Coupons <i>for project id BMRC-9877</i>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row w-100">
        <div class="col-md-3">
          <button class="btn btn-primary mt-2" @click="this.$router.push('/createboard')">
            Create Coupon
          </button>
        </div>
        <div class="col-md-6">
          <div class="input-group mt-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search Board"
              aria-label="Search"
            />
            <button class="btn btn-primary">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="table-responsive-md mt-3">
        <table class="table table-hover table-bordered mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Coupon Name</td>
              <!-- <td>Description</td> -->
              <td class="text-center">Status</td>
              <td class="text-center">Visibility</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in boardList" :key="item.id">
              <td style="width: 40%">
                <a
                  id="feedbackTitle"
                  @click="this.$router.push('/boarddetail/' + item.id)"
                  >{{ item.boardName }}</a
                >
              </td>
              <!-- <td>{{ item.boardDescription }}</td> -->
              <td class="text-center">
                <span class="badge text-bg-success">{{ item.status }}</span>
              </td>
              <td class="text-center">
                <span class="badge text-bg-success">{{ item.visibility }}</span>
              </td>
            </tr>
            <tr v-if="boardList.length == 0">
              <td class="text-center" colspan="3"><i>No Data Found</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axiosConn from "@/axioscon";

export default {
  name: "CouponScreen",
  data() {
    return {
      boardList: [],
      axiosConn,
    };
  },
};
</script>

<style lang="scss" scoped></style>
