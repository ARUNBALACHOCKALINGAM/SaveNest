import { useEffect, useState } from "react";
import { ApexOptions } from 'apexcharts';

interface Props {
    screenwidth: number;
}

const useConfigPie = ({ screenwidth }: any) => {

    // State for responsive font sizes and grid padding
    const [fontSize, setFontSize] = useState("14px");
    const [height, setHeight] = useState(280);
    const [gridPadding, setGridPadding] = useState({ top: 10, right: 10, bottom: 10, left: 10 });

    // Function to determine font size and grid padding based on screen width
    const updateResponsiveStyles = () => {
        if (screenwidth >= 1024) {
            setFontSize("14px"); // Large screens
            setGridPadding({ top: 10, right: 10, bottom: 10, left: 10 });
            setHeight(280)
        } else if (screenwidth >= 768) {
            setFontSize("12px"); // Medium screens
            setGridPadding({ top: 5, right: 5, bottom: 5, left: 5 });
            setHeight(280)
        } else {
            setFontSize("10px"); // Small screens
            setGridPadding({ top: 2, right: 2, bottom: 2, left: 2 });
            setHeight(280)
        }
    };

    // Update styles on component mount and screen width change
    useEffect(() => {
        updateResponsiveStyles(); // Initial check

        // No need for event listener if screenwidth is passed as prop or from parent state
    }, []);

    const pieChartConfig: { type: "pie"; height: number; series: number[]; options: ApexOptions } = {
        type: "pie",
        height: height,
        series: [20, 15, 30, 10, 25], // Example data
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            labels: ["Food", "E-commerce", "Utilities", "Entertainment", "Others"],
            colors: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"], // Example colors
            legend: {
                position: 'right',
            },
            tooltip: {
                theme: "dark",
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            name: {
                                fontSize: fontSize, // Responsive font size
                            },
                            value: {
                                fontSize: fontSize, // Responsive font size
                            }
                        }
                    }
                }
            },
            dataLabels: {
                style: {
                    fontSize: fontSize, // Responsive font size
                }
            }
        }
    };

    return pieChartConfig;
};

export default useConfigPie;
