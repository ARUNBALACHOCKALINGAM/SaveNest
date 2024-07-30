import LoanDetailsCard from "../LoansSection/LoansDetailsCard";
import LoansSection from "../LoansSection/LoansSection";




const EmisExistingSection = () => {
    const headerData = {
        total: 2000,
        payments: 1,
        left: 2,
        completed: 2
    }
    const emisData = [
        {
            name: "Bike EMI",
            amount: 240000,
            installments: "12",
            totalInstallments: "24",
            paidAmount: 120000

        }
    ]

    return (
        <>
            <LoansSection headerData={headerData} type={"Emi"} />
            {emisData.map((emiData: any) => {
                return <LoanDetailsCard key={emiData.name} loanData={emiData} type="EMI" />
            })}
        </>
    );
}

export default EmisExistingSection;