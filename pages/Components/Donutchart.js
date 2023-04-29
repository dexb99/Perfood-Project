import { useEffect } from "react"
import { Chart } from "chart.js";
function Donut() {
    useEffect(() => {
        var don = document.getElementById('myChart2').getContext('2d');
        var myChart2 = new Chart(don, {
            type: 'doughnut',
            data: {
                labels: ["ผู้ที่เข้ามาตอบแบบสอบถาม", "ผู้เข้าชม",],
                datasets: [{
                    data: [70, 10,],
                    borderColor: [
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86)",

                    ],
                    backgroundColor: [
                        "rgb(75, 192, 192, 0.5 )",
                        "rgb(255, 205, 86, 0.5)",

                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },

        });
    }, [])


    return (
        <>
            {/* Doughnut chart */}
            {/* <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Doughnut Chart</h1> */}
            <div className="w-[1100px] h-screen flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2'>
                    <canvas id='myChart2'></canvas>
                </div>
            </div>
        </>
    )
}

export default Donut;