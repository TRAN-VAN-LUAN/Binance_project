import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { ICoinChart } from '../slice/coinSlice';
import { useEffect, useMemo, useState } from 'react';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
// import { getCoinPriceByName } from '../services/coinApI';

export default function ChartComp() {
    const data: ICoinChart[] = useSelector((state: RootState) => state.coin.listDetailACoin);
    const [coins, setCoins] = useState<ICoinChart[]>([]);

    useEffect(() => {
        setCoins(data);
    }, [data]);

    let dataset: { x: any; y: any }[] = useMemo(() => {
        return coins.map((item) => {
            return { x: new Date(parseInt(item.time)).getTime(), y: item.price };
        });
    }, [coins]);

    let series: ApexAxisChartSeries = [
        {
            name: 'candle',
            data: dataset,
        },
    ];

    let options: ApexOptions = {
        chart: {
            height: 350,
            type: 'candlestick',
        },
        title: {
            align: 'left',
        },
        annotations: {
            xaxis: [
                {
                    x: 'Oct 06 14:00',
                    borderColor: '#00E396',
                    label: {
                        borderColor: '#00E396',
                        style: {
                            fontSize: '12px',
                            color: '#fff',
                            background: '#00E396',
                        },
                        orientation: 'horizontal',
                        offsetY: 7,
                        text: 'Annotation Test',
                    },
                },
            ],
        },
        tooltip: {
            enabled: false,
        },
        xaxis: {
            type: 'category',
            labels: {
                formatter: function (val) {
                    return dayjs(val).format('HH:mm');
                },
            },
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="p-2 rounded-md border-2 border-gray-500">
            <ReactApexChart type="candlestick" width={'100%'} height="350" series={series} options={options} />
        </div>
    );
}
