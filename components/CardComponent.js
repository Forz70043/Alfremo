import { Card } from "flowbite-react";

const cards = [
    { title: "Cucina", description: "Trova qualcuno per la Cucina", imgSrc: "/cucina.jpeg" },
    { title: "Bar", description: "Trova qualcuno per il Bar", imgSrc: "/bar.jpeg" },
    { title: "Sala", description: "Trova qualcuno per la Sala", imgSrc: "/sala.jpeg" }
]

export default function CardComponent(props) {
    return (
        <>
            <section className="bg-white pt-9 pb-9 dark:bg-gray-900">
                <div className="py-8 px-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">For Restaurateurs and Workers</h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-3">
                        {cards.map((card, index) => (
                            <article key={index} className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <img className="w-full rounded-lg sm:rounded-none" src={card.imgSrc} alt="Bonnie Avatar" />
                                <h2 className="mb-2 p-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{card.title}</a></h2>
                                <p className="mb-5 p-6 font-light text-gray-500 dark:text-gray-400">{card.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}