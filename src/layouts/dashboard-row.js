
export default function DashboardRow({rowClass,children}) {
    return (
        <div className={`dashboard-row ${rowClass ? rowClass : null}`}>
            {children}
        </div>
    )
}