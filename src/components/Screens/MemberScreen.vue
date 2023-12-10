<template>
  <div>
    <div class="bg-white shadow shadow-sm mt-1 p-2">
      <nav class="m-0 p-0 bg-white" aria-label="breadcrumb">
        Showing Project Members <i>for project id BMRC-9877</i>
      </nav>
    </div>

    <div class="bg-white shadow shadow-sm mt-3 p-3 table-responsive">
      <p class="text-muted fs-5 text-center">Member Invitation Feature Coming Soon</p>
    </div>

    <!-- <div class="bg-white shadow shadow-sm mt-3 p-3 table-responsive">
      <button
        class="btn btn-primary mt-2"
        @click.prevent="showInviteMemberMenu = true"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdropCreateMember"
        aria-controls="staticBackdropCreateMember"
      >
        Invite Member
      </button>
      <div class="input-group mt-3 mx-auto w-50">
        <input
          class="form-control"
          type="search"
          placeholder="Search Members"
          aria-label="Search"
        />
        <button class="btn btn-primary">
          <i class="fa-brands fa-searchengin"></i>
        </button>
      </div>

      <table class="table table-hover table-bordered mt-3">
        <thead>
          <tr class="bg-light">
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Status</td>
            <td>Added Date</td>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="item in memberList" :key="item.id">
            <td>
              <a
                id="feedbackTitle"
                @click="this.$router.push('/memberdetail/' + item.id)"
                >{{ item.id }}</a
              >
            </td>
            <td>{{ item.memberName }}</td>
            <td>
              <a
                id="feedbackTitle"
                @click="this.$router.push('/memberdetail/' + item.id)"
                >{{ item.memberEmail }}</a
              >
            </td>
            <td>{{ item.memberName }}</td>
            <td>
              {{ item.memberProjectRole }}
            </td>
            <td>
              {{ item.memberStatus }}
            </td>
            <td>{{ item.addedDateTime }}</td>
          </tr>
          <tr v-if="memberList.length == 0">
            <td class="text-center" colspan="6"><i>No Data Found</i></td>
          </tr>
        </tbody>
      </table>
    </div> -->

    <!-- <div
      class="offcanvas offcanvas-end"
      :class="showInviteMemberMenu ? 'show' : ''"
      tabindex="-1"
      :style="{ visibility: showInviteMemberMenu ? 'visible' : 'hidden' }"
      data-bs-backdrop="static"
      id="staticBackdropCreateMember"
      aria-labelledby="staticBackdropCreateMemberLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="staticBackdropCCreateMemberLabel">
          Invite Member
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click.prevent="showInviteMemberMenu = false"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <label class="typo__label">Add Email to invite</label>
          <multiselect
            class="mt-2"
            v-model="inviteMember.value"
            tag-placeholder=""
            placeholder="Add email"
            label="name"
            track-by="name"
            :options="inviteMember.options"
            :multiple="true"
            :taggable="true"
            @tag="addTag"
          ></multiselect>

          <div class="text-end mt-4">
            <button class="btn btn-primary btn-sm m-1">Send Invitation</button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import axioscon from "../../axioscon.js";
// import Multiselect from "vue-multiselect";

export default {
  name: "ProjectMemberScreen",
  components: {
    // Multiselect,
  },
  data() {
    return {
      memberList: [],
      showInviteMemberMenu: false,
      inviteMember: {
        value: [],
        options: [],
      },

      axioscon,
    };
  },
  mounted() {
    this.fetchAllMember();
  },
  methods: {
    fetchAllMember() {
      axioscon
        .get("/getMember?businessId=1&projectId=1")
        .then((res) => {
          console.log(res);
          this.memberList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
      };
      this.inviteMember.options.push(tag);
      this.inviteMember.value.push(tag);
    },
  },
};
</script>

<style lang="css" scoped></style>
