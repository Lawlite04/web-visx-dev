import { Redirect, Route } from "react-router";

export function PublicRoute({ component: Component, user, ...rest }) {
    return (
        <Route {...rest} render={props => (
            user === true ?
                <Redirect to='/' /> :
                user === false ?
                    <Component {...props} /> :
                    null
        )} />
    )
}

export function PrivateRoute({ component: Component, user, ...rest }) {
    return (
        <Route {...rest} render={props => (
            user === true ?
                <Component {...props} /> :
                user === false ?
                    <Redirect to='/' /> :
                    null
        )} />
    )

}

export const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
