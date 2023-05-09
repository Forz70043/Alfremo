import NavbarComponent from "@/components/Navbar";
import ChangelogComponent from "@/components/ChangelogComponent";
import {useRouter} from 'next/router';

export default function Changelog() {
    const router = useRouter();
    let pathRoute = router.pathname.toLocaleLowerCase();
    return(
        <>  
            <NavbarComponent currentPage={pathRoute} />
            <div>
                <ChangelogComponent id="changelog" />
            </div>
        </>
    )
}