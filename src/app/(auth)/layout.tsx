export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col gap-4'>
        <h1>inside login</h1>
      {children}
    </div>
  )
}