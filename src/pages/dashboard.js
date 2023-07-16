

import { DashboardBox } from 'components/dashboard-box';
import DashboardTemplate from 'layouts/dashboard-template';
import accountData from 'utils/account-data.json'
import { DetailsContainer } from 'components/data-details-container';
import { chartOptions } from 'utils/options';
import { PnlChart } from 'components/user-pnl-chart';
import { marketCapData } from 'utils/options';
import DashboardRow from 'layouts/dashboard-row';
import { Suspense, lazy } from 'react';
import Loader from 'layouts/loader';
import btc from 'assets/images/btc.png';
import firstAnalyst from 'assets/images/analyst-example-img-1.png';
import secondAnalyst from 'assets/images/analyst-example-img-2.png';
import thirdAnalyst from 'assets/images/analyst-example-img-3.png';
import fourthAnalyst from 'assets/images/analyst-example-img-4.png';

const Line = lazy(() => import('react-chartjs-2').then(module => {
    return {default: module.Line}
}))
const Analyst = lazy(() => import('components/analyst-box').then(module => {
    return {default: module.Analyst}
}))
const BalanceBoxPart = lazy(() => import('components/balance-box').then(module => {
    return {default: module.BalanceBoxPart}
}))
export default function Dashboard() {

    return (
        <Suspense fallback={<Loader />}>
            <div className="dashboard">
                <DashboardTemplate>
                    <DashboardRow rowClass="dashboard-first-row">
                        <DashboardBox boxHeading="latest good acquired" boxName="data-details">
                            <DetailsContainer heading={accountData.userData.latestGoodWithAmountBought[0]} image={btc} alt="latest crypto bought" dataArr={
                                [["Amount Bought:", accountData.userData.latestGoodWithAmountBought[1]],
                                ["Current Price: ", accountData.marketData.cryptoPrices.BTC]]} />
                        </DashboardBox>
                        <DashboardBox boxHeading="overall market cap" boxName="market-cap-chart-container">
                            <div className="market-cap-chart">
                                <Line options={chartOptions} data={marketCapData} />
                            </div>
                        </DashboardBox>
                        <DashboardBox boxHeading="your balance" boxName="balance">
                            <BalanceBoxPart heading="free balance" amount="400$" />
                            <BalanceBoxPart heading="allocated balance" amount="1203$" />
                        </DashboardBox>
                    </DashboardRow>
                    <DashboardRow rowClass='dashboard-second-row'>
                        <PnlChart />
                        <DashboardBox boxHeading="professional at" boxName="analyst-choose">
                            <Analyst image={firstAnalyst} name={accountData.userData.assignedAnalysts[0]} alt="analyst adam"/>
                            <Analyst image={secondAnalyst} name={accountData.userData.assignedAnalysts[1]} alt="analyst josh"/>
                            <Analyst image={thirdAnalyst} name={accountData.userData.assignedAnalysts[2]} alt="analyst anna"/>
                            <Analyst image={fourthAnalyst} name={accountData.userData.assignedAnalysts[3]} alt="analyst jurek"/>
                        </DashboardBox>
                    </DashboardRow>
                </DashboardTemplate>
            </div>
        </Suspense>
    )
}