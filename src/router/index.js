import { createWebHistory, createRouter } from "vue-router";
import DaysView from "@/components/daysview/DaysView";
import MainMenu from "@/components/mainmenu/MainMenu";
import NotFound from "@/components/NotFound";

const routes = [
  {
    path: "/",
    name: "main",
    components: {
      mainmenu: MainMenu,
      default: DaysView
    }
  },
  {
    path: "/daysview",
    name: "daysview",
    components: {
      mainmenu: MainMenu,
      default: DaysView
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    components: {
      mainmenu: MainMenu,
      default: NotFound
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
