import NavbarComponent from "@/components/Navbar";
import SearchComponent from "@/components/SearchComponent";
import {useRouter} from 'next/router';

export default function Search() {
    const router = useRouter();
    let pathRoute = router.pathname.toLocaleLowerCase();
    return(
        <>  
            <NavbarComponent currentPage={pathRoute} />
            <div>
                <SearchComponent id="ciccio2" />
            </div>
        </>
    )
}