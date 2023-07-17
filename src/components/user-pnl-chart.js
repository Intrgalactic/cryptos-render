import { useEffect, useState } from "react";
import { DashboardBox } from "./dashboard-box";
import { Bar} from 'react-chartjs-2';
import accountData from 'utils/account-data.json'
import { chartOptions } from "utils/options";
import { monthPnlData } from "utils/options";


export function PnlChart() {
    const [id,setId] = useState(0);
    
    useEffect(() => {
        window.addEventListener("resize",() => {
            setId(id => id + 1);
        })
    },[setId]);
    return (
        <DashboardBox boxHeading="pnl based on month interval" boxName="pnl-month-chart">
            <Bar options={chartOptions} data={monthPnlData} />
        </DashboardBox>
    )
}