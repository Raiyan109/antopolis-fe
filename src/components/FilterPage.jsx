import Image from "next/image"
import AddAnimalButton from "./AddAnimalButton"


const FilterPage = ({ animals }) => {
    return (
        <div className="flex py-32 justify-center mx-auto container h-screen ">
            <div className="space-y-16">
                <div className="flex items-center justify-between px-5 lg:px-0">
                    <div className="flex flex-wrap max-w-5xl gap-3">
                        <button className="px-2 py-1 lg:px-5 lg:py-3 rounded-full border border-[#EF0D0D] text-[#EF0D0D] text-sm lg:text-xl">Land Animal</button>
                        <button className="px-2 py-1 lg:px-5 lg:py-3 rounded-full border border-[#EF0D0D] text-[#EF0D0D] text-sm lg:text-xl">Bird</button>
                        <button className="px-2 py-1 lg:px-5 lg:py-3 rounded-full border border-[#EF0D0D] text-[#EF0D0D] text-sm lg:text-xl">Fish</button>
                        <button className="px-2 py-1 lg:px-5 lg:py-3 rounded-full border border-[#EF0D0D] text-[#EF0D0D] text-sm lg:text-xl">Insect</button>
                    </div>
                    <div className="flex flex-wrap max-w-5xl gap-3">
                        <button className="px-2 py-1 lg:px-5 lg:py-3 rounded-full border border-white text-sm lg:text-xl">Add Category</button>
                        <AddAnimalButton />
                    </div>
                </div>
                <div className="">
                    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-5 lg:px-0">
                        {animals.map((animal) => (
                            <div key={animal._id}>
                                <div className="space-y-2">
                                    <div className="bg-[#141414] p-10 border border-[#222222] rounded-md flex items-center justify-center">
                                        <Image
                                            src={animal.image}
                                            alt='animal'
                                            width={200}
                                            height={200}
                                            className="w-44 h-44 object-contain"
                                        />
                                    </div>
                                    <h1 className="uppercase text-center text-xl">{animal.name}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterPage