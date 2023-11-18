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
          <div class="dropdown-center">
            <button
              class="btn btn-outline-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="text-truncate d-inline p-0 m-0" style="width: 200px">
                {{
                  item == null || item == {} ? "Select Workspace" : item.projectName
                }}</span
              >
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end dropdown-menu-sm-end dropdown-menu-md-end shadow mt-0"
              style="max-width: 100%"
            >
              <li>
                <a class="dropdown-item text-muted"><i>Owner</i></a>
              </li>
              <li v-for="i in options" :key="i.id" @click="item = i">
                <a class="dropdown-item text-truncate" :title="i.projectName" href="#"
                  >{{ i.projectName }}
                </a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item text-muted"><i>Member</i></a>
              </li>
              <li><hr class="dropdown-divider" /></li>

              <li class="text-center">
                <a class="dropdown-item btn text-truncate"
                  ><i class="fa-solid fa-folder-plus me-1"></i>Create Workspace</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="d-flex" style="background-color: #0262b9; min-height: 4px">
    <div class="ms-auto text-white p-1" style="font-size: 14px">
      <span class="me-2 ms-2" style="cursor: pointer" title="Notifications"
        ><i class="fa-regular fa-bell"></i></span
      >|
      <span
        class="me-2 ms-2"
        style="cursor: pointer"
        title="My Account"
        @click="this.$router.push('/account')"
        ><i class="fa-solid fa-address-card"></i
      ></span>
      |
      <span class="me-2 ms-2" style="cursor: pointer" title="Help & Support"
        ><i class="fa-solid fa-question"></i
      ></span>
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
        <template v-for="(item, index) in sideBarMenu" :key="index">
          <li
            v-if="item.title != 'hr'"
            :class="
              selectedTab == index
                ? 'hovered-active list-group-item d-flex justify-content-between align-items-start hovered mt-1'
                : 'list-group-item d-flex justify-content-between align-items-start  hovered mt-1 '
            "
            @click="
              selectedTab = index;
              this.$router.push(item.url);
            "
            style="cursor: default"
          >
            <div class="ms-1 me-auto">
              <div class="fw-medium">
                <i :class="item.icon + ' me-2'"></i>{{ item.title }}
              </div>
            </div>
          </li>
          <hr v-else style="color: black" />
        </template>
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

export default {
  name: "DashboardApp",
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
      sideBarMenu: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: "fa-solid fa-house ",
        },
        {
          title: "Survey",
          url: "/surveys",
          icon: "fa-solid fa-comment-dots",
        },
        { title: "Epic", url: "/feature", icon: "fa-regular fa-snowflake" },
        { title: "Reporter", url: "/logger", icon: "fa-solid fa-address-book" },

        { title: "Category", url: "/category", icon: "fa-solid fa-code-branch" },
        { title: "Tags", url: "/tags", icon: "fa-sharp fa-solid fa-tags" },
        { title: "Member", url: "/member", icon: "fa-solid fa-people-group" },
        { title: "hr", url: " ", icon: " " },
        { title: "My Account", url: "/account", icon: "fa-solid fa-user" },
        { title: "Log out", url: "/login", icon: "fa-solid fa-arrow-right-from-bracket" },
      ],
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
  min-width: 160px;
  max-width: 160px;
  color: #fff;
  transition: all 0.3s;
  /* padding-left: 5px;
  padding-right: 5px; */
  padding-bottom: 5px;
  padding-top: 0px;
}

#sidebar.active {
  margin-left: -160px;
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
    margin-left: -160px;
  }

  #sidebar.active {
    margin-left: 0;
  }

  #sidebarCollapse span {
    display: none;
  }
}
</style>
