export const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: () => import("@/views/Home") },
  { path: "/ch", component: () => import("@/components/CodingHappier") },
];
