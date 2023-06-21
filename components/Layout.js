import { ThemeProvider } from 'next-themes'
import Header from './Header'
import { userService } from 'services';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';

export default function Layout({ children }) {

    return (
        <>
            <ThemeProvider attribute="class">
                <Header title="Alfremo" />
                {/* <NavbarComponent currentPage={pathRoute} onCollapse={onCollapse} /> */}
                {userService.userValue ?
                    <PrivateLayout children={children}/>
                    :
                    <PublicLayout children={children} />
                }

                {/* {<NavbarComponent currentPage={children.type.name.toLowerCase()} titleBrand="Alfremo" />} */}
            </ThemeProvider>
        </>
    )
}