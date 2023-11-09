<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button
        v-if="this.store.IS_LOGGED_IN && !screenShort"
        type="button"
        id="sidebarCollapse"
        class="btn btn-primary"
        @click="openDrawer ? (openDrawer = false) : (openDrawer = true)"
      >
        <i class="fas fa-align-left"></i>
      </button>

      <h5 class="navbar-nav me-auto ms-3">
        <i class="fa-solid fa-florin-sign me-2"></i> FeedArc
      </h5>
      <div class="d-flex" role="search">
        <div class="w-100">
          <!-- <multiselect
            :options="options"
            v-model="item"
            placeholder="Select one"
            label="projectName"
            track-by="id"
          ></multiselect> -->
          <select class="form-select" v-model="item">
            <option v-for="item in options" :key="item.id">
              {{ item.projectName }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </nav>
  <div class="d-flex" style="background-color: #0262b9; min-height: 4px">
    <div class="ms-auto text-white p-1" style="font-size: 14px">
      <span class="me-2" style="cursor: pointer" @click="this.$router.push('/account')"
        >MY PROFILE</span
      >
      |
      <span class="me-2 ms-2" style="cursor: pointer">SUPPORT</span>
    </div>
  </div>
  <div class="wrapper bg-light">
    <!-- Sidebar  -->
    <nav
      v-if="this.store.IS_LOGGED_IN"
      id="sidebar"
      :class="openDrawer ? 'active' : ''"
      style="overflow-y: auto; height: 100vh; background-color: #dee2e6"
    >
      <ul class="list-group mt-1 border rounded-0 border-0">
        <li
          :class="
            selectedTab == 1
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1 '
          "
          @click="
            selectedTab = 1;
            this.$router.push('/dashboard');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold"><i class="fa-solid fa-house me-2"></i>Dashboard</div>
          </div>
        </li>
        <li
          :class="
            selectedTab == 2
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 2;
            this.$router.push('/surveys');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <i class="fa-solid fa-comment-dots me-2"></i>Surveys
            </div>
          </div>
        </li>

        <li
          :class="
            selectedTab == 3
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 3;
            this.$router.push('/logger');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <i class="fa-solid fa-address-book me-2"></i>Loggers
            </div>
          </div>
        </li>

        <li
          :class="
            selectedTab == 11
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 11;
            this.$router.push('/feature');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold"><i class="fa-regular fa-snowflake me-2"></i>Feature</div>
          </div>
        </li>

        <!-- <li
          :class="
            selectedTab == 5
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 5;
            this.$router.push('/board');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold"><i class="fa-solid fa-folder-open me-2"></i>Boards</div>
          </div>
        </li> -->
        <li
          :class="
            selectedTab == 4
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 4;
            this.$router.push('/category');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <i class="fa-solid fa-code-branch me-2"></i>Category
            </div>
          </div>
        </li>

        <li
          :class="
            selectedTab == 6
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 6;
            this.$router.push('/tags');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold"><i class="fa-sharp fa-solid fa-tags me-2"></i>Tags</div>
          </div>
        </li>

        <!-- <li
          :class="
            selectedTab == 7
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start hovered mt-1'
          "
          @click="
            selectedTab = 7;
            this.$router.push('/projectmember');
          "
          style="cursor: default"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              <i class="fa-solid fa-people-group me-2"></i>Project Members
            </div>
          </div>
        </li> -->

        <hr style="color: black" />

        <!-- <li
          :class="
            selectedTab == 8
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 8;
            this.$router.push('/vendor');
          "
          style="cursor: default"
        >
          <div class="me-auto w-100">
            <div class="fw-bold">
              <i class="fa-solid fa-building me-2"></i>Manage Vendors
            </div>
          </div>
        </li> -->

        <!-- <li
          :class="
            selectedTab == 9
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 9;
            this.$router.push('/generalmember');
          "
          style="cursor: default"
        >
          <div class="me-auto w-100">
            <div class="fw-bold">
              <i class="fa-solid fa-users-gear me-2"></i>General Members
            </div>
          </div>
        </li> -->

        <li
          :class="
            selectedTab == 12
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1'
          "
          @click="
            selectedTab = 12;
            this.$router.push('/account');
          "
          style="cursor: default"
        >
          <div class="me-auto w-100">
            <div class="fw-bold"><i class="fa-solid fa-user me-2"></i>My Account</div>
          </div>
        </li>

        <li
          :class="
            selectedTab == 10
              ? 'hovered-active list-group-item d-flex justify-content-between align-items-start hovered mt-1'
              : 'list-group-item d-flex justify-content-between align-items-start   hovered mt-1'
          "
          @click="
            selectedTab = 10;
            this.$router.push('/login');
          "
          style="cursor: default"
        >
          <div class="me-auto">
            <div class="fw-bold">
              <i class="fa-solid fa-arrow-right-from-bracket me-2"></i>Log Out
            </div>
          </div>
        </li>
      </ul>
    </nav>

    <!-- Page Content  -->
    <div id="content">
      <div>
        <div class="p-2">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "@/store";
import axioscon from "../axioscon.js";
// import Multiselect from "vue-multiselect";

export default {
  name: "DashboardApp",
  components: {
    // Multiselect,
  },
  data() {
    return {
      openDrawer: false,
      screenShort: false,
      selectedTab: null,
      headerTitle: "",
      options: [],
      item: {},
      searchText: "",
      store,
      axioscon,
    };
  },
  mounted() {
    this.fetchProjects();
    this.titleDetector();
  },
  watch: {
    item: function (oldItem, newItem) {
      if (oldItem != newItem) {
        store.selectedProject = this.item;
      }
    },
  },
  methods: {
    fetchProjects() {
      axioscon
        .get("/getProjects?businessId=" + 1)
        .then((res) => {
          console.log(res);
          this.options = res.data;
          if (this.options != null && this.options.length > 0)
            this.item = this.options[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    printSearchText(searchText) {
      this.searchText = searchText;
    },
    titleDetector() {
      if (window.location.href.includes("dashboard")) {
        this.headerTitle = "Dashboard";
      } else if (window.location.href.includes("viewfeedback")) {
        this.headerTitle = "View Feedback";
      } else if (window.location.href.includes("rawfeedback")) {
        this.headerTitle = "Manage Raw Feedback";
      } else if (window.location.href.includes("createfeedback")) {
        this.headerTitle = "Create Feedback";
      } else if (window.location.href.includes("createreleasenotes")) {
        this.headerTitle = "Create Release Notes ";
      } else if (window.location.href.includes("createboard")) {
        this.headerTitle = "Create Board ";
      } else if (window.location.href.includes("createproject")) {
        this.headerTitle = "Create New Project ";
      } else if (window.location.href.includes("createmember")) {
        this.headerTitle = "Add Member ";
      } else if (window.location.href.includes("feedbacksource")) {
        this.headerTitle = "Feedback Source ";
      } else if (window.location.href.includes("feedbackloggerdetail")) {
        this.headerTitle = "View Feedback Logger Detail";
      } else if (window.location.href.includes("projectsettings")) {
        this.headerTitle = "Project Settings ";
      } else if (window.location.href.includes("generalsettings")) {
        this.headerTitle = "General Settings";
      } else if (window.location.href.includes("tags")) {
        this.headerTitle = "Manage Tags";
      } else if (window.location.href.includes("category")) {
        this.headerTitle = "Manage Category";
      } else if (window.location.href.includes("feedback")) {
        this.headerTitle = "Manage Feedback";
      } else if (window.location.href.includes("logger")) {
        this.headerTitle = "Manage Loggers";
      } else if (window.location.href.includes("projectmembers")) {
        this.headerTitle = "Manage Project Members";
      } else if (window.location.href.includes("members")) {
        this.headerTitle = "Manage Members";
      } else if (window.location.href.includes("releasenotes")) {
        this.headerTitle = "Manage Release Notes";
      } else if (window.location.href.includes("createreleaseboard")) {
        this.headerTitle = "Create Release Boards";
      } else if (window.location.href.includes("releaseboard")) {
        this.headerTitle = "Manage Release Boards";
      } else if (window.location.href.includes("board")) {
        this.headerTitle = "Manage  Boards";
      }
    },
  },
};
</script>

<style>
body {
  overflow-y: hidden;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"; */

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
  display: flex;
  padding: 0px;
  margin: 0px;
  width: 100%;
  align-items: stretch;
}

#sidebar {
  min-width: 220px;
  max-width: 220px;
  color: #fff;
  transition: all 0.3s;
  /* padding-left: 5px;
  padding-right: 5px; */
  padding-bottom: 5px;
  padding-top: 0px;
}

#sidebar.active {
  margin-left: -220px;
}

/* #sidebar .sidebar-header {
  padding: 5px;
}

#sidebar ul.components {
  border-bottom: 1px solid #47748b;
} */

/* #sidebar ul p {
  color: #fff;
  padding: 10px;
} */

.hovered {
  background-color: rgba(255, 255, 255, 0);
  border-width: 0px;
  color: #000;
}

.hovered:hover {
  /* background-color: #e0f3ff; */
  color: #0262b9;
}

.hovered-active {
  background-color: #e0f3ff;
  color: #0262b9;
  border-left-color: #0262b9;
  border-left-width: 4px;
  z-index: 3;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
  width: 100%;
  /* padding: 10px; */
  overflow-y: auto;

  min-height: 89vh;
  height: 89vh;
  transition: all 0.3s;
  background-color: #edf0f2;
}

.dropdown-menu-wide {
  min-width: 100%;
  text-align: center;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    margin-left: -220px;
  }

  #sidebar.active {
    margin-left: 0;
  }

  #sidebarCollapse span {
    display: none;
  }
}
</style>
