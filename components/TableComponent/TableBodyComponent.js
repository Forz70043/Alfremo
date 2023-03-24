import {
    Table, 
    Avatar, 
    Badge
} from "flowbite-react";

const categories = ["cucina", "bar", "sala"]

const rowsTable = [
    {name: "Ciccio Pasitccio", status: true, category: categories[0], price: "120€" },
    {name: "Casper Booom", status: false, category: categories[1], price: "80€" },
    {name: "Olivia", status: true, category: categories[2], price: "50€" },
    {name: "Calimero", status:true, category: categories[2], price: "70€" }
]

export default function TableBodyComponent(){
    return(
        <>
            <Table.Body className="divide-y">
                {rowsTable.map((rowTable, index) =>{
                    return(
                        <>
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    <div className="flex flex-wrap gap-2">
                                        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>
                                    </div>
                                    {rowTable.name}
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <Badge color={rowTable.status ? 'green' : 'red'}/>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>{rowTable.category}</Table.Cell>
                                <Table.Cell>{rowTable.price}</Table.Cell>
                                <Table.Cell>
                                    <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                        Contatta
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        </>
                    )
                })}
            </Table.Body>
        </>
    )
}