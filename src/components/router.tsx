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
        path: urls.loginAdmin,
        exact: true,
        component: lazy(() =>
          import("../components/feature/Admin/LogIn/LogIn").then((module) => ({
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
      {
        exact: true,
        path: urls.booklet,
        component: lazy(() =>
          import("./feature/Main/BOOKLET").then((module) => ({
            default: module.Booklet,
          }))
        ),
      },
      {
        exact: true,
        path: urls.ARCHIVE,
        component: lazy(() =>
          import("./feature/Main/ARCHIVE").then((module) => ({
            default: module.ARCHIVE,
          }))
        ),
      },
      {
        exact: true,
        path: urls.COLLEGESEMINAR,
        component: lazy(() =>
          import("./feature/Main/COLLEGESEMINAR").then((module) => ({
            default: module.COLLEGESEMINAR,
          }))
        ),
      },
      {
        exact: true,
        path: urls.THESTUDENTSCOUNCIL,
        component: lazy(() =>
          import("./feature/Main/THESTUDENTSCOUNCIL").then((module) => ({
            default: module.THESTUDENTSCOUNCIL,
          }))
        ),
      },
      {
        exact: true,
        path: urls.REFERENCE,
        component: lazy(() =>
          import("./feature/Main/REFERENCE").then((module) => ({
            default: module.REFERENCE,
          }))
        ),
      },
      {
        exact: true,
        path: urls.CURRENTTIPS,
        component: lazy(() =>
          import("./feature/Main/CURRENTTIPS").then((module) => ({
            default: module.CURRENTTIPS,
          }))
        ),
      },
      {
        exact: true,
        path: urls.DEPARTMENTOFNUMBERTHEORYALGEBRAANDTOPOLOGY,
        component: lazy(() =>
          import(
            "./feature/Main/DEPARTMENTOFNUMBERTHEORYALGEBRAANDTOPOLOGY"
          ).then((module) => ({
            default: module.DEPARTMENTOFNUMBERTHEORYALGEBRAANDTOPOLOGY,
          }))
        ),
      },
      {
        exact: true,
        path: urls.DIFFERENTIALEQUATIONSDEPARTMENT,
        component: lazy(() =>
          import("./feature/Main/DIFFERENTIALEQUATIONSDEPARTMENT").then(
            (module) => ({
              default: module.DIFFERENTIALEQUATIONSDEPARTMENT,
            })
          )
        ),
      },
      {
        exact: true,
        path: urls.DEPARTMENTOFFUNCTIONTHEORYANDFUNCTIONALANALYSIS,
        component: lazy(() =>
          import(
            "./feature/Main/DEPARTMENTOFFUNCTIONTHEORYANDFUNCTIONALANALYSIS"
          ).then((module) => ({
            default: module.DEPARTMENTOFFUNCTIONTHEORYANDFUNCTIONALANALYSIS,
          }))
        ),
      },
      {
        exact: true,
        path: urls.DEPARTMENTOFAPPLIEDMATHEMATICSANDMECHANICS,
        component: lazy(() =>
          import(
            "./feature/Main/DEPARTMENTOFAPPLIEDMATHEMATICSANDMECHANICS"
          ).then((module) => ({
            default: module.DEPARTMENTOFAPPLIEDMATHEMATICSANDMECHANICS,
          }))
        ),
      },
      {
        exact: true,
        path: urls.DEPARTMENTOFMATHEMATICALMODELING,
        component: lazy(() =>
          import("./feature/Main/DEPARTMENTOFMATHEMATICALMODELING").then(
            (module) => ({
              default: module.DEPARTMENTOFMATHEMATICALMODELING,
            })
          )
        ),
      },
      {
        exact: true,
        path: urls.CONSTRUCTORS,
        component: lazy(() =>
          import("./feature/Main/CONSTRUCTORS").then((module) => ({
            default: module.CONSTRUCTORS,
          }))
        ),
      },
      {
        exact: true,
        path: urls.SEMINARSOFTHERUSSIANACADEMYOFSCIENCES,
        component: lazy(() =>
          import("./feature/Main/SEMINARSOFTHERUSSIANACADEMYOFSCIENCES").then(
            (module) => ({
              default: module.SEMINARSOFTHERUSSIANACADEMYOFSCIENCES,
            })
          )
        ),
      },
      {
        exact: true,
        path: urls.NEWS,
        component: lazy(() =>
          import("./feature/Main/NEWS").then((module) => ({
            default: module.NEWS,
          }))
        ),
      },
      {
        exact: true,
        path: urls.CONFERENCEPROCEEDINGS,
        component: lazy(() =>
          import("./feature/Main/CONFERENCEPROCEEDINGS").then((module) => ({
            default: module.CONFERENCEPROCEEDINGS,
          }))
        ),
      },
      {
        exact: true,
        path: urls.REPORTSOFTHEACADEMYOFSCIENCESOFTHEREPUBLICOFTATARSTAN,
        component: lazy(() =>
          import(
            "./feature/Main/REPORTSOFTHEACADEMYOFSCIENCESOFTHEREPUBLICOFTATARSTAN"
          ).then((module) => ({
            default:
              module.REPORTSOFTHEACADEMYOFSCIENCESOFTHEREPUBLICOFTATARSTAN,
          }))
        ),
      },
      {
        exact: true,
        path: urls.IZVESTIAOFTHEACADEMYOFSCIENCESOFTHEREPUBLICOFTATARSTAN,
        component: lazy(() =>
          import(
            "./feature/Main/IZVESTIAOFTHEACADEMYOFSCIENCESOFTHEREPUBLICOFTATARSTAN"
          ).then((module) => ({
            default:
              module.IZVESTIAOFTHEACADEMYOFSCIENCESOFTHEREPUBLICOFTATARSTAN,
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
