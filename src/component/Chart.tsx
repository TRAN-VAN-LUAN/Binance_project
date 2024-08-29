import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { ICoinChart } from '../slice/coinSlice';
import { useEffect, useState } from 'react';
import { getCoinPriceByName } from '../services/coinApI';
import axios from 'axios';

export default function ChartComp({}) {
    const dispatch = useAppDispatch();
    const [coins, setCoins] = useState<ICoinChart[]>([]);
    const getApi = async () => {
        const response = await axios.get(`http://localhost:3000/BTCUSDT`);
        setCoins(response.data);
    };

    let y =
        coins.length > 0 &&
        coins.map((item) => {
            return item.price;
        });

    useEffect(() => {
        getApi();
    }, []);

    let series = [
        {
            data: [
                {
                    x: new Date(1538839800000),
                    y: y,
                },
            ],
        },
    ];

    let options = {
        chart: {
            type: 'candlestick',
        },
        title: {
            // text: ` Stock Price`,
            align: 'left',
            style: {
                color: '#3B82F6',
                fontFamily: 'Courier',
                fontSize: '26px',
            },
        },
        xaxis: {
            type: 'date',
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
            labels: {
                formatter: function (val) {
                    return '$' + val.toFixed(2);
                },
            },
        },
    };

    return (
        <div className="p-2 rounded-md border-2 border-gray-500">
            <Chart type="candlestick" width={'100%'} height="400" series={series} options={options} />
        </div>
    );
}

// import { useEffect } from 'react';
// import anychart from 'anychart';
// import 'anychart/dist/css/anychart-ui.min.css';
// import { ICoinChart } from '../slice/coinSlice';

// const CandlestickChart = () => {
//     useEffect(() => {
//         anychart.onDocumentReady(function () {
//             // load data
//             anychart.data.loadCsvFile('/src/db/data/BTCUSDT.csv', function (data) {
//                 // create a data table with the loaded data
//                 var dataTable = anychart.data.table();
//                 dataTable.addData(data);

//                 console.log(data), console.log(dataTable);
//                 // map the loaded data for the candlestick series
//                 var mapping = dataTable.mapAs({
//                     open: 1,
//                     high: 2,
//                     low: 3,
//                     close: 4,
//                 });
//                 // create a stock chart
//                 var chart = anychart.stock();
//                 // create the chart plot
//                 var plot = chart.plot(0);
//                 // set the grid settings
//                 plot.yGrid(true).xGrid(true).yMinorGrid(true).xMinorGrid(true);
//                 // create the candlestick series
//                 var series = plot.candlestick(mapping);
//                 series.name('TSMC');
//                 series.legendItem().iconType('rising-falling');
//                 // set the title of the chart
//                 chart.title('TSMC Stock Chart');
//                 // set the container id for the chart
//                 chart.container('container');
//                 // initiate the chart drawing
//                 chart.draw();
//             });
//         });
//     }, []);

//     return <div id="container" style={{ width: '100%', height: '500px' }}></div>;
// };

// export default CandlestickChart;
