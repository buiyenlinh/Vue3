import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => 
      import (/* webpackChunkName: "posts" */ "../views/Posts.vue")
    
  },
  {
    path: "/posts/:id",
    name: "DetailsPost",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "details post" */ "../views/DetailsPost.vue"),
    props: true
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "details post" */ "../views/NotFound.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => 
      import (/* webpackChunkName: "posts" */ "../views/Users.vue")
    
  },
  {
    path: '/users/:username',
    name: 'UserInfo',
    component: () => import(/* webpackChunkName: "Users" */"../views/Users.vue"),
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "Users Home" */"../components/UserHome.vue")
      },
      {
        path: 'profile',
        component: () => import(/* webpackChunkName: "Users Profile "*/"../components/UserProfile.vue"),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
