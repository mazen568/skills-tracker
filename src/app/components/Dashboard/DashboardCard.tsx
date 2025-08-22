
type DashboardCardProps = {
    children?: React.ReactNode;
  }
export default function DashboardCard({children}: DashboardCardProps) {
  return (
    <div className='bg-gray-800 p-6 rounded-md'>{children}</div>
  )
}
