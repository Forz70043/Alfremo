import { Table } from "flowbite-react";

const tableColumns = [
    'Utente', 
    'Status',
    'Categoria',
    'Prezzo'
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