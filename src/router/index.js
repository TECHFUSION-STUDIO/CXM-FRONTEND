import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/setup',
    name: 'setup',
    component: () => import(/* webpackChunkName: "about" */ '../components/SetupScreen.vue'),
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
        path: '/account',
        name: 'account',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/MyAccount.vue'),
      },

      {
        path: '/createproject',
        name: 'createproject',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/CreateProjectScreen.vue'),
      },
      {
        path: '/feature',
        name: 'feature',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/FeatureScreen.vue'),
      },

      {
        path: '/createfeature',
        name: 'createfeature',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/CreateFeatureScreen.vue'),
      },

      {
        path: '/editfeature/:featureId',
        name: 'editfeature',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/EditFeatureScreen.vue'),
      },

      {
        path: '/feature/:featureId',
        name: 'featureDetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/FeatureDetailScreen.vue'),
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
        path: '/editsurvey/:surveyId',
        name: 'editsurvey',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/EditSurveyScreen.vue'),
      },

      {
        path: '/surveys/:surveyId',
        name: 'surveysdetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/SurveyDetailScreen.vue'),
        children: [
          {
            path: '/surveys/:surveyId/question',
            name: 'surveyquestion',
            component: () => import(/* webpackChunkName: "about" */ '../components/Screens/SurveyQuestionScreen.vue'),
          },
          {
            path: '/surveys/:surveyId/responses',
            name: 'surveyresponses',
            component: () => import(/* webpackChunkName: "about" */ '../components/Screens/RawFeedbackScreen.vue'),
          },

          {
            path: '/surveys/:surveyId/submission',
            name: 'surveysubmission',
            component: () => import(/* webpackChunkName: "about" */ '../components/Screens/SurveySubmissionScreen.vue'),
          },

          {
            path: '/surveys/:surveyId/loggers',
            name: 'surveyloggers',
            component: () => import(/* webpackChunkName: "about" */ '../components/Screens/SurveyLoggerScreen.vue'),
          },

          {
            path: '/surveys/:surveyId/settings',
            name: 'surveysettings',
            component: () => import(/* webpackChunkName: "about" */ '../components/Screens/SurveySettingScreen.vue'),
          },
     
        ]
      },

      {
        path: '/surveys/:surveyId/submission/:submissionId',
        name: 'surveysubmissiondetail',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/SurveySubmissionDetailScreen.vue'),
      },

      // {
      //   path: '/surveys/:surveyId/raw',
      //   name: 'rawfeedbackscreen',
      //   component: () => import(/* webpackChunkName: "about" */ '../components/Screens/RawFeedbackScreen.vue'),
      // },
      {
        path: '/surveys/:surveyId/createquestion',
        name: 'createquestion',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/CreateSurveyQuestion.vue'),
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
        path: '/member',
        name: 'member',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/MemberScreen.vue'),
      },

    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../components/LoginScreen.vue')
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: () => import(/* webpackChunkName: "about" */ '../components/ForgotPasswordScreen.vue')
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: () => import(/* webpackChunkName: "about" */ '../components/ResetPasswordScreen.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../components/SignupScreen.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
