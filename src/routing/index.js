import React from 'react'
import DefaultLayout from "../pages/layouts/DefaultLayout";

let LoginPage = React.lazy(() => import("../pages/Login"));
let PersonList = React.lazy(() => import("../pages/PersonList"));
let AddPerson = React.lazy(() => import("../pages/AddPerson"));

const MAIN_ROUTES = [
    {path: '/person', component: PersonList},
    {path: '/person/new', component: AddPerson}
];

const Layout = (props) => <DefaultLayout {...props} mainRoutes={MAIN_ROUTES}/>;

const APP_ROUTES = [
    {path: '/login', component: LoginPage},
    {path: '/404', component: null},
    {path: '/', exact: false, component: Layout}
];

export default APP_ROUTES;