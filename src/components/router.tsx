import { Fragment, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LayoutDefault } from "./layout/LayoutDefault";
import { urls } from "./interfaces";

const routesConfig = [
  {
    path: "/",
    layout: LayoutDefault,
    routes: [
      {
        path: "/admin",
        exact: true,
        component: () => <Redirect to={urls.main} />,
      },
      {
        exact: true,
        path: urls.main,
        component: lazy(() =>
          import("./feature/Main/AboutUnior/AboutUnior").then((module) => ({
            default: module.default,
          }))
        ),
      },
      {
        path: urls.regUsers,
        exact: true,
        component: lazy(() =>
          import("./feature/Main/RegisterUser/RegisterUser").then((module) => ({
            default: module.default,
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
              render={(props: any) => (
                <Guard>
                  <Switch>
                    <Layout>
                      {route.routes ? (
                        renderRoutes(route.routes)
                      ) : (
                        <Component {...props} />
                      )}
                    </Layout>
                  </Switch>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;

export const Routes = () => {
  return renderRoutes(routesConfig);
};
