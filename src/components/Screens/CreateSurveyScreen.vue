<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Survey Name</label>
            <input type="text" class="form-control" id="categoryName" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryDesc" class="form-label">Survey Description</label>
            <textarea class="form-control" id="categoryDesc" rows="3"></textarea>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Survey Start Date</label>
            <input type="datetime-local" class="form-control" id="categoryName" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="categoryName" class="form-label">Survey End Date</label>
            <input type="datetime-local" class="form-control" id="categoryName" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="categoryStatus" class="form-label">Survey Status</label>
            <select id="categoryStatus" class="form-select">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        <div class="col-md-12">
          <div class="text-center mt-3 mb-3">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <button
              class="btn btn-outline-success m-2 w-25"
              @click="this.$router.push('/editsurveys')"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateSurveyScreen",
};
</script>

<style lang="scss" scoped></style>
