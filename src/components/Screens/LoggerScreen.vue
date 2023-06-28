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

        <!-- <div class="text-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link">Prev</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>

              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div> -->
      </div>
    </div>

    <div class="q-pa-md">
      <q-table
        flat
        bordered
        ref="tableRef"
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        :selected="selected"
        @selection="onSelection"
      />

      <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoggerScreen",
};
</script>

<style lang="scss" scoped></style>
