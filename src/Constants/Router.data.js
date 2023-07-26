import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import NoPage from "../Components/NotFoundPage/NotFound";

export const PublicRouter=[
    {
        "path":"/",
        "isIndex":true,
        component: Home
    },
    {
        "path":"/about",
        "isIndex":false,
        component: About
    },
    {
        "path":"*",
        "isIndex":false,
        component: NoPage
    }
]