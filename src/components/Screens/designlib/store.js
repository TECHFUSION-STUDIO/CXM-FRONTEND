
import { reactive } from 'vue'

export const store = reactive({
    // isLoggedIn : (localStorage.getItem('jwt') != null)? true: false,
    isLoggedIn: true,
    feedbackProp: [
        {key:"id", value: 'Feedback Id'},
         {key:"businessId", value: 'Business Id'},
         {key:"projectId",  value: 'Project Id'},
         {key:"boardId", value: 'Board Id'},
         {key:"surveyFormId", value: 'Survey Id'},
         {key:"formSubmissionId", value: 'Submission Id'},
         {key:"loggerId", value: 'Logger Id'},
         {key:"assigneeId", value: 'Assignee Id'},
         {key:"postedById", value: 'Posted Id'},
         {key:"ownedById", value: 'Owner Id'},
         {key:"questionId", value: 'Question Id'},
         {key:"feedbackDescription", value: 'Feedback Description'},
         {key:"feedbackAdditionalDetail", value: 'Additional Details'},
         {key:"feedbackStatus", value: 'Status'},
         {key:"feedbackCategory", value: 'Category'},
         {key:"feedbackPriority", value: 'Priority'},
         {key:"feedbackImpact", value: 'Impact'},
         {key:"feedbackEffort", value: 'Effort'},
         {key:"lastModified", value: 'Feedback Last Modified on'},
         {key:"addedDateTime", value: 'Feedback Created on'}
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