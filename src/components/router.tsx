import { FC, Fragment, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import { LayoutDefault } from "./layout/LayoutDefault";

enum urls {
  main = "/main",
  regUsers = "/regiserUser",
  booklet = "/booklet",
  loginAdmin = "",
}

const TruAouth: FC = ({ children }) => {
  return <>{children}</>;
};

const routesConfig = [
  {
    path: "/",
    layout: LayoutDefault,
    guard: TruAouth,
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
            default: module.default,
          }))
        ),
      },
      {
        path: urls.regUsers,
        exact: true,
        component: lazy(() =>
          import("./feature/Main/RegisterUser/RegisterUser").then((module) => ({
            default: module.AboutUnior,
          }))
        ),
      },
    ],
  },
  // {
  //   path: urls.login,
  //   layout: Login,
  //   routes: [
  //     {
  //       exact: true,
  //       path: urls.login,
  //       component: lazy(() =>
  //         import("../components/Authorized/Authorized").then((module) => ({
  //           default: module.Authorized,
  //         }))
  //       ),
  //     },
  //   ],
  // },
  // {
  //   path: "/",
  //   layout: MainView,
  //   guard: AuthGuard,
  //   routes: [
  //     {
  //       exact: true,
  //       path: "/",
  //       component: () => <Redirect to={urls.categories} />,
  //     },
  //   ],
  // },
];

const renderRoutes = (routes: any) =>
  routes ? (
    <Suspense fallback={<>test</>}>
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
