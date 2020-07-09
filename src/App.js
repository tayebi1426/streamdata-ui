import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {SwitchRouter} from './components'
import configStore from './redux'
import appRoutes from './routing'

import './assets/css/vendor/bootstrap.min.css';
import './assets/webfonts/fontawesome.css';
import './assets/css/notification/notifications.css';
import './assets/css/vendor/kendo-all.css';
import './assets/fonts/iransans/iransans-font.css';
import './assets/css/sass/themes/gogo.light.purple.scss';


const appStore = configStore();

const PageLoading = () => <div>Loading...</div>;

const App = () => {
    document.body.classList.add("rtl");
    document.body.classList.remove("ltr");

    return <Provider store={appStore}>
        <BrowserRouter>
            <Suspense fallback={<PageLoading/>}>
                <SwitchRouter routes={appRoutes}/>
            </Suspense>
        </BrowserRouter>
    </Provider>
};

export default App;