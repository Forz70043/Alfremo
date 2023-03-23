import Header from './Header'

export default function Layout({children}){
    console.log("children: ", children.type.name);
    return (
        <>
        <Header title="Alfremo"/>
        
        <main>
            {children}
        </main>
        
        </>
    )
}