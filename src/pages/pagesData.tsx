import { routerType } from "../abstraction/types/routerType";
import NotFound from "../components/NotFound/NotFound";
import Dashboard from "./Dashboard";
import Loans from "./Loans";




const pagesData: routerType[] = [

    {
        path: "/",
        element: <Dashboard />,
        title: "index"
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        title: "Home"
    },
    {
        path: "/loans",
        element: <Loans />,
        title: "Loans"
    },
    {
        path: "/insurance",
        element: <NotFound />,
        title: "insurance"
    },
    {
        path: "/aichat",
        element: <NotFound />,
        title: "aichat"
    }



]


export default pagesData