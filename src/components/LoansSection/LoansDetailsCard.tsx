import { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { ChevronDownIcon, EyeIcon, WalletIcon } from "@heroicons/react/16/solid";


const LoanDetailsCard = ({ loanData, type }: any) => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };


    return (
        <div className="relative w-11/12 mx-auto lg:mx-0 lg:w-11/12 xl:w-full">
            {/* Down Icon */}
            <button
                onClick={toggleCollapse}
                className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                aria-expanded={!isCollapsed}
            >
                <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${!isCollapsed ? 'rotate-180' : ''
                        }`}
                />
            </button>
            <div className="p-4 text-xs lg:ml-4 self-start flex-col lg:flex lg:w-[100%] lg:text-sm mb-2 bg-white rounded-lg mt-8 lg:p-4 shadow-md">
                <div className="w-full flex flex-row justify-between items-center px-2">
                    <div>
                        <h1 className="text-primary/80">{type} Name</h1>
                        <p className="mt-1 font-bold">{loanData.name}</p>
                    </div>
                    <div className="flex justify-between lg:w-[60%] text-right">
                        <div>
                            <h1 className="text-primary/80">Amount</h1>
                            <p className="mt-1 font-bold tracking-wider">{loanData.amount}</p>
                        </div>
                        <div className="hidden lg:block">
                            <h1 className="text-primary/80">Installments Left</h1>
                            <p className="mt-1 font-bold tracking-wider">{loanData.installments}</p>
                        </div>
                        <div className="hidden lg:block">
                            <h1 className="text-primary/80">Total Installments</h1>
                            <p className="mt-1 font-bold tracking-wider">{loanData.totalInstallments}</p>
                        </div>
                    </div>
                </div>
                <hr className="w-[98%] mx-auto mt-4 border-white/40" />
                <div className="mt-4 flex w-full">
                    <ProgressBar totalAmount={loanData.amount} paidAmount={loanData.paidAmount} />
                </div>
                <div
                    className={`mt-4 flex w-full text-xs lg:text-sm justify-end ${!isCollapsed && "py-2"} transition-max-height duration-500 ease-in-out overflow-hidden ${isCollapsed ? 'max-h-0' : 'max-h-96'
                        }`}
                >
                    <button className="rounded-lg p-2 text-sm flex justify-between items-center bg-primary text-white">
                        <EyeIcon width={20} /> <span className="ml-2">View Insights</span>
                    </button>
                    <button className="rounded-lg ml-4 p-2 flex justify-between items-center bg-primary text-white">
                        <WalletIcon width={20} /> <span className="ml-2">Pay</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoanDetailsCard;
