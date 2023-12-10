<template>
  <div>
    <div class="dropdown">
      <div
        class="dropdown-toggle text-start"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span class="badge text-bg-danger ms-1" v-for="item in selectedText" :key="item"
          >{{ item
          }}<span class="ps-2"
            ><i
              class="fa-regular fa-circle-xmark delfilter"
              @click="removeSelected(item)"
              style="cursor: pointer"
            ></i></span
        ></span>
        {{ selectedText.length != 0 ? "" : "Select Tag" }}
      </div>

      <div class="dropdown-menu shadow-lg">
        <li class="dropdown-item">
          <input id="myInput" type="text" v-model="searchText" placeholder="Search.." />
        </li>
        <div style="max-height: 200px; overflow-y: auto">
          <li>
            <a
              class="dropdown-item"
              @click="selectText(item)"
              href="#"
              v-for="item in dropList"
              :key="item"
              >{{ item }}</a
            >
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownOption",
  props: ["finalList", "selectedOptions"],
  data() {
    return {
      selectedText: this.selectedOptions,
      searchText: "",
      dropList: this.finalList,
    };
  },
  watch: {
    searchText(val) {
      this.$emit("searchText", this.searchText);
      console.log(val);
      console.log(
        this.finalList.filter((a) => a.toLowerCase().includes(val.toLowerCase()))
      );
      this.dropList = this.finalList.filter((a) =>
        a.toLowerCase().includes(val.toLowerCase())
      );
    },
  },
  methods: {
    selectText(a) {
      if (!this.selectedText.includes(a)) {
        this.selectedText.push(a);
        this.searchText = "";
        this.$emit("selectedText", this.selectedText);
      }
    },
    removeSelected(a) {
      this.selectedText = this.selectedText.filter((x) => x != a);
    },
  },
};
</script>

<style lang="css" scoped>
.delfilter:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
