import { createRouter, createWebHistory } from "vue-router";
// import User from "@/views/dashboard/User.vue";
import Login from "@/views/dashboard/Login.vue";

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory("/"),
  routes: [
    //   {
    //     path: "/login",
    //     redirect: "/dashboard",
    //     name: "login",
    //     component: () =>
    //             import("@/views/dashboard/Login.vue"),
    //     meta: {
    //       requiresVisitor: true,
    //     },
    // },
    // {
    //     path: "/user",
    //     redirect: "/dashboard",
    //     name: "user",
    //     component: () =>
    //             import("@/views/dashboard/User.vue"),
    //     meta: {
    //       requiresAuth: true,
    //     },
    // },
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/layouts/full/FullLayout.vue"),
      children: [
        {
          name: "Dashboard",
          path: "/dashboard",
          component: () =>
            import("@/views/dashboard/Dashboard.vue"),
        },
        {
          name: "My Journals",
          path: "ui-components/alert",
          component: () =>
            import("@/views/ui-components/Alerts.vue"),
        },
        {
          name: "About Us",
          path: "ui-components/buttons",
          component: () =>
            import("@/views/ui-components/Buttons.vue"),
        },
        {
          path: "/login",
          name: "login",
          component: () =>
                  import("@/views/dashboard/Login.vue"),
          meta: {
            requiresVisitor: true,
          },
        },
        {
          path: "/signin",
          name: "signin",
          component: () =>
                  import("@/views/dashboard/SignIn.vue"),
          meta: {
            requiresVisitor: true,
          },
        }
        // {
        //   name: "Cards",
        //   path: "ui-components/cards",
        //   component: () =>
        //     import("@/views/ui-components/Cards.vue"),
        // },
        // {
        //   name: "Menus",
        //   path: "ui-components/menus",
        //   component: () =>
        //     import("@/views/ui-components/Menus.vue"),
        // },
        // {
        //   name: "Tables",
        //   path: "ui-components/tables",
        //   component: () =>
        //     import("@/views/ui-components/Tables.vue"),
        // },
      ],
    },
  ],
});

export default router;
