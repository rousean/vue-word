import Vue from 'vue'
import Router from 'vue-router'

// import Mine from '../pages/Mine/Mine.vue'
// import Train from '../pages/Train/Train.vue'
// import Word from '../pages/Word/Word.vue'
// 路由组件懒加载
const Word = require('@/pages/Word/Word.vue')
const Train = require('@/pages/Train/Train.vue')
const Mine = require('@/pages/Mine/Mine.vue')
const Shop = require('@/pages/Shop/Shop.vue')
const Find = require('@/pages/Find/Find.vue')
const BooksList = require('@/pages/BooksList/BooksList.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/word',
      name: 'Word',
      component: resolve => require.ensure([], () => resolve(Word), 'Word'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/train',
      name: 'Train',
      component: resolve => require.ensure([], () => resolve(Train), 'Train'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: resolve => require.ensure([], () => resolve(Mine), 'Mine'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shop',
      name: 'Shop',
      component: resolve => require.ensure([], () => resolve(Shop), 'Shop'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/find',
      name: 'Find',
      component: resolve => require.ensure([], () => resolve(Find), 'Find'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/bookslist',
      name: 'BooksList',
      component: resolve => require.ensure([], () => resolve(BooksList), 'BooksList')
    },
    {
      path: '/',
      redirect: '/word'
    }
  ]
})
