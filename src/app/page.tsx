import Image from 'next/image'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white justify-between p-24">
      <Nav />
    </main>
  )
}
