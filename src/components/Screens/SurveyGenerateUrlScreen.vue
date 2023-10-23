<template>
  <div>
    <div class="text-center">
      <h6>Generate Form Url with Multiple Submission</h6>
      <qrcode-vue :value="commonUrl" level="H" class="mt-3" />
      <p class="mt-2" title="click to copy" style="cursor: pointer">
        https://forms.feedarc.com/1234
      </p>
    </div>

    <hr />

    <div>
      <h6 class="text-center">Generate Form Url with Single Submission</h6>

      <div>
        <div class="mt-4">
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
            v-if="keyValueCount > 2"
          >
            <strong>Warning!</strong> Do not use more than two key & value pair for
            efficiency
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>

          <div
            class="input-group input-group-sm mt-1"
            v-for="i in keyValueCount"
            :key="i"
          >
            <span class="input-group-text">{{ i }}. Key & Value</span>
            <input
              type="text"
              aria-label="First name"
              class="form-control"
              v-model="payload[i - 1].key"
            />
            <input
              type="text"
              aria-label="Last name"
              class="form-control"
              v-model="payload[i - 1].value"
            />
          </div>
          <div class="mt-2">
            <button class="btn btn-outline-primary btn-sm m-1" @click="addKeyValue()">
              Add Key & Value
            </button>
            <button
              class="btn btn-outline-danger btn-sm m-1"
              @click="deleteKeyValue()"
              v-if="keyValueCount > 0"
            >
              Delete Key & Value
            </button>
            <button
              class="btn btn-outline-primary btn-sm m-1"
              @click="clearKeyValue()"
              v-if="keyValueCount > 0"
            >
              Reset Key & Value
            </button>

            <button
              class="btn btn-primary btn-sm m-1"
              @click="showSingleUseUrlAndQr = true"
            >
              Generate Url & Qr code
            </button>
          </div>
        </div>
      </div>
      <div v-if="showSingleUseUrlAndQr" class="text-center">
        <qrcode-vue :value="commonUrl" level="H" class="mt-3" />
        <p class="mt-2" title="click to copy" style="cursor: pointer">
          {{ commonUrl }}
        </p>
        <p class="mt-1 text-secondary">
          <i v-if="keyValueCount > 0"> {{ payload }} </i>
          <i v-else>No Key Value passed</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
export default {
  name: "SurveyGenerateUrlScreen",
  components: {
    QrcodeVue,
  },
  data() {
    return {
      commonUrl: "https://forms.feedarc.com/1234/eynkljnoc.vnnlsdnl.jpvjp;snmpvnlsnvl",
      payload: [],
      keyValueCount: 0,
      showSingleUseUrlAndQr: false,
    };
  },
  updated() {
    console.log(this.payload);
  },
  methods: {
    addKeyValue() {
      if (this.keyValueCount < 5) {
        this.payload.push({ key: "", value: "" });
        this.keyValueCount++;
      }
    },
    deleteKeyValue() {
      this.payload.pop();
      this.keyValueCount--;
    },
    clearKeyValue() {
      this.payload = [];
      this.keyValueCount = 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
