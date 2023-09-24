import axiosConn from "@/axioscon";
import { FeedbackStore } from "./FeedbackStore";

export default {

    data() {
        return {
            // feedbackDetails: {},
            // allBoards: [],
            // allTags: [],
            // allCategory: [],
            // testTemp: "No data",
            FeedbackStore
        }
    },

    methods: {
        
        fetchFeedbackDetail() {
            axiosConn
                .get(
                    "/getfeedbackdetailsbyid?businessId=1&feedbackType=FILTERED&projectId=" +
                    1 +
                    "&feedbackId=" +
                    this.id
                )
                .then((res) => {
                    console.log(res);
                    this.FeedbackStore.feedbackDetails = res.data.feedbackDetail;
                    this.FeedbackStore.allCategory = res.data.allCategory;
                    this.FeedbackStore.allBoards = res.data.allBoards;
                    this.FeedbackStore.allTags = res.data.allTags;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
}