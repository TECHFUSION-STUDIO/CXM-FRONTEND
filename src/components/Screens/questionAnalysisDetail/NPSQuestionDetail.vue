<template>
  <div>
    <!-- NPs data -->
    <div class="mt-4">
      <div class="card shadow shadow-sm">
        <div class="card-body">
          <p class="text-muted">Question Id : 123455566</p>
          <p>
            <span class="badge bg-secondary ms-1">NPS</span>
            <span class="badge bg-secondary ms-1">MANDATORY</span>
            <span class="badge bg-secondary ms-1">ACTIVE</span>
          </p>

          <h5 class="card-title fw-normal">
            On a scale of 0 to 10, how likely are you to recommend our business to a
            friend or colleague?
          </h5>

          <ul class="list-group list-group-flush mt-3 border border-1">
            <li
              class="list-group-item list-group-item-success d-flex justify-content-between align-items-center"
            >
              <span class="ms-2 me-1"> 1</span>
              <span class="badge bg-primary rounded-pill">
                47%
                <span class="text-muted fw-normal fst-normal"> 1440 response</span>
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="ms-2 me-1"> 2</span>
              <span class="badge bg-primary rounded-pill">
                47%
                <span class="text-muted fw-normal fst-normal"> 1440 response</span>
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="ms-2 me-1"> 3</span>
              <span class="badge bg-primary rounded-pill">
                47%
                <span class="text-muted fw-normal fst-normal"> 1440 response</span>
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="ms-2 me-1"> 4</span>
              <span class="badge bg-primary rounded-pill">
                47%
                <span class="text-muted fw-normal fst-normal"> 1440 response</span>
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="ms-2 me-1"> 5</span>
              <span class="badge bg-primary rounded-pill">
                47%
                <span class="text-muted fw-normal fst-normal"> 1440 response</span>
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="ms-2 me-1"> 6</span>
              <span class="badge bg-primary rounded-pill">
                47%
                <span class="text-muted fw-normal fst-normal"> 1440 response</span>
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="ms-2 me-1"> 7</span>
              <span class="badge bg-primary rounded-pill">
                47%
                <span class="text-muted fw-normal fst-normal"> 1440 response</span>
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="ms-2 me-1"> 8</span>
              <span class="badge bg-primary rounded-pill">
                47%
                <span class="text-muted fw-normal fst-normal"> 1440 response</span>
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="ms-2 me-1"> 9</span>
              <span class="badge bg-primary rounded-pill">
                47%
                <span class="text-muted fw-normal fst-normal"> 1440 response</span>
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span class="ms-2 me-1"> 10</span>
              <span class="badge bg-primary rounded-pill">
                47%
                <span class="text-muted fw-normal fst-normal"> 1440 response</span>
              </span>
            </li>
          </ul>

          <div class="row text-center">
            <div class="col-md-4">
              <PieChart
                class="p-4"
                :chartData="{
                  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                  datasets: [
                    {
                      backgroundColor: [
                        '#41B883',
                        '#E46651',
                        '#00D8FF',
                        '#DD1B16',
                        '#DD1B50',
                        '#41B883',
                        '#E46651',
                        '#00D8FF',
                        '#DD1B16',
                        '#DD1B50',
                      ],
                      data: [40, 20, 80, 1100, 240, 40, 20, 80, 1100, 240],
                    },
                  ],
                }"
              />
            </div>

            <div class="col-md-8">
              <BarChart
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
                  ],
                  datasets: [
                    {
                      label: '1',
                      backgroundColor: '#f87979',
                      data: [40, 39, 10, 40, 39, 80, 540, 40, 39, 10, 40, 39],
                    },
                    {
                      label: '2',
                      backgroundColor: '#5e1e38',
                      data: [15, 75, 64, 94, 4, 93, 44, 74, 24, 28],
                    },
                    {
                      label: '3',
                      backgroundColor: '#f87979',
                      data: [56, 95, 7, 45, 87, 40, 89, 43, 15, 97, 21, 25],
                    },
                    {
                      label: '4',
                      backgroundColor: '#8266c1',
                      data: [44, 98, 50, 40, 32, 35, 88, 27, 30, 87, 73, 90],
                    },
                    {
                      label: '5',
                      backgroundColor: '#f87979',
                      data: [39, 94, 34, 13, 99, 87, 96, 20, 12, 77, 95, 88],
                    },
                    {
                      label: '6',
                      backgroundColor: '#708083',
                      data: [33, 82, 24, 39, 64, 89, 68, 81, 1, 4, 98, 47],
                    },
                    {
                      label: '7',
                      backgroundColor: '#c45ba2',
                      data: [9, 100, 29, 8, 30, 63, 73, 16, 18, 77, 49, 65],
                    },
                    {
                      label: '8',
                      backgroundColor: '#12e0db',
                      data: [6, 57, 79, 76, 85, 78, 40, 17, 83, 38, 49, 18],
                    },
                    {
                      label: '9',
                      backgroundColor: '#b4a5aa',
                      data: [65, 63, 19, 76, 31, 98, 95, 20, 93, 8, 17, 37],
                    },
                    {
                      label: '10',
                      backgroundColor: '#0af785',
                      data: [79, 12, 60, 62, 23, 39, 40, 54, 18, 63, 99, 82],
                    },
                  ],
                }"
              />
            </div>
          </div>

          <hr />
          <div class="row mt-3">
            <div class="col-sm-6">
              <div class="">
                <div class="card-body">
                  <div class="row text-center">
                    <div class="col-md-3">
                      <h6 class="card-title fw-medium">Promoters Strength</h6>
                      <p class="card-text mb-0 fs-2 fw-bold fst-italic text-success">
                        50%
                      </p>
                      <p class="mt-0 mb-0 text-muted">1440 votes</p>
                      <p class="mt-0 text-muted">Score b/w 0-6</p>
                    </div>

                    <div class="col-md-3">
                      <h6 class="card-title fw-medium">Promoters Strength</h6>
                      <p class="card-text mb-0 fs-2 fw-bold fst-italic text-success">
                        50%
                      </p>
                      <p class="mt-0 mb-0 text-muted">1440 votes</p>
                      <p class="mt-0 text-muted">Score b/w 7-8</p>
                    </div>
                    <div class="col-md-3">
                      <h6 class="card-title fw-medium">Detractors Strength</h6>
                      <p class="card-text mb-0 fs-2 fw-bold fst-italic text-success">
                        50%
                      </p>
                      <p class="mt-0 mb-0 text-muted">1440 votes</p>
                      <p class="mt-0 text-muted">Score b/w 9-10</p>
                    </div>

                    <div class="col-md-3">
                      <h6 class="card-title fw-medium">NPS <br />Score</h6>
                      <p class="card-text mb-0 fs-2 fw-bold fst-italic text-success">
                        50%
                      </p>
                      <p class="mt-0 mb-0 text-muted">1440 votes</p>
                      <p class="mt-0 text-muted">Promoter % - Detractor %</p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-5">
                      <PieChart
                        class="p-4"
                        :chartData="{
                          labels: ['1', '2', '3', '4'],
                          datasets: [
                            {
                              backgroundColor: [
                                '#41B883',
                                '#E46651',
                                '#00D8FF',
                                '#DD1B16',
                              ],
                              data: [40, 20, 80, 240],
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
                          ],
                          datasets: [
                            {
                              label: 'Promoters',
                              backgroundColor: '#f87979',
                              data: [40, 39, 10, 40, 39, 80, 40],
                            },
                            {
                              label: 'Detractors',
                              backgroundColor: '#00000',
                              data: [30, 34, 14, 10, 10, 20, 70],
                            },
                            {
                              label: 'Passives',
                              backgroundColor: '#00000',
                              data: [30, 34, 14, 10, 10, 20, 70],
                            },
                            {
                              label: 'NPS',
                              backgroundColor: '#00000',
                              data: [30, 34, 14, 10, 10, 20, 70],
                            },
                          ],
                        }"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 border-start">
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
    <!-- NPs data -->
  </div>
</template>

<script>
import LineChart from "../charts/LineChart.vue";
import PieChart from "../charts/PieChart.vue";
import BarChart from "../charts/BarChart.vue";
export default {
  name: "NPSQuestionDetail",
  components: {
    LineChart,
    PieChart,
    BarChart,
  },
};
</script>

<style lang="scss" scoped></style>
