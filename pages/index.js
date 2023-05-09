import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavbarComponent from '@/components/Navbar';
import {useRouter} from 'next/router';
import CardComponent from '@/components/CardComponent'
import { useSession, signIn, signOut } from "next-auth/react"
import HeaderComponent from '@/components/HeaderComponent';
import PriceComponent from '@/components/PriceComponent';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data: session } = useSession()

  const router = useRouter();
  let pathRoute = router.pathname;
  console.log(pathRoute)
  return (
    <>
      <NavbarComponent currentPage={pathRoute} titleBrand="Alfremo" />
      <HeaderComponent />
      <CardComponent />
      <PriceComponent />
    </>
  )
}
