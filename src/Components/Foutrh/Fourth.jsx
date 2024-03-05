import React from 'react';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { MdPendingActions } from 'react-icons/md';
import { GrProjects } from 'react-icons/gr';
import { FaRegBookmark } from 'react-icons/fa';
import { MdOutlineLight } from 'react-icons/md';
import { TiPointOfInterestOutline } from "react-icons/ti";

const Fourth = () => {
  return (
    <div className="flex">
      <div className="bg-white w-screen grid gap-1 grid-cols-3 mx-2 my-2 px-2 py-2 md:grid-cols-6">
        {/* grid one */}
        <div className="bg-blue-300 rounded-md flex justify-center p-3 items-center">
          <div className="text-center">
            <div className="flex justify-center">
              <MdOutlineVerifiedUser className="text-white text-3xl text-center md:text-5xl" />
            </div>
            <div className="text-white mt-2 font-medium text-1xl">
              Verified User 19
            </div>
          </div>
        </div>
        {/* grid two */}

        <div className="bg-green-300 rounded-md flex justify-center p-3 items-center">
          <div className="text-center">
            <div className="flex justify-center">
              <MdPendingActions className="text-white text-3xl text-center md:text-5xl" />
            </div>
            <div className="text-white mt-2 font-medium text-1xl">
              Pending User 6
            </div>
          </div>
        </div>
        {/* grid three */}
        <div className="bg-blue-500 rounded-md flex justify-center p-3 items-center">
          <div className="text-center">
            <div className="flex justify-center">
              <GrProjects className="text-white text-3xl text-center md:text-5xl" />
            </div>
            <div className="text-white mt-2 font-medium text-1xl">
              Projects 1/6
            </div>
          </div>
        </div>
        {/* grid four */}
        <div className="bg-red-600 rounded-md flex justify-center p-3 items-center">
          <div className="text-center">
            <div className="flex justify-center">
              <FaRegBookmark className="text-white text-3xl text-center md:text-5xl" />
            </div>
            <div className="text-white mt-2 font-medium text-1xl">
              FC SOOD 6
            </div>
          </div>
        </div>
        {/* grid five */}
        <div className="bg-yellow-500 rounded-md flex justify-center p-3 items-center">
        <div className="text-center">
            <div className="flex justify-center">
              < MdOutlineLight className="text-white text-3xl text-center md:text-5xl" />
            </div>
            <div className="text-white mt-2 font-medium text-1xl">
              FC $ 2006
            </div>
          </div>
        </div>
        {/* grid six */}
        <div className="bg-green-500 rounded-md flex justify-center items-center">
                <div className="text-center">
                    <div className="flex justify-center">
                    < TiPointOfInterestOutline  className="text-white text-3xl text-center md:text-5xl" />
                    </div>
                    <div className="text-white mt-2 font-medium text-1xl">
                    FC $ 2006
                    </div>
                </div>
                </div>
      </div>
    </div>
  );
};

export default Fourth;
