'use client'
import { useEffect, useRef, useState } from "react";


const AddCategoryModal = ({ setOpenCategoryModal }) => {
    const [name, setName] = useState('');
    const categoryModalRef = useRef();

    const handleAddCategorySubmit = async (e) => {
        e.preventDefault()

        let response = await fetch('https://antopolis-ts.vercel.app/api/v1/category', {
            method: 'POST',
            body: JSON.stringify({
                name,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })

        response = await response.json()

        alert(JSON.stringify(response.message))
    }

    // Close modal when clicking outside
    const handleClickOutside = (event) => {
        if (categoryModalRef.current && !categoryModalRef.current.contains(event.target)) {
            setOpenCategoryModal(false);
        }
    };

    useEffect(() => {

        document.addEventListener("mousedown", handleClickOutside);
        return () => {

            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="h-screen fixed inset-0 bg-opacity-10 backdrop-blur-sm bg-black flex justify-center items-center z-10">
            <div
                ref={categoryModalRef}
                className="bg-white h-[260px] w-[500px] md:w-[700px] lg:w-[400px] rounded-3xl -mt-10 flex flex-col gap-5 overflow-auto p-9 shadow-xl"
            >

                <h1 className="text-2xl text-black">Add Category </h1>

                <form onSubmit={handleAddCategorySubmit} className="space-y-5">
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-6 py-7 bg-[#F2F2F2] rounded-md placeholder:text-black placeholder:text-xl px-3 text-black text-xl" placeholder="Name" />

                    <button type="submit" className="bg-black text-white w-full h-6 py-7 flex items-center justify-center text-xl rounded-md">Save</button>
                </form>
            </div>
        </div>
    )
}

export default AddCategoryModal