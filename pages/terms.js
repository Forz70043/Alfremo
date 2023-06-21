import NavbarComponent from "@/components/Navbar";
import TermsComponent from "@/components/TermsComponent";
import {useRouter} from 'next/router';

export default function Privacy() {
    const router = useRouter();
    let pathRoute = router.pathname.toLocaleLowerCase();
    return(
        <>  
            {/* <NavbarComponent currentPage={pathRoute} /> */}
            <div>
                <TermsComponent id="changelog" />
            </div>
        </>
    )
}