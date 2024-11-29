'use client'
import { CldUploadWidget } from 'next-cloudinary';
const ImageUpload = ({ setImage }) => {
    return (
        <CldUploadWidget
            options={{ sources: ['local', 'url'] }}
            uploadPreset="recipeUpload" onSuccess={({ info }) => {
                console.log(info);

                if (typeof info !== 'string' && info?.secure_url) {
                    setImage(info.secure_url)
                } else {
                    console.log('Unexpected info format:', info);
                }
            }}>
            {({ open }) => {
                return (
                    <div className="flex items-center justify-between w-full h-6 py-7 bg-[#F2F2F2] rounded-md px-3" onClick={() => open()}>
                        <input type="text" className="placeholder:text-black placeholder:text-xl border-none bg-[#F2F2F2] outline-none" placeholder="Image" />
                        <button className="bg-[#CCCCCC] px-2 py-1 rounded-xl text-black">upload</button>
                    </div>
                );
            }}
        </CldUploadWidget>
    )
}

export default ImageUpload