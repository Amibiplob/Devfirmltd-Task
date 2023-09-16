"use client";

import Image from "next/image";
import { useState } from "react";

const UploadImage = () => {
  const uploadImage = (e: any) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      setImg(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const [img, setImg] = useState<any>("");
  return (
    <div>
      <label className="font-bold">Plane Image</label>
      <div className="flex justify-center items-center mt-5 border border-black border-dashed rounded-md h-32 w-60">
        {img && (
          <div className="relative">
            <Image
              className="object-cover h-32"
              src={img}
              alt="img"
              width={240}
              height={128}
            />
            <div className="absolute left-1/3 top-1/2 text-white">
              <label htmlFor="upload" className="flex gap-3">
                <h1>Change</h1>
              </label>
              <input
                hidden
                onChange={(e) => uploadImage(e)}
                type="file"
                id="upload"
              />
            </div>
          </div>
        )}

        <div hidden={img} className="p-6">
          <label htmlFor="upload" className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>

            <p>Upload Plane Image</p>
          </label>
          <input
            hidden
            onChange={(e) => uploadImage(e)}
            type="file"
            id="upload"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
