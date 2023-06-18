<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <p class="text-muted">Survey Id : 8798</p>
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
            <button class="btn btn-outline-primary m-2 w-25">Edit</button>
            <button class="btn btn-outline-success m-2 w-25">Update</button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <h6>Survey Questions</h6>
      <button
        class="btn btn-primary"
        @click="this.$router.push('/surveys/3/createquestion')"
      >
        Add Question
      </button>
      <div class="table-responsive-md mt-2">
        <table class="table table-hover mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Question</td>
              <td>Question Type</td>
              <td>Question Category</td>
              <td>Mandatory</td>
              <td>Status</td>
              <td>Created Time</td>
              <td>Last Updated Time</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>vsxvb x v</td>
              <td>vs</td>
              <td>vs</td>
              <td>vds</td>
              <td>vds</td>
              <td>vds</td>
              <td>vds</td>
              <td>
                <button
                  class="btn btn-primary btn-sm me-1"
                  @click="this.$router.push('/surveys/3/editquestion')"
                >
                  Edit</button
                ><button class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditSurveyScreen",
};
</script>

<style lang="scss" scoped></style>
