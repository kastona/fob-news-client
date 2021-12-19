import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a253136e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0c1ef74e = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _6f909086 = () => interopDefault(import('../pages/interviews.vue' /* webpackChunkName: "pages/interviews" */))
const _06020ae8 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _2184c3ec = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _79f067cc = () => interopDefault(import('../pages/videos.vue' /* webpackChunkName: "pages/videos" */))
const _2ffed2cd = () => interopDefault(import('../pages/admin/create-post.vue' /* webpackChunkName: "pages/admin/create-post" */))
const _2b277e80 = () => interopDefault(import('../pages/admin/messages.vue' /* webpackChunkName: "pages/admin/messages" */))
const _2a41e62a = () => interopDefault(import('../pages/news/crime.vue' /* webpackChunkName: "pages/news/crime" */))
const _3af9b44e = () => interopDefault(import('../pages/news/politics.vue' /* webpackChunkName: "pages/news/politics" */))
const _6a23f4aa = () => interopDefault(import('../pages/admin/edit-post/_id.vue' /* webpackChunkName: "pages/admin/edit-post/_id" */))
const _1ffb9346 = () => interopDefault(import('../pages/news/_id/_title.vue' /* webpackChunkName: "pages/news/_id/_title" */))
const _62e35de4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _a253136e,
    name: "about"
  }, {
    path: "/admin",
    component: _0c1ef74e,
    name: "admin"
  }, {
    path: "/interviews",
    component: _6f909086,
    name: "interviews"
  }, {
    path: "/login",
    component: _06020ae8,
    name: "login"
  }, {
    path: "/news",
    component: _2184c3ec,
    name: "news"
  }, {
    path: "/videos",
    component: _79f067cc,
    name: "videos"
  }, {
    path: "/admin/create-post",
    component: _2ffed2cd,
    name: "admin-create-post"
  }, {
    path: "/admin/messages",
    component: _2b277e80,
    name: "admin-messages"
  }, {
    path: "/news/crime",
    component: _2a41e62a,
    name: "news-crime"
  }, {
    path: "/news/politics",
    component: _3af9b44e,
    name: "news-politics"
  }, {
    path: "/admin/edit-post/:id?",
    component: _6a23f4aa,
    name: "admin-edit-post-id"
  }, {
    path: "/news/:id/:title?",
    component: _1ffb9346,
    name: "news-id-title"
  }, {
    path: "/",
    component: _62e35de4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
