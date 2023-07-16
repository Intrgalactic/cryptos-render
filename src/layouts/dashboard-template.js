import DashboardNav from "./dashboard-nav";

export default function DashboardTemplate({children}) {
    return (
        <div className="dashboard-template">
            <DashboardNav/>
            <main className="dashboard-main">
                {children}
            </main>
        </div>
    )
}