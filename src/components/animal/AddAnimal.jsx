'use client'
import { useEffect, useRef, useState } from "react";
import ImageUpload from "./ImageUpload";


const AddAnimal = ({ setOpenModal }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const modalRef = useRef();

    const handleAddImageSubmit = async (e) => {
        e.preventDefault()
        let response = await fetch('https://antopolis-ts.vercel.app/api/v1/animal', {
            method: 'POST',
            body: JSON.stringify({
                name,
                image
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
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setOpenModal(false);
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
                ref={modalRef}
                className="bg-white h-[340px] w-[500px] md:w-[700px] lg:w-[430px] rounded-3xl -mt-10 flex flex-col gap-5 overflow-auto p-9 shadow-xl"
            >
                {/* <button
                    className="bg-[#a2e1f5] text-[#140152] place-self-end p-2 mr-2 rounded-full"
                    onClick={() => setOpenModal(false)}
                >
                    Close
                </button> */}
                <h1 className="text-2xl text-black">Add Animal </h1>

                <form onSubmit={handleAddImageSubmit} className="space-y-5">
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-6 py-7 bg-[#F2F2F2] rounded-md placeholder:text-black placeholder:text-xl px-3 text-black text-xl" placeholder="Animal Name" />
                    <ImageUpload setImage={setImage} />
                    <button type="submit" className="bg-black text-white w-full h-6 py-7 flex items-center justify-center text-xl rounded-md">Create Animal</button>
                </form>
            </div>
        </div>
    )
}

export default AddAnimal