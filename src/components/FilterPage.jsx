import Image from "next/image"


const FilterPage = ({ animals }) => {
    return (
        <div className="">
            <div className="flex items-center justify-center gap-8 mx-auto container h-screen">
                {animals.map((animal) => (
                    <div key={animal._id}>
                        <div className="space-y-2">
                            <div className="bg-[#141414] p-10">
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
    )
}

export default FilterPage