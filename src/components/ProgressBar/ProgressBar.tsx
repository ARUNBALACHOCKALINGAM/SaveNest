import { useSelector } from "react-redux";

interface Props {
    totalAmount: number,
    paidAmount: number,

}


const ProgressBar: React.FC<Props> = ({ totalAmount, paidAmount }) => {
    // Calculate the percentage of the loan paid
    const percentage = Math.min((paidAmount / totalAmount) * 100, 100);

    const type = useSelector((state: any) => state.app.type)

    return (
        <div className="w-full mx-auto p-0">

            <div className="relative w-full h-4 bg-secondary rounded-full dark:bg-gray-800">
                <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="mt-2 text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                Paid: ${paidAmount.toFixed(2)} / ${totalAmount.toFixed(2)}
            </div>
            <div className="mt-1 text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                {percentage.toFixed(2)}% of the {type.toLowerCase()} has been paid
            </div>
        </div>
    );
};


export default ProgressBar;