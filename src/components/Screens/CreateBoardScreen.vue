<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <label for="boardName" class="form-label">Board Name</label>
            <input type="text" class="form-control" id="boardName" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="boardDesc" class="form-label">Board Description</label>
            <textarea class="form-control" id="boardDesc" rows="3"></textarea>
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="boardCapacity" class="form-label">Board Capacity</label>
            <input type="number" class="form-control" id="boardCapacity" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="mb-3">
            <label for="boardStatus" class="form-label">Board Visibility</label>
            <select id="boardStatus" class="form-select">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div class="col-md-12">
          <div class="mb-3">
            <label for="boardStatus" class="form-label">Board Status</label>
            <select id="boardStatus" class="form-select">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div class="col-md-12">
          <div class="text-center">
            <button class="btn btn-outline-danger m-2 w-25">Reset</button>
            <button class="btn btn-outline-success m-2 w-25">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateBoardScreen",
};
</script>

<style lang="scss" scoped></style>
