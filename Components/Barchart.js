import { useEffect, useState } from "react"
import { Chart } from "chart.js";
import axios from "axios";
function Barchart() {
    const [chartProps, setChartProps] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getBarchart').then((response) => {
            setChartProps(response.data)
        })

    }, [chartProps])
    useEffect(() => {
        const colors = ["rgb(102, 51, 0)", "rgb(75, 192, 192)", "rgb(255, 205, 86)", "rgb(255, 99, 132)"]
        const backgroundcolor = ["rgb(102, 51, 0,0.5)", "rgb(75, 192, 192,0.5)", "rgb(255, 205, 86,0.5)", "rgb(255, 99, 132,0.5)"]
        var barc = document.getElementById('myChart1').getContext('2d');
        const datasets = chartProps.map((item, index) => {
            return {
                data: [item.value],
                label: [item.label],
                borderColor: colors[index],
                backgroundColor: backgroundcolor[index],
                borderWidth: 1,
            }
        })
        var myChart1 = new Chart(barc, {
            type: 'bar',
            data: {
                labels: ["บุคลักษณ์"],
                datasets: datasets,
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