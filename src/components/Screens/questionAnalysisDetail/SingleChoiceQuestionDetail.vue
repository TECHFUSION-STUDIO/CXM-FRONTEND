<template>
  <div>
    <!-- Single choice data -->
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="card shadow shadow-sm" style="background-color: #e0f3ff44">
          <div class="card-body">
            <div class="mb-3">
              <button class="btn btn-sm btn-primary rounded-0">
                <i class="fa-solid fa-arrows-rotate"></i>
              </button>
              <button
                type="button"
                class="btn btn-sm btn-primary rounded-0 dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Up to date
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
            <p class="text-muted">Question Id : 123455566</p>
            <p>
              <span class="badge text-bg-light ms-1">TYPE : SINGLE CHOICE</span>
              <span class="badge text-bg-light ms-1">TYPE : DROPDOWN CHOICE</span>
              <span class="badge text-bg-light ms-1">MANDATORY : YES</span>
              <span class="badge text-bg-light ms-1">STATUS : ACTIVE</span>
            </p>
            <h5 class="card-title fw-medium">Please Select about our food service</h5>

            <ol
              class="list-group list-group-numbered list-group-flush mt-3 border border-1"
            >
              <li
                class="list-group-item list-group-item-success d-flex justify-content-between align-items-start"
              >
                <span class="ms-2 me-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                  numquam beatae quam. Totam tempore recusandae tenetur quod facilis
                  eveniet dolor qui inventore sapiente, ullam aspernatur odio praesentium
                  illo vero deserunt facere iusto excepturi veritatis animi veniam.
                  Praesentium dolores qui et.</span
                >
                <span class="badge bg-primary rounded-pill">
                  47%
                  <span class="text-muted fw-normal fst-normal"> 1440 response</span>
                </span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-start"
              >
                <span class="ms-2 me-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                  numquam beatae quam. Totam tempore recusandae tenetur quod facilis
                  eveniet dolor qui inventore sapiente, ullam aspernatur odio praesentium
                  illo vero deserunt facere iusto excepturi veritatis animi veniam.
                  Praesentium dolores qui et.</span
                >
                <span class="badge bg-primary rounded-pill">
                  47%
                  <span class="text-muted fw-normal fst-normal"> 1440 response</span>
                </span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-start"
              >
                <span class="ms-2 me-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                  numquam beatae quam. Totam tempore recusandae tenetur quod facilis
                  eveniet dolor qui inventore sapiente, ullam aspernatur odio praesentium
                  illo vero deserunt facere iusto excepturi veritatis animi veniam.
                  Praesentium dolores qui et.</span
                >
                <span class="badge bg-primary rounded-pill">
                  47%
                  <span class="text-muted fw-normal fst-normal"> 1440 response</span>
                </span>
              </li>
            </ol>

            <div class="row text-center">
              <div class="col-md-5">
                <PieChart
                  class="p-4"
                  :width="200"
                  :height="200"
                  :chartData="{
                    labels: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
                    datasets: [
                      {
                        backgroundColor: [
                          '#41B883',
                          '#E46651',
                          '#00D8FF',
                          '#DD1B16',
                          '#DD1B50',
                        ],
                        data: [40, 20, 80, 1100, 240],
                      },
                    ],
                  }"
                />
              </div>

              <div class="col-md-7">
                <LineChart
                  class="p-4"
                  :chartData="{
                    labels: [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                    ],
                    datasets: [
                      {
                        label: 'Min Submission time',
                        backgroundColor: '#f87979',
                        data: [40, 39, 10, 40, 39, 80, 40, 40, 39, 10, 40, 39, 80, 40],
                      },
                      {
                        label: 'Avg Submission time',
                        backgroundColor: '#00000',
                        data: [30, 34, 14, 10, 10, 20, 70, 30, 34, 14, 10, 10, 20, 70],
                      },
                      {
                        label: 'Max Submission time',
                        backgroundColor: '#00000',
                        data: [30, 34, 14, 10, 10, 20, 70, 40, 39, 10, 40, 39, 80],
                      },
                    ],
                  }"
                />
              </div>
            </div>
            <hr />

            <div class="row mt-3">
              <div class="col-sm-12 mb-3 mb-sm-0">
                <div class="">
                  <div class="card-body">
                    <div class="row text-center">
                      <div class="col-md-3">
                        <h6 class="card-title fw-medium">Total Views</h6>
                        <p class="card-text mb-0 fs-2 fw-bold fst-italic text-success">
                          23425
                        </p>
                      </div>
                      <div class="col-md-3">
                        <h6 class="card-title fw-medium">Total Interaction</h6>
                        <p class="card-text mb-0 fs-2 fw-bold fst-italic text-success">
                          23425
                        </p>
                      </div>

                      <div class="col-md-3">
                        <h6 class="card-title fw-medium">Total Response</h6>
                        <p class="card-text mb-0 fs-2 fw-bold fst-italic text-success">
                          1234
                        </p>
                      </div>

                      <div class="col-md-3">
                        <h6 class="card-title fw-medium">Conversion Rate</h6>
                        <p class="card-text mb-0 fs-2 fw-bold fst-italic text-success">
                          50%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <LineChart
                  class="p-4"
                  :chartData="{
                    labels: [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                    ],
                    datasets: [
                      {
                        label: 'Min Submission time',
                        backgroundColor: '#f87979',
                        data: [40, 39, 10, 40, 39, 80, 40, 40, 39, 10, 40, 39, 80, 40],
                      },
                      {
                        label: 'Avg Submission time',
                        backgroundColor: '#00000',
                        data: [30, 34, 14, 10, 10, 20, 70, 30, 34, 14, 10, 10, 20, 70],
                      },
                      {
                        label: 'Max Submission time',
                        backgroundColor: '#00000',
                        data: [30, 34, 14, 10, 10, 20, 70, 40, 39, 10, 40, 39, 80],
                      },
                    ],
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Single choice data  -->
  </div>
</template>

<script>
import LineChart from "../charts/LineChart.vue";
import PieChart from "../charts/PieChart.vue";
export default {
  name: "SingleChoiceQuestionDetail",
  components: {
    LineChart,
    PieChart,
  },
};
</script>

<style lang="scss" scoped></style>
