
type DashboardCardProps = {
    children?: React.ReactNode;
  }
export default function DashboardCard({children}: DashboardCardProps) {
  return (
    <div className='bg-slate-800 p-6 rounded-md'>{children}</div>
  )
}
