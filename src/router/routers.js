export const routes = [
  { path: "/home", component: () => import("@/views/Home") },
  { path: "/ch", component: () => import("@/components/CodingHappier") },
];
