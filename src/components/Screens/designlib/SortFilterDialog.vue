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
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="displayModal = false"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="displayModal = false"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortFilterDialog",
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
        display: function() {
          this.displayModal = true
        }
      },
};
</script>

<style scoped></style>
