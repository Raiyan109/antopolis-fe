'use client'



const Filter = ({ categories, handleCategory, activeCategory }) => {


    return (
        <div className="flex flex-wrap max-w-5xl gap-3">
            {categories.map((category) => (
                <button
                    key={category._id}
                    onClick={() => handleCategory(category.name)}
                    className={`px-4 py-2 rounded-full border text-sm lg:text-lg ${activeCategory === category.name
                        ? 'border-[#058F34] text-[#058F34]'
                        : 'border-[#EF0D0D] text-[#EF0D0D]'
                        }`}>{category.name}</button>
            ))}
        </div>
    )
}

export default Filter