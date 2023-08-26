<template>
  <div>
    <!-- Modal -->
    <div
      class="modal"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      :style="{
        display: displayModal ? 'block' : 'none',
        'background-color': 'rgba(0, 0, 0, 0.175)',
      }"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Filter</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="displayModal = false"
            ></button>
          </div>
          <div class="modal-body">
            <div class="accordion-body row">
              <div class="col-md-4">
                <label class="form-label">Select Field</label>
                <select
                  class="form-select"
                  aria-label=".form-select-sm example"
                  v-model="filterField"
                >
                  <option v-for="item in store.feedbackProp" :key="item" :value="item">
                    {{ item }}
                  </option>
                </select>
              </div>

              <div class="col-md-4">
                <label class="form-label">Filter Operation</label>

                <select
                  class="form-select"
                  aria-label=".form-select-sm example"
                  v-model="filterOperation"
                >
                  <option v-for="item in store.filterOperation" :key="item" :value="item">
                    {{ item }}
                  </option>
                </select>
              </div>

              <div class="col-md-4">
                <label class="form-label">Filter value</label>

                <input type="text" class="form-control" v-model="filterValue" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="displayModal = false"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="addFilter()">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "./store";
export default {
  name: "FilterDialog",
  props: ["display"],
  data() {
    return {
      displayModal: this.display,
      filterField: "",
      filterValue: "",
      filterOperation: "",
      store,
    };
  },
  updated() {
    console.log("props :: " + this.display);
    console.log("aaaa :: " + this.displayModal);
  },
  mounted() {
    this.displayModal = this.display;
  },
  watch: {
    display: function () {
      this.displayModal = true;
    },
  },
  methods: {
    addFilter() {
      console.log("AddFilter emitting");
      this.displayModal = false;
      this.$emit(
        "filter-selected",
        this.filterField + "@" + this.filterOperation + "@" + this.filterValue
      );
    },
  },
};
</script>

<style scoped></style>
