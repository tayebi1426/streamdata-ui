import React from 'react'
import DefaultLayout from "../../components/layouts/DefaultLayout";

let LoginPage = React.lazy(() => import("../ui/LoginPage"));
let FormsUi = React.lazy(() => import("../ui/FormUi"));
let GridUi = React.lazy(() => import("../ui/GridUi"));
let TabComponent = React.lazy(() => import("../ui/TabComponent"));
let TreeComponent = React.lazy(() => import("../ui/TreeComponent"));
let FormValidation = React.lazy(() => import("../ui/FormValidation"));
let Editor = React.lazy(() => import("../ui/Editor"));
let Button = React.lazy(() => import("../ui/Button"));
let Icon = React.lazy(() => import("../ui/Icon"));
let DialogUi = React.lazy(() => import("../ui/DialogUi"));
let ImageGalleryUi = React.lazy(() => import("../ui/ImageGalleryUi"));
/*let FileUploader = React.lazy(() => import("../ui/FileUploader"));*/

const MAIN_ROUTES = [
    {path: '/form', component: FormsUi},
    {path: '/formValidation', component: FormValidation},
    {path: '/grid', component: GridUi},
    {path: '/tab', component: TabComponent, access: []},
    {path: '/tree', component: TreeComponent, access: []},
    {path: '/editor', component: Editor, access: []},
    {path: '/button', component: Button, access: []},
    {path: '/icon', component: Icon, access: []},
    {path: '/dialog', component: DialogUi, access: []},
    {path: '/imageGallery', component: ImageGalleryUi, access: []},
    /*  {path: '/fileupload', component: FileUploader,access:[]},    */
];
const APP_ROUTES = [
    {path: '/login', component: LoginPage},
    {path: '/404', component: null},
    {
        path: '/', component: (props) => {
            return <DefaultLayout {...props} mainRoutes={MAIN_ROUTES}/>
        }
    }
];

export default APP_ROUTES;
