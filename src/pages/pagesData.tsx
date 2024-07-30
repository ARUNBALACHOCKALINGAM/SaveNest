import { routerType } from "../abstraction/types/routerType";
import BarChart from "../components/Graph/Bar/BarChart";
import Dashboard from "./Dashboard";




const pagesData: routerType[] = [

    {
        path: "/",
        element: <Dashboard />,
        title: "Home"
    }

]


export default pagesData