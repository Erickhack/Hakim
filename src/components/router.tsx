import { Fragment, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import { LayoutDefault } from "./layout/LayoutDefault";
import { LayoutAdmin } from "./layout/LayoutAdmin";
import { urls } from "./interfaces";
import { Auth } from "../components/feature/Admin/Auth/Auth";
import "./GlobalStyle.scss";

const routesConfig = [
  {
    path: urls.admin,
    layout: LayoutAdmin,
    guard: Auth,
    routes: [
      {
        path: urls.admin,
        exact: true,
        component: lazy(() =>
          import("../components/feature/Admin/Auth/Auth").then((module) => ({
            default: module.Auth,
          }))
        ),
      },
      {
        path: urls.loginAdmin,
        exact: true,
        component: lazy(() =>
          import("./feature/Admin/LogIn/LogIn").then((module) => ({
            default: module.LogIn,
          }))
        ),
      },
    ],
  },
  {
    path: "/",
    layout: LayoutDefault,
    routes: [
      {
        path: "/",
        exact: true,
        component: () => <Redirect to={urls.main} />,
      },
      {
        exact: true,
        path: urls.main,
        component: lazy(() =>
          import("./feature/Main/AboutUnior/AboutUnior").then((module) => ({
            default: module.AboutUnior,
          }))
        ),
      },
      {
        path: urls.regUsers,
        exact: true,
        component: lazy(() =>
          import("./feature/Main/RegisterUser/RegisterUser").then((module) => ({
            default: module.RegisterUser,
          }))
        ),
      },
      {
        path: urls.seminar,
        exact: true,
        component: lazy(() =>
          import("./feature/Main/Seminars/Seminars").then((module) => ({
            default: module.Seminars,
          }))
        ),
      },
    ],
  },
];

const renderRoutes = (routes: any) =>
  routes ? (
    <Suspense fallback={<>Loading...</>}>
      <Switch>
        {routes.map((route: any, i: number) => {
          const Layout = route.layout || Fragment;
          const Guard = route.guard || Fragment;
          const Component = route.component;

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props: any) => {
                return (
                  <Guard>
                    <Layout>
                      {route.routes ? (
                        renderRoutes(route.routes)
                      ) : (
                        <Component {...props} />
                      )}
                    </Layout>
                  </Guard>
                );
              }}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;

export const Routes = () => {
  return renderRoutes(routesConfig);
};
