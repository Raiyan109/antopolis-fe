'use client'
import { useState } from "react"
import AddCategoryModal from "./AddCategoryModal"

const AddCategoryButton = () => {
    const [openCategoryModal, setOpenCategoryModal] = useState(false)
    return (
        <div>
            <button className="px-2 py-1 lg:px-5 lg:py-3 rounded-full border border-white text-sm lg:text-xl" onClick={() => setOpenCategoryModal(!openCategoryModal)}>Add Category</button>

            {openCategoryModal && (
                <AddCategoryModal openCategoryModal={openCategoryModal} setOpenCategoryModal={setOpenCategoryModal} />
            )}
        </div>
    )
}

export default AddCategoryButton