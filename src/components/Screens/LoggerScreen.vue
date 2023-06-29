<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row w-100">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="input-group mt-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search Category"
              aria-label="Search"
            />
            <button class="btn btn-success">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="table-responsive-md mt-3">
        <table class="table table-hover mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Logger Name</td>
              <td>Email</td>
              <td>Contact</td>
              <td>Logged at</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                id="feedbackTitle"
                style="width: 40%"
                @click="this.$router.push('/loggerdetail')"
              >
                vsxvb x v
              </td>
              <td>vs</td>
              <td>vs</td>
              <td>vds</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoggerScreen",

  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
