import NavbarComponent from "@/components/Navbar";
import PrivacyComponent from "@/components/PrivacyComponent";
import {useRouter} from 'next/router';

export default function Privacy() {
    const router = useRouter();
    let pathRoute = router.pathname.toLocaleLowerCase();
    return(
        <>  
            {/* <NavbarComponent currentPage={pathRoute} /> */}
            <div>
                <PrivacyComponent id="changelog" />
            </div>
        </>
    )
}