import { EyeIcon, WalletIcon } from "@heroicons/react/16/solid";



const LoansSection = ({ headerData, type }: any) => {
    return (
        <div className="w-11/12 mx-auto text-xs xl:w-full lg:text-sm lg:mx-0">
            <div className="p-4 lg:ml-4 self-start flex-col lg:flex lg:w-[100%] lg:text-sm bg-secondary rounded-lg mt-8 lg:p-4 shadow-lg shadow-secondary/40">
                <div className="w-full flex flex-row justify-between px-2">
                    <div>
                        <h1 className="text-primary/80">Total {type}</h1>
                        <p className="mt-1 font-bold">{headerData.total}</p>
                    </div>
                    <div className="flex justify-between w-[60%] text-right">
                        <div >
                            <h1 className="text-primary/80">Upcoming Payments</h1>
                            <p className="mt-1 font-bold tracking-wider">{headerData.payments}</p>
                        </div>
                        <div>
                            <h1 className="text-primary/80">{type}s Left</h1>
                            <p className="mt-1 font-bold tracking-wider">{headerData.left}</p>
                        </div>
                        <div className="hidden lg:block">
                            <h1 className="text-primary/80">Completed</h1>
                            <p className="mt-1 font-bold tracking-wider">{headerData.completed}</p>
                        </div>
                    </div>

                </div>
                <hr className="w-[98%] mx-auto mt-4 border-white/40" />
                <div className="mt-4 flex w-full justify-end">
                    <button className="rounded-lg p-2 text-sm flex justify-between items-center hover:bg-primary hover:text-white"><EyeIcon width={20} />  <span className="ml-2">View Insights</span></button>
                    <button className="rounded-lg ml-4 p-2 flex justify-between items-center hover:bg-primary hover:text-white"><WalletIcon width={20} /> <span className="ml-2">Pay</span></button>
                </div>
            </div>
        </div>
    );
}

export default LoansSection;