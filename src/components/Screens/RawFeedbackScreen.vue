<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        <ol class="breadcrumb p-0 m-0">
          <li class="breadcrumb-item"><a href="#">Survey </a></li>
          <li class="breadcrumb-item">Survey Name</li>
          <li class="breadcrumb-item active" aria-current="page">Raw Feedback</li>
        </ol>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div class="row">
        <div class="col">
          <button
            class="btn btn-outline-primary w-100"
            @click="this.$router.push('/surveys/3')"
          >
            Survey Detail
          </button>
        </div>
        <div class="col">
          <button class="btn btn-primary w-100">Raw Feedback Screen</button>
        </div>
        <div class="col">
          <button
            class="btn btn-outline-primary w-100"
            @click="this.$router.push('/surveys/3/filtered')"
          >
            Filtered Feedback Screen
          </button>
        </div>

        <div class="col">
          <button
            class="btn btn-outline-primary w-100"
            @click="this.$router.push('/surveys/3/bin')"
          >
            Bin Feedback Screen
          </button>
        </div>
        <div class="col">
          <button
            class="btn btn-outline-primary w-100"
            @click="this.$router.push('/surveys/3/done')"
          >
            Done Feedback Screen
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <div>
        <div class="input-group">
          <label class="input-group-text" for="inputGroupSelect01"
            >Select a Question</label
          >
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <!-- </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3"> -->
      <div class="mt-4">
        <div class="input-group">
          <select class="form-select" id="inputGroupSelect01">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select class="form-select" id="inputGroupSelect01">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <input class="form-control" type="text" />
          <button class="btn btn-primary">Add Filter</button>
        </div>
        <div class="mt-2">
          <span class="badge rounded-pill text-bg-info m-1"
            >STATUS = OPEN
            <span class="ms-1"><i class="fa-regular fa-circle-xmark"></i></span
          ></span>

          <span class="badge rounded-pill text-bg-info m-1"
            >CREATED TIME &gt; 16/02/2023
            <span class="ms-1"><i class="fa-regular fa-circle-xmark"></i></span
          ></span>
          <span class="badge rounded-pill text-bg-info m-1"
            >CREATED TIME &lt; 16/02/2023
            <span class="ms-1"><i class="fa-regular fa-circle-xmark"></i></span
          ></span>
        </div>
      </div>
      <div class="input-group mt-4">
        <input
          class="form-control"
          type="search"
          placeholder="Search Services"
          aria-label="Search"
        />
      </div>
      <div class="text-center mt-4">
        <button class="btn btn-outline-primary w-25">Search</button>
      </div>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3">
      <!-- <div class="d-flex flex-row-reverse">
        <div class="input-group mt-1">
          <input
            class="form-control"
            type="search"
            placeholder="Search Services"
            aria-label="Search"
          />
          <button class="btn btn-success">
            <i class="fa-brands fa-searchengin"></i>
          </button>
        </div>
      </div> -->

      <div class="table-responsive-md mt-2">
        <table class="table table-hover mt-4 w-100">
          <thead>
            <tr class="bg-light">
              <td style="width: 40%">Feedback</td>
              <td>Impact</td>
              <td>Effort</td>
              <td>Priority</td>
              <td>Status</td>
              <td>Created Time</td>
              <td>Last Updated Time</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                id="feedbackTitle"
                style="width: 40%"
                @click="this.$router.push('/feedbackdetail/raw/1')"
              >
                vsxvb x v
              </td>
              <td>vs</td>
              <td>vs</td>
              <td>vds</td>
              <td>vds</td>
              <td>vds</td>
              <td>vds</td>
            </tr>
          </tbody>
        </table>

        <!-- <div class="text-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link">Prev</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>

              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RawFeedbackScreen",
};
</script>

<style scoped></style>
