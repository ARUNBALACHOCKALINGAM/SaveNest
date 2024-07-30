import { Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react"
import { FaMoneyBill1Wave } from "react-icons/fa6";

interface Props {
    title: string
    amount: string
}


const CardComponent: React.FC<Props> = ({ title, amount }) => {
    return (
        <Card className="mx-auto rounded-none lg:mr-8 text-sm lg:text-sm p-6 lg:p-2 bg-secondary shadow-sm shadow-secondary lg:rounded-lg grow mt-2 lg:ml-6 align-top" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <CardHeader className="p-2 shadow-none rounded-lg text-primary/80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <h1 className="flex items-center"><FaMoneyBill1Wave /><span className="ml-2">{title}</span></h1>
                </Typography>
            </CardHeader>
            <CardBody className="p-2 mt-2 font-bold text-primary" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><h1>{amount}</h1></Typography>
            </CardBody>
        </Card>
    );
}

export default CardComponent;