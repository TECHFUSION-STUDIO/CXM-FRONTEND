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

    <div>
      <model-select
        :options="options"
        v-model="item"
        placeholder="placeholder text"
        @searchchange="printSearchText"
        class="form-control border border-2 border-info"
      >
      </model-select>
    </div>
  </div>
</template>

<script>
import { ModelSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  name: "LoggerScreen",
  components: {
    ModelSelect,
  },
  data() {
    return {
      options: [
        { value: "91", text: "aa" + " - " + "1" },

        { value: "24", text: "more a" + " - " + "9" },
      ],
      item: {
        value: "",
        text: "",
      },
      searchText: "",
    };
  },
  methods: {
    reset() {
      this.item = {};
    },
    selectOption() {
      // select option from parent component
      this.item = this.options[1];
    },
    printSearchText(searchText) {
      this.searchText = searchText;
    },
  },
};
</script>

<style lang="scss" scoped></style>
