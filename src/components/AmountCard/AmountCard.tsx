import { EyeIcon, WalletIcon } from "@heroicons/react/24/outline";

const AmountCard = () => {
    return (
        <div className="hidden h-full ml-4 grow lg:w-[60%] xl:w-[40%] self-start flex-col lg:flex lg:w-[60%] lg:text-sm bg-secondary rounded-lg mt-2 lg:p-4 shadow-lg shadow-secondary/40">
            <div className="w-full flex flex-row justify-between px-2">
                <div>
                    <h1 className="text-primary/80">Current</h1>
                    <p className="mt-1 font-bold">$1500k</p>
                </div>
                <div className="hidden lg:block">
                    <h1 className="text-primary/80">Average Monthly Expense</h1>
                    <p className="mt-1 font-bold tracking-wider">$1500k</p>
                </div>
                <div>
                    <h1 className="text-primary/80">Pending Loan (Jul)</h1>
                    <p className="mt-1 font-bold tracking-wider">$150k</p>
                </div>
                <div>
                    <h1 className="text-primary/80">Pending EMI (Jul)</h1>
                    <p className="mt-1 font-bold tracking-wider">$50k</p>
                </div>
            </div>
            <hr className="w-[98%] mx-auto mt-4 border-white/40" />
            <div className="mt-4 flex w-full">
                <button className="rounded-lg p-2 text-sm flex justify-between items-center hover:bg-primary hover:text-white"><EyeIcon width={20} />  <span className="ml-2">View Insights</span></button>
                <button className="rounded-lg ml-4 p-2 flex justify-between items-center hover:bg-primary hover:text-white"><WalletIcon width={20} /> <span className="ml-2">Pay</span></button>
            </div>
        </div>
    );
}

export default AmountCard;