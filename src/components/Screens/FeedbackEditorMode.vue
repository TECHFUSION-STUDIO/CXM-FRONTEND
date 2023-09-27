<template>
  <div class="row" style="overflow-y: hidden; height: 100vh">
    <div class="col-md-3 bg-primary">
      <div>
        <div class="bg-info p-1 ms-auto me-auto" role="alert">
          <span class="badge text-bg-light m-1"
            >Sorted {{ orderBy }} by {{ orderByAsc ? "Ascending" : "Descending" }}
          </span>

          <span class="badge text-bg-light m-1"
            >surveyId = 1
            <i class="fa-regular fa-circle-xmark ms-1 zoombadge"></i>
          </span>
        </div>
      </div>
      <div class="card">
        <p class="text-muted mb-0">Feedback Id :</p>
        <p class="pt-0">
          Feedback NAme<br />
          Type: RAW Status : OPEN
        </p>
      </div>
    </div>

    <div class="col-md-9" style="overflow-y: scroll">
      <div></div>
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
  border: 3px solid #22d2a0;
  box-shadow: 5px -5px 0 -1px #ffffff, 5px -5px #22d2a0;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.025);
}
</style>
