'use client'
import { useState } from "react"
import AddAnimal from "./AddAnimal"



const AddAnimalButton = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            <button className="px-2 py-1 lg:px-5 lg:py-3 rounded-full border border-white text-sm lg:text-xl" onClick={() => setOpenModal(!openModal)}>Add Animal</button>
            {openModal && (
                <AddAnimal openModal={openModal} setOpenModal={setOpenModal} />
            )}
        </div>
    )
}

export default AddAnimalButton