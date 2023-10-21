
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
         {key:"GREATER_THAN", value:"Greater Than (>)"},
         {key:"LESS_THAN", value:"Less Than (<)"},
         {key:"GREATER_THAN_EQUAL", value:"Greater Than Equal To (>=)"},
         {key:"LESS_THAN_EQUAL", value:"Less Than Equal To (<=)"},
         {key:"NOT_EQUAL", value:"Not Equal To (!=)"},
         {key:"EQUAL", value:"Equals (=)"},
         {key:"MATCH", value:"Contains"},
        //  {key:"MATCH_START", value:"Starts With"},
        //  {key:"MATCH_END",value:"Ends With"},
        //  {key:"IN", value:"Present In"},
        //  {key:"NOT_IN", value:"Not Present In"},
        //  {key:"ORDER_BY_ASC", value:"Order By Descending Order"},
        //  {key:"ORDER_BY_DESC", value:"Order By Ascending Order"}
    ],
    feedbackStatus: [
        "OPEN",
        "FILTERED", "PLANNED", "PROGRESS", "DONE", "CLOSED", "REOPENED",
    ],
})