
import { reactive } from 'vue'

export const constants = reactive({
    IS_LOGGED_IN: true,

    BOARD_STATUS:

    ['ACTIVE', 'INACTIVE'],


    FEATURE_STATUS:

        ['OPEN', 'INPROGRESS', 'COMPLETED', 'REOPENED', 'CLOSED', 'ARCHIVED'],



    FEEDBACK_STATUS:

        ['NEW', 'ASSIGNED', 'INPROGRESS', 'TRASH', 'COMPLETED', 'SPAM', 'ARCHIVED'],



    GENERIC_STATUS:

        ['ACTIVE', 'INACTIVE'],



    MEMBER_STATUS:

        ['INVITED', 'ACTIVE', 'INACTIVE', 'TRASH'],

    MEMBER_ROLE: ['ADMIN', 'MEMBER']


})