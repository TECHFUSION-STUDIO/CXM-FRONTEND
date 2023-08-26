
import { reactive } from 'vue'

export const store = reactive({
    // isLoggedIn : (localStorage.getItem('jwt') != null)? true: false,
    isLoggedIn: true,
    feedbackProp: [
        "id",
        "businessId",
        "projectId",
        "boardId",
        "surveyFormId",
        "formSubmissionId",
        "loggerId",
        "assigneeId",
        "postedById",
        "ownedById",
        "questionId",
        "feedbackDescription",
        "feedbackAdditionalDetail",
        "feedbackStatus",
        "feedbackCategory",
        "feedbackPriority",
        "feedbackImpact",
        "feedbackEffort",
        "lastModified",
        "addedDateTime"
    ],
    filterOperation: [
        "GREATER_THAN",
        "LESS_THAN",
        "GREATER_THAN_EQUAL",
        "LESS_THAN_EQUAL",
        "NOT_EQUAL",
        "EQUAL",
        "MATCH",
        "MATCH_START",
        "MATCH_END",
        "IN",
        "NOT_IN",
        "ORDER_BY_ASC",
        "ORDER_BY_DESC"
    ],
    feedbackStatus: [
        "OPEN",
        "FILTERED", "PLANNED", "PROGRESS", "DONE", "CLOSED", "REOPENED",
    ],
})