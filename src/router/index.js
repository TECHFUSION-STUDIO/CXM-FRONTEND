import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
        path: '/setup',
        name: 'setup',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/SetupScreen.vue'),
      },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../components/LayoutDefault.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/DashboardScreen.vue'),
      },

      {
        path: '/createproject',
        name: 'createproject',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/CreateProjectScreen.vue'),
      },
      {
        path: '/surveys',
        name: 'surveys',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/SurveyScreen.vue'),
      },
      {
        path: '/createsurveys',
        name: 'createsurveys',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/CreateSurveyScreen.vue'),
      },
    
      {
        path: '/surveys/:surveyId',
        name: 'surveysdetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/SurveyDetailScreen.vue'),
      },

      {
        path: '/surveys/:surveyId/raw',
        name: 'rawfeedbackscreen',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/RawFeedbackScreen.vue'),
      },
      {
        path: '/surveys/:surveyId/createquestion',
        name: 'createquestion',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/CreateSurveyQuestion.vue'),
      },
     
      {
        path: '/surveys/:surveyId/surveysettings/',
        name: 'surveysettings',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/SurveySettingScreen.vue'),
        children:[
          {
            path: '/surveys/:surveyId/surveysettings/question',
            name: 'surveysettingsquestion',
            component: () => import(/* webpackChunkName: "about" */ '../components/Screens/SurveyQuestionScreen.vue'),
          },
          {
            path: '/surveys/:surveyId/surveysettings/integration',
            name: 'surveysettingsintegration',
            component: () => import(/* webpackChunkName: "about" */ '../components/Screens/SurveyIntegrationScreen.vue'),
          },
          {
            path: '/surveys/:surveyId/surveysettings/general',
            name: 'surveysettingsgeneral',
            component: () => import(/* webpackChunkName: "about" */ '../components/Screens/EditSurveyScreen.vue'),
          },
        ]
      },
    
      {
        path: '/surveys/:surveyId/editquestion/:surveyQuestionId',
        name: 'editquestion',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/EditSurveyQuestion.vue'),
      },
      {
        path: '/feedbackdetail/:fid/',
        name: 'feedbackdetailraw',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/RawFeedbackDetailScreen.vue'),
      },

  
      {
        path: '/logger',
        name: 'logger',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/LoggerScreen.vue'),
      },
      {
        path: '/loggerdetail/:loggerId',
        name: 'loggerdetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/LoggerDetailScreen.vue'),
      },

      {
        path: '/board',
        name: 'board',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/BoardScreen.vue'),
      },
      {
        path: '/createboard',
        name: 'createboard',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/CreateBoardScreen.vue'),
      },
      {
        path: '/editboard/:boardId',
        name: 'editboard',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/EditBoardScreen.vue'),
      },
      {
        path: '/boarddetail/:boardId',
        name: 'boarddetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/BoardDetailScreen.vue'),
      },
      {
        path: '/category',
        name: 'category',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/CategoryScreen.vue'),
      },
      {
        path: '/createcategory',
        name: 'createcategory',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/CreateCategoryScreen.vue'),
      },
      {
        path: '/editcategory/:categoryId',
        name: 'editcategory',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/EditCategoryScreen.vue'),
      },
      {
        path: '/categorydetail/:categoryId',
        name: 'categorydetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/CategoryDetailScreen.vue'),
      },
      {
        path: '/tags',
        name: 'tags',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/TagScreen.vue'),
      },
      {
        path: '/createtags',
        name: 'createtags',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/CreateTagScreen.vue'),
      },
      {
        path: '/edittags/:tagId',
        name: 'edittags',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/EditTagScreen.vue'),
      },
      {
        path: '/tagsdetail/:tagId',
        name: 'tagsdetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/TagDetailScreen.vue'),
      },
      {
        path: '/projectmember',
        name: 'projectmember',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/ProjectMemberScreen.vue'),
      },
      {
        path: '/generalmember',
        name: 'generalmember',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/GeneralMemberScreen.vue'),
      },
      {
        path: '/createmember',
        name: 'createmember',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/CreateMemberScreen.vue'),
      },

      {
        path: '/editmember/:memberId',
        name: 'editmember',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/EditMemberScreen.vue'),
      },
      {
        path: '/memberdetail/:memberId',
        name: 'memberdetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/GeneralMemberDetailScreen.vue'),
      },
      {
        path: '/projectmemberdetail/:memberId',
        name: 'projectmemberdetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/ProjectMemberDetailScreen.vue'),
      },
    ] 
  },
  {
    path: '/login',
    name: 'login',

    component: () => import(/* webpackChunkName: "about" */ '../components/LoginLogup.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
