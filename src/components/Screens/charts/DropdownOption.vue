<template>
  <div>
    <div class="dropdown mt-4">
      <div
        class="dropdowm-toggle btn btn-sm btn-primary"
        type="button"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ selectedText != "" ? selectedText : "Drop" }}
      </div>

      <div class="dropdown-menu">
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
  props: ["finalList"],
  data() {
    return {
      selectedText: "",
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
      this.selectedText = a;
      this.searchText = "";
      this.$emit("selectedText", this.selectedText);
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
