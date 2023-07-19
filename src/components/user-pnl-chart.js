import { DashboardBox } from "./dashboard-box";
import { Bar} from 'react-chartjs-2';
import { chartOptions } from "utils/options";
import { monthPnlData } from "utils/options";

export function PnlChart() {
    return (
        <DashboardBox boxHeading="pnl based on month interval" boxName="pnl-month-chart">
            <Bar options={chartOptions} data={monthPnlData} />
        </DashboardBox>
    )
}