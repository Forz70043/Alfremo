import {
    Table, 
    Avatar,
    Rating
} from "flowbite-react";

const categories = ["cucina", "bar", "sala"]

const rowsTable = [
    {name: "Ciccio Pasitccio", status: true, category: categories[0], price: "120€", raking:4 },
    {name: "Casper Booom", status: false, category: categories[1], price: "80€", raking:3 },
    {name: "Olivia", status: true, category: categories[2], price: "50€", raking:4 },
    {name: "Calimero", status:true, category: categories[2], price: "70€", raking: 5 }
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
                                        {rowTable.name}
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex items-center">
                                    {rowTable.status ? <div className="inline-block w-4 h-4 mr-2 bg-green-600 rounded-full"></div>
                                    : <div className="inline-block w-4 h-4 mr-2 bg-red-600 rounded-full"></div>}
                                    </div>
                                </Table.Cell>
                                <Table.Cell>{rowTable.category}</Table.Cell>
                                <Table.Cell>
                                    <Rating key={index+1}>
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star filled={false} />
                                    </Rating>
                                </Table.Cell>
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