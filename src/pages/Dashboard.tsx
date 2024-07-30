import { ArrowDownIcon, ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import BarChart from "../components/Graph/Bar/BarChart";
import PieChart from "../components/Graph/Pie/Pie";
import Welcome from "../components/Welcome/Welcome";

const Dashboard = () => {
    return (
        <div className="flex flex-col mt-4">
            <Welcome username="Arun" />
            <hr className="w-[92%] mx-auto mt-4 border-primary/20" />
            <div className="relative flex flex-wrap justify-between items-center h-full">
                <BarChart />

                <div className="hidden lg:block ">
                    <ArrowRightIcon />
                </div>

                <div className="opacity-40 lg:hidden flex justify-center items-center w-full mt-2 mx-auto">
                    <ArrowDownIcon width={52} />
                </div>

                <PieChart />
            </div>
        </div>
    );
}

export default Dashboard;
