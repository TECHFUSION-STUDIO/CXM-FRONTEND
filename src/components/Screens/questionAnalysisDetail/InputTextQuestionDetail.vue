<template>
  <div>
    <!-- Single/Multi Line Text data -->
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="card shadow shadow-sm" style="background-color: #e0f3ff44">
          <div class="card-body">
            <p class="text-muted">Question Id : 123455566</p>
            <p>
              <span class="badge text-bg-light ms-1">TYPE : SINGLE LINE TEXT</span>
              <span class="badge text-bg-light ms-1">TYPE : MULTI LINE TEXT</span>
              <span class="badge text-bg-light ms-1">MANDATORY : YES</span>
              <span class="badge text-bg-light ms-1">STATUS : ACTIVE</span>
            </p>
            <h5 class="card-title fw-medium">Please tell us about our service</h5>
            <div class="row mt-3">
              <div class="col-sm-8 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h5>Word Cloud</h5>
                    <div class="mt-2" v-if="true">
                      <img
                        :src="'https://media.istockphoto.com/id/472300670/photo/word-cloud-about-leadership.jpg?s=2048x2048&w=is&k=20&c=mUBxemjCJmbVz3QOOHJSfCFdywIElSHF28o7ZNiLwYo='"
                        style="width: 100%"
                      />
                    </div>
                    <p class="text-muted fst-italic text-center mt-3 mb-3" v-if="false">
                      No Keywords found
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h5>Keywords Used</h5>
                    <p class="text-muted fst-italic">Showing 10 of 200 keywords</p>
                    <div class="mt-3" v-if="true">
                      <button class="btn btn-light btn-sm me-1 mt-1 mb-1">
                        Notifications
                        <span class="badge text-bg-secondary" title="Occurence">4</span>
                      </button>
                      <button class="btn btn-light btn-sm me-1 mt-1 mb-1">
                        Notifications <span class="badge text-bg-secondary">4</span>
                      </button>
                      <div class="text-start mt-2">
                        <button class="btn btn-primary btn-sm me-1 mt-1 mb-1">
                          Prev
                        </button>
                        <button class="btn btn-primary btn-sm">Next</button>
                      </div>
                    </div>
                    <p class="text-muted fst-italic text-center mt-3 mb-3">
                      No Keywords found
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="row mt-3">
              <div class="col-sm-6">
                <div class="">
                  <div class="card-body">
                    <div class="row text-center mt-4">
                      <div class="col-md-3">
                        <h6 class="card-title fw-medium">Positive Sentiment</h6>
                        <p class="card-text mb-0 fs-2 fw-bold fst-italic text-success">
                          50%
                        </p>
                        <p class="mt-0 mb-0 text-muted">Avg Score : 3</p>
                        <p class="mt-0 mb-0 text-muted">1440 votes</p>
                        <p class="mt-0 text-muted">Score &gt; 0</p>
                      </div>

                      <div class="col-md-3">
                        <h6 class="card-title fw-medium">Neutral Sentiment</h6>
                        <p class="card-text mb-0 fs-2 fw-bold fst-italic text-success">
                          50%
                        </p>
                        <p class="mt-0 mb-0 text-muted">Avg Score : 3</p>
                        <p class="mt-0 mb-0 text-muted">1440 votes</p>
                        <p class="mt-0 text-muted">Score &gt; 0</p>
                      </div>

                      <div class="col-md-3">
                        <h6 class="card-title fw-medium">Negative Sentiment</h6>
                        <p class="card-text mb-0 fs-2 fw-bold fst-italic text-success">
                          50%
                        </p>
                        <p class="mt-0 mb-0 text-muted">Avg Score : 3</p>
                        <p class="mt-0 mb-0 text-muted">1440 votes</p>
                        <p class="mt-0 text-muted">Score &gt; 0</p>
                      </div>

                      <div class="col-md-3">
                        <h6 class="card-title fw-medium">Overall Sentiment</h6>
                        <p class="card-text mb-0 fs-2 fw-bold fst-italic text-success">
                          50%
                        </p>
                        <p class="mt-0 mb-0 text-muted">Avg Score : 3</p>
                        <p class="mt-0 mb-0 text-muted">1440 votes</p>
                        <p class="mt-0 text-muted">Score &gt; 0</p>
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
                        ],
                        datasets: [
                          {
                            label: 'Positive',
                            backgroundColor: '#f87979',
                            data: [40, 39, 10, 40, 39, 80, 40],
                          },
                          {
                            label: 'Neutral',
                            backgroundColor: '#00000',
                            data: [30, 34, 14, 10, 10, 20, 70],
                          },
                          {
                            label: 'Negative',
                            backgroundColor: '#00000',
                            data: [30, 34, 14, 10, 10, 20, 70],
                          },
                          {
                            label: 'Overall',
                            backgroundColor: '#00000',
                            data: [30, 34, 14, 10, 10, 20, 70],
                          },
                        ],
                      }"
                    />
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
    </div>
    <!-- Single/Multi Line Text data -->
  </div>
</template>

<script>
import LineChart from "../charts/LineChart.vue";

export default {
  name: "InputTextQuestionDetail",
  components: {
    LineChart,
  },
};
</script>

<style lang="scss" scoped></style>
