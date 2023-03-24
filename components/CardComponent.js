import { Card } from "flowbite-react";

const cards = [
    {title: "Cucina", description: "Trova qualcuno per la Cucina", imgSrc: "/cucina.jpeg"},
    {title: "Bar", description: "Trova qualcuno per il Bar", imgSrc: "/bar.jpg"},
    {title: "Sala", description: "Trova qualcuno per la Sala", imgSrc: "/sala.jpg"}
]

export default function CardComponent(props){
    return(
        <>
            {cards.map((card, index) => (
                <div key={index} className="max-w-sm">
                    <Card imgSrc={card.imgSrc}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {card.title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {card.description}
                        </p>
                    </Card>
                </div>
            ))}
        </>
    )
}