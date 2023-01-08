import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Style from "./style.module.css"

export default function Charts({title, data, label}:{title:string, data:number[], label:string[]}) {
    const option = {chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: title
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '{point.name}:\n{point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Persen',
        colorByPoint: true,
        data: data.map((el,ind) => {
            return {
                name : label[ind],
                y : el
            }        
        })
    }]}


    return(
        <div className={Style.chart}>

        <HighchartsReact highcharts={Highcharts} options={option} />
        </div>
    )
}