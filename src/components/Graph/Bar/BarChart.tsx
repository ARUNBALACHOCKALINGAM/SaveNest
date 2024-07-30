import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { CurrencyPoundIcon } from "@heroicons/react/24/outline";

import { ApexOptions } from 'apexcharts';

const chartConfig: any = {
    type: "bar",
    height: 280,
    series: [
        {
            name: "Expenses",
            data: [20, 20, 20, 50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#5a287d"],
        plotOptions: {
            bar: {
                columnWidth: window.innerWidth >= 1024 ? "60%" : "40%",
                borderRadius: 2,
            },
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: window.innerWidth >= 1024 ? "12px" : "10px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: window.innerWidth >= 1024 ? "12px" : "10px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
        },
        grid: {
            show: false,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },

        },
        fill: {
            opacity: 0.8,
        },
        tooltip: {
            theme: "dark",
        },
    } as ApexOptions,
};

const BarChart = () => {



    return (
        <Card className="bg-white rounded-none dark:bg-gray-800 mt-2 grow mx-auto lg:w-[60%]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-row items-center  rounded-lg p-2 gap-2 ml-4 mr-4 text-primary dark:text-white md:flex-row md:items-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <div className="w-max rounded-lg bg-primary p-4 text-white">
                    <CurrencyPoundIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                    <Typography className="font-bold text-sm italic md:text-xl lg:not-italic" variant="h6" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Monthly Expenses Overview
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="max-w-sm font-normal text-xs md:text-sm lg:italic" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                        A visual breakdown of your monthly expenditures<span className="hidden">,helping you stay on top of your finances.</span>
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="px-2 pb-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Chart {...chartConfig} />
            </CardBody>
        </Card>
    );
};

export default BarChart;
