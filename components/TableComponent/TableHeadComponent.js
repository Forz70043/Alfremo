import { Table } from "flowbite-react";

const tableColumns = [
    'Email', 
    'First Name',
    'Last Name',
]

export default function TableHeadComponent(){
    return(
        <>
            <Table.Head>
                {tableColumns.map((tableColumn, index) => <Table.HeadCell key={index}>{tableColumn}</Table.HeadCell>)}
                
                <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                </Table.HeadCell>
            </Table.Head>
        </>
    )
}