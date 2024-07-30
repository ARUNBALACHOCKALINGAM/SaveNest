import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { ChartPieIcon } from "@heroicons/react/24/outline";
import { ApexOptions } from 'apexcharts';


// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const pieChartConfig = {
    type: "pie" as const, // Ensure type is correctly recognized
    height: 280,
    series: [20, 15, 30], // Example data
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        labels: ["Food", "E-commerce", "Others"],
        colors: ["#5a287d", "#C738BD", "#850F8D"], // Example colors
        legend: {
            position: "bottom",
            fontSize: window.innerWidth >= 1024 ? "12px" : "10px",
            width: 280
        },
        tooltip: {
            theme: "dark",
        }, plotOptions: {
            pie: {
                donut: {
                    labels: {
                        name: {
                            fontSize: window.innerWidth >= 1024 ? "12px" : "8px", // Responsive font size
                        },
                        value: {
                            fontSize: window.innerWidth >= 1024 ? "12px" : "10px", // Responsive font size
                        }
                    }
                }
            }
        },
        dataLabels: {
            style: {
                fontSize: window.innerWidth >= 1024 ? "12px" : "10px", // Responsive font size
            }
        }
    } as ApexOptions, // Ensure options is typed correctly
};


const PieChart = () => {
    return (
        <Card className="bg-white rounded-none dark:bg-black mt-4 grow lg:mt-2 lg:ml-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-row items-center rounded-lg p-2 gap-2 ml-4 mr-4 text-primary dark:text-white md:flex-row md:items-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                <div className="w-max rounded-lg bg-primary p-4 text-white">
                    <ChartPieIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                    <Typography className="font-bold text-sm italic md:text-xl lg:not-italic" variant="h6" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Expenditure Breakdown (Jan)

                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="max-w-sm font-normal text-xs md:text-sm lg:italic" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                        An insightful look at your monthly budget
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="px-2 mt-10 pb-6 mx-auto lg:mt-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Chart options={pieChartConfig.options} series={pieChartConfig.series} type={pieChartConfig.type} height={pieChartConfig.height} />
            </CardBody>
        </Card>
    );
}

export default PieChart;
