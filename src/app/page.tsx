import Image from 'next/image'
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Middle from '@/components/Middle'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-white justify-between p-24">
        <Nav />
        <Header />
      </div>
      <Middle />
      <div className='flex flex-col items-center bg-white justify-between p-24'>
        <Footer />
      </div>

    </>

  )
}
