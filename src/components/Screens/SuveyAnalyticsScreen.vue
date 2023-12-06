<template>
  <div>
    <div>
      <button class="btn btn-sm btn-primary rounded-0">
        <i class="fa-solid fa-arrows-rotate"></i>
      </button>
      <button
        type="button"
        class="btn btn-sm btn-primary rounded-0 dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Last 10 days
      </button>
      <ul class="dropdown-menu shadow-lg">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
    <div class="row mt-4">
      <div class="col-sm-3 text-center mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fw-normal">Retention Rate</h5>
            <p class="card-text fs-1 fst-italic">47%</p>
          </div>
        </div>
      </div>
      <div class="col-sm-3 text-center mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fw-normal">Bounce Rate</h5>
            <p class="card-text fs-1 fst-italic">63%</p>
          </div>
        </div>
      </div>

      <div class="col-sm-3 text-center mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fw-normal">Page Views</h5>
            <p class="card-text fs-1 fst-italic">780000</p>
          </div>
        </div>
      </div>

      <div class="col-sm-3 text-center mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fw-normal">Avg Submission Time</h5>
            <p class="card-text fs-1 fst-italic">4.5 min</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-sm-5 text-center mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body row">
            <div class="col-md-4">
              <h6 class="card-title fw-normal">Total Views</h6>
              <p class="card-text fs-2 fst-italic">1800</p>
            </div>

            <div class="col-md-4">
              <h6 class="card-title fw-normal">Retention Rate</h6>
              <p class="card-text fw-bold fs-2 fst-italic text-success">47%</p>
            </div>
            <div class="col-md-4">
              <h6 class="card-title fw-normal">Total Submission</h6>
              <p class="card-text fs-2 fst-italic">800</p>
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
      <div class="col-sm-7 text-center mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body row">
            <div class="col-md-4">
              <h6 class="card-title fw-normal">Min Submission time</h6>
              <p class="card-text fs-2 fst-italic">2 min</p>
            </div>

            <div class="col-md-4">
              <h6 class="card-title fw-normal">Avg Submission time</h6>
              <p class="card-text fs-2 fw-bold fst-italic text-success">4.7 min</p>
            </div>
            <div class="col-md-4">
              <h6 class="card-title fw-normal">Max Submission time</h6>
              <p class="card-text fs-2 fst-italic">10 min</p>
            </div>
          </div>
          <LineChart
            class="p-4"
            :chartData="{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Min Submission time',
                  backgroundColor: '#f87979',
                  data: [40, 39, 10, 40, 39, 80, 40],
                },
                {
                  label: 'Avg Submission time',
                  backgroundColor: '#00000',
                  data: [30, 34, 14, 10, 10, 20, 70],
                },
                {
                  label: 'Max Submission time',
                  backgroundColor: '#00000',
                  data: [30, 34, 14, 10, 10, 20, 70],
                },
              ],
            }"
          />
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-sm-7 text-center mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body row">
            <div class="col-md-4">
              <h6 class="card-title fw-normal">Anonymous Submission</h6>
              <p class="card-text fs-2 fst-italic">700</p>
            </div>

            <div class="col-md-4">
              <h6 class="card-title fw-normal">Member Submission</h6>
              <p class="card-text fs-2 fst-italic">1500</p>
            </div>
            <div class="col-md-4">
              <h6 class="card-title fw-normal">Genuine Submission</h6>
              <p class="card-text fs-2 fst-italic">100</p>
            </div>
          </div>
          <LineChart
            class="p-4"
            :chartData="{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Min Submission time',
                  backgroundColor: '#f87979',
                  data: [40, 39, 10, 40, 39, 80, 40],
                },
                {
                  label: 'Avg Submission time',
                  backgroundColor: '#00000',
                  data: [30, 34, 14, 10, 10, 20, 70],
                },
                {
                  label: 'Max Submission time',
                  backgroundColor: '#00000',
                  data: [30, 34, 14, 10, 10, 20, 70],
                },
              ],
            }"
          />
        </div>
      </div>

      <div class="col-sm-5 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <div class="row text-center">
              <div class="col-md-4">
                <h6 class="card-title fw-normal">Positive Response</h6>
                <p class="card-text fs-2 fst-italic text-success">700</p>
              </div>

              <div class="col-md-4">
                <h6 class="card-title fw-normal">Neutral Response</h6>
                <p class="card-text fs-2 fst-italic text-primary">1500</p>
              </div>
              <div class="col-md-4">
                <h6 class="card-title fw-normal">Negative Response</h6>
                <p class="card-text fs-2 fst-italic text-danger">100</p>
              </div>
            </div>

            <LineChart
              class="p-4"
              :chartData="{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Min Submission time',
                    backgroundColor: '#f87979',
                    data: [40, 39, 10, 40, 39, 80, 40],
                  },
                  {
                    label: 'Avg Submission time',
                    backgroundColor: '#00000',
                    data: [30, 34, 14, 10, 10, 20, 70],
                  },
                  {
                    label: 'Max Submission time',
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

    <div class="row mt-4">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title fw-normal">Device Browser</h5>
            <p class="card-text fs-1 fst-italic">
              <PieChart
                class="p-4"
                :width="200"
                :height="200"
                :chartData="{
                  labels: [
                    'Chrome',
                    'Mozilla',
                    'Edge',
                    'Opera Mini',
                    'Internet Explorer',
                  ],
                  datasets: [
                    {
                      backgroundColor: [
                        '#41B883',
                        '#E46651',
                        '#00D8FF',
                        '#DD1B16',
                        '#DD1B50',
                      ],
                      data: [40, 20, 80, 10, 24],
                    },
                  ],
                }"
              />
            </p>

            <p class="card-text fs-1 fst-italic">
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
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title fw-normal">Device OS</h5>
            <p class="card-text fs-1 fst-italic">
              <PieChart
                class="p-4"
                :width="200"
                :height="200"
                :chartData="{
                  labels: ['Andriod', 'iOS', 'Windows', 'Linux', 'Other'],
                  datasets: [
                    {
                      backgroundColor: [
                        '#41B883',
                        '#E46651',
                        '#00D8FF',
                        '#DD1B16',
                        '#DD1B50',
                      ],
                      data: [40, 20, 80, 10, 24],
                    },
                  ],
                }"
              />
            </p>
            <p class="card-text fs-1 fst-italic">
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
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title fw-normal">Device Type</h5>
            <p class="card-text fs-1 fst-italic">
              <PieChart
                class="p-4"
                :width="200"
                :height="200"
                :chartData="{
                  labels: ['Phone', 'Tablet', 'Desktop'],
                  datasets: [
                    {
                      backgroundColor: [
                        '#41B883',
                        '#E46651',
                        '#00D8FF',
                        '#DD1B16',
                        '#DD1B50',
                      ],
                      data: [40, 20, 80, 10, 24],
                    },
                  ],
                }"
              />
            </p>
            <p class="card-text fs-1 fst-italic">
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
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "./charts/LineChart.vue";
import PieChart from "./charts/PieChart.vue";
export default {
  name: "SurveyAnalyticsScreen",
  components: {
    LineChart,
    PieChart,
  },
};
</script>

<style lang="scss" scoped></style>
