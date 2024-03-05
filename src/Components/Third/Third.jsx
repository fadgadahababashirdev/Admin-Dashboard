import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
const Third = () => {
  return (
    <div className="flex mt-3">
      <div className="w-screen bg-white px-2 py-2 grid gap-1 grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
        {/* grid one */}
        <div className="xl:shadow-2xl px-5 py-3">
          <div className="flex justify-between ">
            <h1 className="font-bold">View Deposit</h1>
            <RiErrorWarningLine />
          </div>
          <div className="mt-5">
            <h1 className="text-1xl font-bold text-black">
              $ 46577385{' '}
              <span className="text-xs font-thin text-green-500">11.45</span>
            </h1>
          </div>
          <div className="flex justify-between mt-5">
            <div>
              <h1>Incomings</h1>
              <span>$ 4627284</span>
            </div>
            <div>
              <h1>Outcomings</h1>
              <span>$ 4627284</span>
            </div>
            <div className="flex justify-between">
              <div className="w-2 h-10 bg-gray-300 mx-1"></div>
              <div className="w-2 h-12 bg-gray-300 mx-1"></div>
              <div className="w-2 h-5 bg-gray-300 mx-1"></div>
              <div className="w-2 h-8 bg-gray-300 mx-1"></div>
              <div className="w-2 h-18 bg-blue-500 mx-1"></div>
            </div>
          </div>
        </div>

        {/* grid two */}

        <div className="xl:shadow-2xl px-5 py-3">
          <div className="flex justify-between ">
            <h1 className="font-bold">View Deposit</h1>
            <RiErrorWarningLine />
          </div>
          <div className="mt-5">
            <h1 className="text-1xl font-bold text-black">
              $ 46577385{' '}
              <span className="text-xs font-thin text-green-500">11.45</span>
            </h1>
          </div>
          <div className="flex justify-between mt-5">
            <div>
              <h1>Incomings</h1>
              <span>$ 4627284</span>
            </div>
            <div>
              <h1>Outcomings</h1>
              <span>$ 4627284</span>
            </div>
            <div className="flex justify-between">
              <div className="w-2 h-10 bg-gray-300 mx-1"></div>
              <div className="w-2 h-12 bg-gray-300 mx-1"></div>
              <div className="w-2 h-5 bg-gray-300 mx-1"></div>
              <div className="w-2 h-8 bg-gray-300 mx-1"></div>
              <div className="w-2 h-18 bg-blue-500 mx-1"></div>
            </div>
          </div>
        </div>
        {/* grid three */}
        <div className="xl:shadow-2xl px-5 py-3">
          <div className="flex justify-between ">
            <h1 className="font-bold">View Deposit</h1>
            <RiErrorWarningLine />
          </div>
          <div className="mt-5">
            <h1 className="text-1xl font-bold text-black">
              $ 46577385{' '}
              <span className="text-xs font-thin text-green-500">11.45</span>
            </h1>
          </div>
          <div className="flex justify-between mt-5">
            <div>
              <h1>Incomings</h1>
              <span>$ 4627284</span>
            </div>
            <div>
              <h1>Outcomings</h1>
              <span>$ 4627284</span>
            </div>
            <div className="flex justify-between">
              <div className="w-2 h-10 bg-gray-300 mx-1"></div>
              <div className="w-2 h-12 bg-gray-300 mx-1"></div>
              <div className="w-2 h-5 bg-gray-300 mx-1"></div>
              <div className="w-2 h-8 bg-gray-300 mx-1"></div>
              <div className="w-2 h-18 bg-blue-500 mx-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
