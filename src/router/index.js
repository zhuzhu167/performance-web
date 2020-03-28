import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import login from '@/pages/login'
import user from '@/pages/system/user'
import role from '@/pages/system/role'
import organize from '@/pages/system/organize'
import table from '@/pages/table'
import appeal from '@/pages/performance/ap/appeal'
import appeallist from '@/pages/performance/ap/appeallist'
import appealverify from '@/pages/performance/ap/appealverify'
import alltarget from '@/pages/performance/perf/alltarget'
import perflist from '@/pages/performance/perf/perflist'
import perfverify from '@/pages/performance/perf/perfverify'
import pertarget from '@/pages/performance/perf/pertarget'
import target from '@/pages/performance/perf/target'
import perfplan from '@/pages/performance/plan/perfplan'
import plandeal from '@/pages/performance/plan/plandeal'
import planlist from '@/pages/performance/plan/planlist'
import release from '@/pages/release'
import statistics from '@/pages/statistics'
import tasklist from '@/pages/tasklist'
import verifyrelease from '@/pages/verifyrelease'
Vue.use(Router)
// 路由
export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index,
      children: [{
          path: '/user',
          name: 'user',
          component: user
        },
        {
          path: '/role',
          name: 'role',
          component: role
        },
        {
          path: '/organize',
          name: 'organize',
          component: organize
        }, {
          path: '/table',
          name: 'table',
          component: table
        },
        {
          path: '/appeal',
          name: 'appeal',
          component: appeal
        },
        {
          path: '/appeallist',
          name: 'appeallist',
          component: appeallist
        },
        {
          path: '/appealverify',
          name: 'appealverify',
          component: appealverify
        },
        {
          path: '/alltarget',
          name: 'alltarget',
          component: alltarget
        },
        {
          path: '/perflist',
          name: 'perflist',
          component: perflist
        },
        {
          path: '/perfverify',
          name: 'perfverify',
          component: perfverify
        },
        {
          path: '/pertarget',
          name: 'pertarget',
          component: pertarget
        },
        {
          path: '/target',
          name: 'target',
          component: target
        },
        {
          path: '/perfplan',
          name: 'perfplan',
          component: perfplan
        },
        {
          path: '/plandeal',
          name: 'plandeal',
          component: plandeal
        },
        {
          path: '/planlist',
          name: 'planlist',
          component: planlist
        },
        {
          path: '/release',
          name: 'release',
          component: release
        },
        {
          path: '/statistics',
          name: 'statistics',
          component: statistics
        },
        {
          path: '/tasklist',
          name: 'tasklist',
          component: tasklist
        },
        {
          path: '/verifyrelease',
          name: 'verifyrelease',
          component: verifyrelease
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
