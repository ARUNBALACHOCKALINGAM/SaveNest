import { useState } from "react";
import Select from "../components/Select/Select";
import ExistingSection from "../components/LoansSection/ExistingSection";
import RecommendationsSection from "../components/LoansSection/RecommendationsSection";
import { useSelector } from "react-redux";
import EmisExistingSection from "../components/EmisSection/EmisExistingSection";
import RecommendationsEmi from "../components/EmisSection/RecommendationsEmi";


const Loans = () => {
    const [isExisting, setIsExisting] = useState(true);

    const type = useSelector((state: any) => state.app.type);

    return (
        <div className="flex flex-col mt-4">
            <div className="flex mt-10 items-center flex-col lg:flex-row">
                <Select />
                <div className="mx-auto text-sm mt-6 w-full lg:flex lg:flex-col lg:mt-0 lg:ml-16 lg:text-base">
                    <div className="flex justify-between w-[90%] ml-4 px-2  lg:w-[50%] xl:w-[35%]">
                        <h1 onClick={() => setIsExisting(prev => !prev)} className={`${isExisting && "font-bold underline underline-offset-8"}`}>Existing</h1>
                        <h1 onClick={() => setIsExisting(prev => !prev)} className={`${!isExisting && "font-bold underline underline-offset-8"} `}>Recommendations</h1>
                    </div>
                    <hr className="w-[90%] mx-auto mt-1 ml-4 px-2 border-primary/20  lg:mx-0 lg:px-0 lg:w-[50%] xl:w-[37%] " />
                </div>
            </div>
            {isExisting ? (type === "Loan" ? < ExistingSection /> : <EmisExistingSection />) : (type === "Loan" ? <RecommendationsSection /> : <RecommendationsEmi />)}
        </div >
    );
}

export default Loans;