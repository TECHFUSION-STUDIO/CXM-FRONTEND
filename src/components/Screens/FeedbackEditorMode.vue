<template>
  <div class="container-fluid">
    <div class="row" style="overflow-y: auto; height: 100vh">
      <div class="col-md-3 p-0 shadow shadow-lg" style="background-color: #dee2e6">
        <div>
          <div class="p-1 w-100 bg-info" role="alert">
            <span class="badge text-bg-light m-1"
              >Sorted {{ orderBy }} by {{ orderByAsc ? "Ascending" : "Descending" }}
            </span>

            <span class="badge text-bg-light m-1"
              >surveyId = 1
              <i class="fa-regular fa-circle-xmark ms-1 zoombadge"></i>
            </span>
          </div>
        </div>
        <div class="mt-2">
          <p class="ms-3 mb-1"><i>Upcoming Feeds :</i></p>
          <div class="card mt-2">
            <p class="text-muted mb-0">Feedback Id :</p>
            <p class="pt-0">
              Feedback NAme<br />
              Type: RAW Status : OPEN
            </p>
          </div>
        </div>
        <hr />
        <div class="mt-2">
          <p class="ms-3 mb-1"><i>Skipped Feeds :</i></p>
          <div class="card mt-2">
            <p class="text-muted mb-0">Feedback Id :</p>
            <p class="pt-0">
              Feedback NAme<br />
              Type: RAW Status : OPEN
            </p>
          </div>
        </div>

        <hr />
        <div class="mt-2">
          <p class="ms-3 mb-1"><i>Completed Feeds :</i></p>
          <div class="card mt-2">
            <p class="text-muted mb-0">Feedback Id :</p>
            <p class="pt-0">
              Feedback NAme<br />
              Type: RAW Status : OPEN
            </p>
          </div>
        </div>

        <hr />
        <div class="mt-2">
          <div class="row"></div>
        </div>
      </div>

      <div class="col-md-9 p-2" style="overflow-y: scroll">
        <div class="alert alert-primary" role="alert">Feedback Id : 1</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackEditorMode",
};
</script>

<style lang="css" scoped>
.card {
  background-color: #ffffff;
  display: block;
  /* width: 300px; */
  min-height: 90px;
  cursor: pointer;
  padding: 5px;
  margin: 15px;
  border: 1px solid #0262b9;
  box-shadow: 4px -4px 0 -1px #ffffff, 4px -4px #0262b9;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.01);
  background-color: #e0f3ff;
}
</style>
