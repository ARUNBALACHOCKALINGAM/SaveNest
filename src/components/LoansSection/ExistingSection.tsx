
import LoanDetailsCard from "./LoansDetailsCard";
import LoansSection from "./LoansSection";

const loansData = [
    {
        name: "HDFC Loan",
        amount: 10000,
        installments: "4",
        totalInstallments: "10",
        paidAmount: 5000

    },
    {
        name: "SBI loan",
        amount: 800,
        installments: "4",
        totalInstallments: "14",
        paidAmount: 50
    }
]

const headerData = {
    total: 2000,
    payments: 1,
    left: 2,
    completed: 2
}
const ExistingSection = () => {




    return (<>
        <LoansSection headerData={headerData} type={"Loan"} />
        {loansData.map((loanData: any) => {
            return <LoanDetailsCard key={loanData.name} loanData={loanData} type="Loan" />
        })}

    </>);
}

export default ExistingSection;