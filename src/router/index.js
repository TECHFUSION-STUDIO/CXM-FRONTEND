import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
        path: '/editsurveys/:surveyId',
        name: 'editsurveys',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/EditSurveyScreen.vue'),
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
        path: '/surveys/:surveyId/filtered',
        name: 'filteredfeedbackscreen',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/FilteredFeedbackScreen.vue'),
      },
      {
        path: '/surveys/:surveyId/bin',
        name: 'binfeedbackscreen',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/BinFeedbackScreen.vue'),
      },
      {
        path: '/surveys/:surveyId/done',
        name: 'donefeedbackscreen',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/DoneFeedbackScreen.vue'),
      },
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
        path: '/feedbackdetail/raw/:fid',
        name: 'feedbackdetailraw',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/RawFeedbackDetailScreen.vue'),
      },

      {
        path: '/feedbackdetail/filtered/:fid',
        name: 'feedbackdetailfiltered',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/FilteredFeedbackDetailScreen.vue'),
      },
      {
        path: '/logger',
        name: 'logger',
        component: () => import(/* webpackChunkName: "about" */ '../components/Screens/LoggerScreen.vue'),
      },
      {
        path: '/loggerdetail',
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
      }

    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
