import Header from './Header'
import FooterComponent from './FooterComponent';

export default function Layout({children}){
    
    return (
        <>
        <Header title="Alfremo"/>
        {/* {<NavbarComponent currentPage={children.type.name.toLowerCase()} titleBrand="Alfremo" />} */}
        <main>
            {children}
        </main>
        <FooterComponent />
        </>
    )
}