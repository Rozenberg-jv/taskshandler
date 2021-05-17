import { createWebHistory, createRouter } from "vue-router";
import DaysView from "@/components/daysview/DaysView";
import MainMenu from "@/components/mainmenu/MainMenu";
import RozenCalendar from "@/components/calendarview/RozenCalendar";
import NotFound from "@/components/NotFound";

const routes = [
  {
    path: "/",
    name: "main",
    components: {
      mainmenu: MainMenu,
      default: RozenCalendar
    }
  },
  {
    path: "/days",
    name: "daysview",
    components: {
      mainmenu: MainMenu,
      default: DaysView
    }
  },
  {
    path: "/calendar",
    name: "calendarview",
    components: {
      mainmenu: MainMenu,
      default: RozenCalendar
    }
  },
  {
    path: "/notimpl",
    name: "notimplemented",
    components: {
      mainmenu: MainMenu,
      default: NotFound
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
