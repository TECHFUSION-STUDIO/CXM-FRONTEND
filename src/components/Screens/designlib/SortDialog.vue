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
                <select class="form-select" aria-label=".form-select-sm example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">Select Order</label>

                <select class="form-select" aria-label=".form-select-sm example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
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
            <button type="button" class="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortDialog",
  props: ["display"],
  data() {
    return {
      displayModal: this.display,
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
};
</script>

<style scoped></style>
