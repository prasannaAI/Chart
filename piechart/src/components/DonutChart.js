import React from 'react';
import Chart from 'react-apexcharts';
import styles from '../styles/dount.css'
function DonutChart () {
    return(
        <>
            <div>
                <h2>Donut Chart </h2>
                <Chart
                className = {styles.header}
                type="donut"
                width={1349}
                height={550}
                series={[45,67,89,34,43]}
                options={{ 
                    labels:['USA','China','Russia','India'],
                    title:{
                        text:"Medal Country Name"
                    },
                    plotOptions:{
                        pie:{
                            donut:{
                                labels:{
                                    show:true,
                                    total:{
                                        show:true,
                                        showAlways:false,
                                        fontsize:30,
                                        color: '#f90000',
                                    }
                                }
                            }
                        }
                    },
                    dataLabels:{
                        enabled:true,
                    }
                }}
                />
            </div>
            
        </>

    );
}
export default DonutChart;