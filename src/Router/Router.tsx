import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../components/pages/HomePage";
import UserTable from "../components/pages/UserPage/UserTable";
import UserPage from "../components/pages/UserPage/UserPage";
import EventPage from "../components/pages/EventPage/EventPage";
import NotFoundPage from "../components/pages/NotFound/NotFoundPage";
import OwnEventsPage from "../components/pages/OwnEventsPage/OwnEventsPage";
import EventsManagePage from "../components/pages/EventsManage/EventsManagePage";
import authorities from "../config/Authorities";
import ProfilePage from "../components/pages/ProfilePage/ProfilePage";
import AdminDashboardHomePage from "../components/pages/AdminDashboardHomePage/AdminDashboardHomePage";
import AdminUserManagePage from "../components/pages/AdminUserManagePage/AdminUserManagePage";

/**
 * Router component renders a route switch with all available pages
 */

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route
        path={"/users"}
        element={<PrivateRoute authorities={[]} element={<UserTable />} />}
      />
      <Route
        path={"/events"}
        element={<PrivateRoute authorities={[]} element={<EventPage />} />}
      />
      <Route
        path={"/ownevents"}
        element={<PrivateRoute authorities={[]} element={<OwnEventsPage />} />}
      />
      <Route
        path="/useredit"
        element={
          <PrivateRoute authorities={[]} element={<UserPage />}></PrivateRoute>
        }
      />
      <Route
        path="/useredit/:userId"
        element={
          <PrivateRoute authorities={[]} element={<UserPage />}></PrivateRoute>
        }
      />
       <Route
        path="/admin"
        element={
          <PrivateRoute authorities={[{
            id:"21c942db-a275-43f8-bdd6-d048c21bf5ab",
            name: authorities.USER_DELETE
          }]} element={<AdminDashboardHomePage />}></PrivateRoute>
        }
      />
      <Route
        path="/admin/events"
        element={
          <PrivateRoute authorities={[{
            id:"21c942db-a275-43f8-bdd6-d048c21bf5ab",
            name: authorities.USER_DELETE
          }]} element={<EventsManagePage />}></PrivateRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <PrivateRoute authorities={[{
            id:"21c942db-a275-43f8-bdd6-d048c21bf5ab",
            name: authorities.USER_DELETE
          }]} element={<AdminUserManagePage />}></PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute authorities={[]} element={
          <ProfilePage />}></PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
};

export default Router;
