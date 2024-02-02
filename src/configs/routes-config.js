import LandingPage from "../pages/Landing-page"
import BusinessLandingPage from "../pages/business-page"
import ErrorPage from "../pages/error-page";



const paytm_routes = [
    {
        path:"/",
        component:<LandingPage/>
    },
    {
        path:"/business",
        component:<BusinessLandingPage/>
    },
    {
        path:"/payment-gateway",
        component:<ErrorPage/>
    }
]

export default paytm_routes;