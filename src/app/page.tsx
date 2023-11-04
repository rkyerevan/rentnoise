import Image from 'next/image'
import LogoWhite from 'public/logo-white.svg'
import Header from 'components/Header/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header/>
        <h1>Speaker Rental Los Angeles</h1>
    </main>
  )
}
