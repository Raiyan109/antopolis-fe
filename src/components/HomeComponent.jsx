'use client'
import Image from "next/image"
import AddCategoryButton from "./category/AddCategoryButton"
import AddAnimalButton from "./animal/AddAnimalButton"
import Filter from "./filter/Filter"
import { useState } from "react"

const HomeComponent = ({ animals, categories }) => {
    const [activeCategory, setActiveCategory] = useState('')
    const handleCategory = (category) => {
        setActiveCategory(category)
    }

    const filterCategories = () => {
        if (activeCategory == "") {
            return animals
        } else {
            return animals.filter(el => el.category == activeCategory)
        }
    }

    const filteredList = filterCategories()
    console.log(filteredList);

    return (
        <div className="flex py-32 justify-center mx-auto container h-screen ">
            <div className="space-y-16">
                <div className="flex items-center justify-between px-5 lg:px-0">
                    <div className="flex flex-wrap max-w-5xl gap-3">
                        <Filter categories={categories} handleCategory={handleCategory} activeCategory={activeCategory} />
                    </div>
                    <div className="flex flex-wrap max-w-5xl gap-3">
                        <AddCategoryButton />
                        <AddAnimalButton />
                    </div>
                </div>
                <div className="">
                    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-5 lg:px-0">
                        {filteredList.map((animal) => (
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

export default HomeComponent