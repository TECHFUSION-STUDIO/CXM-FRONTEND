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
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Sort</h1>
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
              <div class="col-md-6">
                <label class="form-label">Select Field</label>
                <select
                  class="form-select"
                  aria-label=".form-select-sm example"
                  v-model="sortField"
                >
                  <option
                    v-for="item in store.feedbackProp"
                    :key="item.key"
                    :value="item.key"
                  >
                    {{ item.value }}
                  </option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">Select Order</label>

                <select
                  class="form-select"
                  aria-label=".form-select-sm example"
                  v-model="sortOrder"
                >
                  <option value="ASC">Low to High</option>
                  <option value="DESC">High to Low</option>
                </select>
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
            <button type="button" class="btn btn-primary" @click="addSort()">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "./store";

export default {
  name: "SortDialog",
  props: ["display"],
  data() {
    return {
      displayModal: this.display,
      sortField: "",
      sortOrder: "",
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
    addSort() {
      console.log("AddSort emitting");
      this.displayModal = false;
      this.$emit("sort-selected", this.sortField + "@" + this.sortOrder);
    },
  },
};
</script>

<style scoped></style>
