import NavbarComponent from "@/components/Navbar";
import SearchComponent from "@/components/SearchComponent";
import styles from '@/styles/Home.module.css'
import {useRouter} from 'next/router';

export default function Search() {
    const router = useRouter();
    let pathRoute = router.pathname.toLocaleLowerCase();
    return(
        <>  
            <NavbarComponent currentPage={pathRoute} />
            <main className={styles.main}>
                <SearchComponent id="ciccio2" />
            </main>
        </>
    )
}