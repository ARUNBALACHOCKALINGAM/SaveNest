import { useEffect, useState } from "react";
import { ApexOptions } from 'apexcharts';

const useConfigBar = ({ screenwidth }: any) => {
    // State for responsive font sizes and grid padding
    const [fontSize, setFontSize] = useState("14px");
    const [gridPadding, setGridPadding] = useState({ top: 10, right: 10, bottom: 10, left: 10 });

    // Function to determine font size based on window width
    const updateResponsiveStyles = () => {
        if (screenwidth >= 1024) {
            setFontSize("14px"); // Large screens
            setGridPadding({ top: 10, right: 10, bottom: 10, left: 10 });
        } else if (screenwidth >= 768) {
            setFontSize("12px"); // Medium screens
            setGridPadding({ top: 5, right: 5, bottom: 5, left: 5 });
        } else {
            setFontSize("10px"); // Small screens
            setGridPadding({ top: 2, right: 2, bottom: 2, left: 2 });
        }
    };

    // Update styles on component mount and window resize
    useEffect(() => {
        updateResponsiveStyles(); // Initial check
        window.addEventListener('resize', updateResponsiveStyles); // Add event listener for resize

        return () => {
            window.removeEventListener('resize', updateResponsiveStyles); // Clean up event listener
        };
    }, []);


    const chartConfig = {
        type: "bar",
        height: 280,
        series: [
            {
                name: "Sales",
                data: [20, 120, 200, 400, 40, 300, 320, 500, 350, 200, 230, 500],
            },
        ],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            title: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#5a287d"], // Primary color
            plotOptions: {
                bar: {
                    columnWidth: "40%",
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
                        fontSize: fontSize, // Responsive font size
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
                        fontSize: fontSize, // Responsive font size
                        fontFamily: "inherit",
                        fontWeight: 400
                    }
                },
            },
            grid: {
                show: true,
                borderColor: "#dddddd",
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: gridPadding, // Responsive grid padding
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                theme: "dark",
            },
        } as ApexOptions,
    };

    return chartConfig;
}

export default useConfigBar;
