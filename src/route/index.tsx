import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { setLoginUser } from '../redux/auth/actions';
import { getLoginUser } from '../redux/auth/selectors';
import Navbar from '../ui/navbar';
import LoginPage from './../pages/login';
import MainPage from './../pages/main';
import './main.css';
function MainRoute(props: any) {
    const dispatch = useDispatch();
    const [isReady, setIsReady] = useState(false);
    const auth = useSelector(getLoginUser);
    useEffect(() => {
        if (!auth?.email) {
            let user: any = localStorage.getItem("user");
            user = JSON.parse(user)
            dispatch(setLoginUser(user));
            setIsReady(true);
        }
    }, [dispatch, auth])

    return <>{isReady ? (<div className="main-wrapper">
        < Navbar ></Navbar >
        <Switch>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/" render={() => {
                return auth?.email ? <MainPage /> : <Redirect to="/login" />
            }} />
        </Switch>
    </div >) : <p>Loading</p>}</>
}

export default MainRoute;