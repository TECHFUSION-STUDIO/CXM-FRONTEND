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
  </div>
</template>

<script>
import axioscon from "../../axioscon.js";

export default {
  name: "ProjectMemberScreen",

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
        .get("/getMember?businessId=1&workspaceId=1")
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
