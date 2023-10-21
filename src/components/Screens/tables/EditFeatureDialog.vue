<template>
  <div>
    <!-- Modal -->
    <div
      class="modal shadow"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      :style="{
        display: displayModal ? 'block' : 'none',
        'background-color': 'rgba(0, 0, 0, 0.175)',
      }"
    >
      <div class="modal-dialog modal-md modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Create Feature</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="disableCreateFeatureModal()"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Feature Name</label
                  >
                  <input type="test" class="form-control" id="exampleFormControlInput1" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label"
                    >Feature Description</label
                  >
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Status</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Category</label
                  >
                  <select class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Impact</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>

              <div class="col-md-4">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Effort</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Priority</label
                  >
                  <select class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="disableCreateFeatureModal()"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="createFeature()">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";
export default {
  name: "EditFeatureDialog",
  props: ["display"],
  data() {
    return {
      displayModal: this.display,
    };
  },
  watch: {
    display: function () {
      this.displayModal = true;
    },
  },
  methods: {
    disableCreateFeatureModal() {
      this.displayModal = false;
    },
    createFeature() {
      Swal.fire({
        toast: true,
        animation: false,
        text: "Feature added successfully",
        icon: "success",
        position: "top",
        width: 300,
        showConfirmButton: false,
        timer: 3000,
        background: "white",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
