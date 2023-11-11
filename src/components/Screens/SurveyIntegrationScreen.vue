<template>
  <div>
    <div class="bg-white shadow shadow-sm p-3">
      <div class="d-flex mb-2">
        <div class="me-auto">
          <h6>Survey Integration</h6>
        </div>
      </div>
      <div class="mt-3">
        <div class="card-group">
          <div class="card border-dark m-2" style="max-width: 18rem">
            <!-- <div class="card-header">Header</div> -->
            <div class="card-body text-dark">
              <h5 class="card-title">Import via CSV/Excel</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
            </div>
            <div class="card-footer bg-transparent border-success">
              <button
                class="btn btn-sm btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Open
              </button>
            </div>
          </div>
          <div class="card border border-dark m-2" style="max-width: 18rem">
            <!-- <div class="card-header">Header</div> -->
            <div class="card-body text-dark">
              <h5 class="card-title">Connect to Custom Form</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
            </div>
            <div class="card-footer bg-transparent border-success text-warning">
              <button
                class="btn btn-sm btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#customForm"
              >
                Open
              </button>
            </div>
          </div>
          <div class="card border border-dark m-2" style="max-width: 18rem">
            <!-- <div class="card-header">Header</div> -->
            <div class="card-body text-dark">
              <h5 class="card-title">Connect to Google Maps</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
            </div>
            <div class="card-footer bg-transparent border-success text-warning">
              Coming soon
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Import Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Import via CSV/Excel
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="formFile" class="form-label">Upload the file : </label>
              <input
                class="form-control"
                type="file"
                id="formFile"
                @change="addfile($event)"
                placeholder="Upload file"
                accept=".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              />
            </div>

            <div class="mb-3">
              <p v-if="Object.keys(colHeader).length > 0">Select Columns to import :</p>

              <table
                class="table table-bordered mt-1"
                v-if="Object.keys(colHeader).length > 0"
              >
                <thead>
                  <tr class="bg-light">
                    <td></td>
                    <td>Column</td>
                    <td>Question Map</td>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr v-for="(item, index) in Object.keys(colHeader)" :key="index">
                    <td>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        :id="index"
                        @click="selectHeader(item)"
                      />
                    </td>
                    <td>{{ item }}</td>
                    <td>
                      <select
                        class="form-select form-select-sm"
                        v-show="selectedHeader.includes(item)"
                        v-model="colHeader[item]"
                      >
                        <!-- <template v-if="item.isUsed == false"> -->
                        <option
                          v-for="item in surveyFormQuestionDetail"
                          :key="item.id"
                          :value="item.id"
                        >
                          {{ item.surveyQuestion }}
                        </option>
                        <!-- </template> -->
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="mb-3">
              <p v-if="Object.keys(colHeader).length > 0">Select Additional Details :</p>

              <table
                class="table table-bordered mt-2"
                v-if="Object.keys(colHeader).length > 0"
              >
                <thead>
                  <tr class="bg-light">
                    <td>Fields</td>
                    <td>Imported Columns</td>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr>
                    <td>Logger Name</td>
                    <td>
                      <select class="form-select form-select-sm">
                        <option
                          v-for="item in Object.keys(colHeader)"
                          :key="item"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Logger Contact</td>
                    <td>
                      <select class="form-select form-select-sm">
                        <option
                          v-for="item in Object.keys(colHeader)"
                          :key="item"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Logger Email</td>
                    <td>
                      <select class="form-select form-select-sm">
                        <option
                          v-for="item in Object.keys(colHeader)"
                          :key="item"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Logger Type</td>
                    <td>
                      <select class="form-select form-select-sm">
                        <option
                          v-for="item in Object.keys(colHeader)"
                          :key="item"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Logger Add. Detail</td>
                    <td>
                      <select class="form-select form-select-sm">
                        <option
                          v-for="item in Object.keys(colHeader)"
                          :key="item"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td>Logged Time</td>
                    <td>
                      <select class="form-select form-select-sm">
                        <option
                          v-for="item in Object.keys(colHeader)"
                          :key="item"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Feedback Segment</td>
                    <td>
                      <select class="form-select form-select-sm">
                        <option
                          v-for="item in Object.keys(colHeader)"
                          :key="item"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Posted By</td>
                    <td>
                      <select class="form-select form-select-sm">
                        <option
                          v-for="item in Object.keys(colHeader)"
                          :key="item"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">Import</button>
          </div>
        </div>
      </div>
    </div>

    <!--Custom form Modal -->
    <div
      class="modal fade"
      id="customForm"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="customFormLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="customFormLabel">Connect Custom Form</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">Import</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axioscon from "../../axioscon.js";

