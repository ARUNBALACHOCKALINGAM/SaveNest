

interface Props {
    loan: any
}

const LoanRecommendationCard: React.FC<Props> = ({ loan }) => {
    return (
        <div className="p-4 text-xs md:text-sm border text-primary border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-800">
            <h2 className="text-lg font-bold italic md:text-xl lg:not-italic dark:text-gray-200">{loan.name}</h2>
            <p className="mt-2 md:italic dark:text-gray-400">
                {loan.description}
            </p>
            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-bold dark:text-gray-400">Amount:</span>
                    <span className="text-sm font-medium  dark:text-gray-100">${loan.amount}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-bold dark:text-gray-400">Interest Rate:</span>
                    <span className="text-sm font-medium  dark:text-gray-100">{loan.interestRate}%</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-bold dark:text-gray-400">Tenure:</span>
                    <span className="text-sm font-medium  dark:text-gray-100">{loan.tenure} years</span>
                </div>
            </div>
            <button className="mt-4 bg-primary/80 w-full py-2 px-4  hover:bg-primary text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Apply Now
            </button>
        </div>
    );
};

const LoanRecommendations = () => {
    // Example data
    const loanData = [
        {
            name: 'Personal Loan',
            description: 'A personal loan for your financial needs.',
            amount: '10,000',
            interestRate: '5.5',
            tenure: '5',
        },
        {
            name: 'Home Loan',
            description: 'Get your dream home with our home loan.',
            amount: '200,000',
            interestRate: '3.5',
            tenure: '15',
        },
        {
            name: 'Car Loan',
            description: 'Drive your dream car with our car loan.',
            amount: '50,000',
            interestRate: '6.0',
            tenure: '7',
        },
    ];

    return (
        <div className="container w-11/12 lg:w-full mx-auto py-4 lg:py-8 lg:ml-4">
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {loanData.map((loan, index) => (
                    <LoanRecommendationCard key={index} loan={loan} />
                ))}
            </div>
        </div>
    );
};

export default LoanRecommendations;
