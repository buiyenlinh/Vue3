import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Auth/pages/login/index.vue";
import Admin from "@/views/admin/Admin.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/admin/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  // {
  //   path: "/posts/:id",
  //   name: "DetailsPost",
  //   component: () =>
  //     import(/* webpackChunkName: "details post" */ "../views/DetailsPost.vue"),
  //   props: true
  // },
  // { 
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: () => import(/* webpackChunkName: "details post" */ "../views/NotFound.vue"),
  // },
  // 
  // {
  //   path: '/users/:username',
  //   name: 'UserInfo',
  //   component: () => import(/* webpackChunkName: "Users" */"../views/Users.vue"),
  //   children: [
  //     {
  //       path: '',
  //       component: () => import(/* webpackChunkName: "Users Home" */"../components/UserHome.vue")
  //     },
  //     {
  //       path: 'profile',
  //       component: () => import(/* webpackChunkName: "Users Profile "*/"../components/UserProfile.vue"),
  //     }
  //   ]
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
