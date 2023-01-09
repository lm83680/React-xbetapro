import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import App from "App";


const Iroute = {
  path: string,
  component: React.FC,
  children: Iroute
}

Iroute = [
  {
    path: "/",
    component: App,
    children: [
      { path: "edit", component: lazy(() => import("../views/Edit")) },
      { path: "list", component: lazy(() => import("../views/List")) },
    ],
  },
  { path: "/login", component: lazy(() => import("../views/Login")) },
  { path: "/register", component: lazy(() => import("../views/Register")) },
];

const MyRouter = () => (
  <Router>
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {
          routeArr.map((item, index) => (
            <Route key={index} path={item.path} element={<item.component />}></Route>
          ))
        }
      </Routes>
    </Suspense>
  </Router>
);

export default MyRouter;