import * as XLSX from "xlsx";
export default {
  name: "SurveyIntegrationScreen",
  data() {
    return {
      file: File,
      arrayBuffer: null,
      colHeader: {},
      selectedHeader: [],
      surveyFormQuestionDetail: [],

      axioscon,
    };
  },
  updated() {
    console.log("updasted");
    console.log(this.surveyFormQuestionDetail);
  },
  mounted() {
    this.id = this.$route.params.surveyId;
    this.fetchSurveyQuestionDetail();
  },

  methods: {
    fetchSurveyQuestionDetail() {
      axioscon
        .get("/getSurveyQuestion?businessId=1&projectId=1&surveyFormId=" + this.id)
        .then((res) => {
          console.log(res.data);
          this.surveyFormQuestionDetail = res.data.map((a) => {
            return { ...a, ["isUsed"]: false };
          });
          console.log(this.surveyFormQuestionDetail);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selectHeader(item) {
      this.selectedHeader.includes(item)
        ? this.selectedHeader.splice(this.selectedHeader.indexOf(item), 1)
        : this.selectedHeader.push(item);
      console.log(this.selectedHeader);
    },
    loadExcelFile() {
      this.file = event.target.files[0];
    },
    addfile(event) {
      try {
        this.colHeader = {};
        this.loadExcelFile(event);
        let fileReader = new FileReader();
        fileReader.readAsArrayBuffer(this.file);
        fileReader.onload = () => {
          this.arrayBuffer = fileReader.result;
          var data = new Uint8Array(this.arrayBuffer);
          var arr = new Array();
          for (var i = 0; i != data.length; ++i) {
            arr[i] = String.fromCharCode(data[i]);
          }
          var bstr = arr.join("");
          var workbook = XLSX.read(bstr, { type: "binary", sheetRows: 1 });
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
          var cells = Object.keys(worksheet);
          console.log(Object.keys(cells));
          for (var j = 0; j < cells.length; j++) {
            console.log(worksheet[cells[j]]);
            if (cells[j].indexOf("1") > -1) {
              //  this.colHeader.push(worksheet[cells[j]].v); //Contails all column names,
              this.colHeader = { ...this.colHeader, [worksheet[cells[j]].v]: "" };
            }
          }
          console.log(this.colHeader);

          var workbook1 = XLSX.read(bstr, { type: "binary" });
          var first_sheet_name1 = workbook1.SheetNames[0];
          var worksheet1 = workbook1.Sheets[first_sheet_name1];

          console.log(XLSX.utils.sheet_to_json(worksheet1));
        };
      } catch (err) {
        this.colHeader = {};
      }
    },

    submitExcelData() {
      let requestXml = [];
      try {
        let fileReader = new FileReader();
        fileReader.readAsArrayBuffer(this.file);
        fileReader.onload = () => {
          this.arrayBuffer = fileReader.result;
          var data = new Uint8Array(this.arrayBuffer);
          var arr = new Array();
          for (var i = 0; i != data.length; ++i) {
            arr[i] = String.fromCharCode(data[i]);
          }
          var bstr = arr.join("");

          var workbook1 = XLSX.read(bstr, { type: "binary" });
          var first_sheet_name1 = workbook1.SheetNames[0];
          var worksheet1 = workbook1.Sheets[first_sheet_name1];

          console.log(XLSX.utils.sheet_to_json(worksheet1));

          console.log(requestXml);
          // axioscon
          //   .post("/importExcelData", {
          //     data: XLSX.utils.sheet_to_json(worksheet1),
          //     colHeader: this.selectedHeader,
          //   })
          //   .then((result) => {
          //     console.log(result);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });
        };
      } catch (err) {
        this.colHeader = {};
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
