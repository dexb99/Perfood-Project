import { useEffect } from "react"
import { Chart } from "chart.js";
function Barchart() {
    useEffect(() => {
        var barc = document.getElementById('myChart1').getContext('2d');
        var myChart1 = new Chart(barc, {
            type: 'bar',
            data: {
                labels: ["Big Eater", "Shrugger", "Activist", "Super Taster"],
                datasets: [{
                    data: [66, 144, 146, 116,],
                    label: "People",
                    borderColor: "rgb(102, 51, 0)",
                    backgroundColor: "rgb(102, 51, 0,0.5)",
                    borderWidth: 2
                }, 
                // {
                //     data: [40, 100, 44, 70, 63, 30, 10],
                //     label: "Accepted",
                //     borderColor: "rgb(75, 192, 192)",
                //     backgroundColor: "rgb(75, 192, 192,0.5)",
                //     borderWidth: 2
                // }, {
                //     data: [20, 24, 50, 34, 33, 23, 12],
                //     label: "Pending",
                //     borderColor: "rgb(255, 205, 86)",
                //     backgroundColor: "rgb(255, 205, 86,0.5)",
                //     borderWidth: 2
                // }, {
                //     data: [6, 20, 52, 12, 11, 78, 21],
                //     label: "Rejected",
                //     borderColor: "rgb(255, 99, 132)",
                //     backgroundColor: "rgb(255, 99, 132,0.5)",
                //     borderWidth: 2
                // }
                ]
            },
        });
    }, [])


    return (
        <>
            {/* Bar chart */}
            {/* <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Bar Chart</h1> */}
            
                <div className='pt-0  w-full h-fit my-auto '>
                    <canvas id='myChart1'></canvas>
                </div>

        </>
    )
}

export default Barchart;