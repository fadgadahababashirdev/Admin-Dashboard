import React from 'react'
import { GiSellCard } from 'react-icons/gi';
import { FaHourglassStart } from 'react-icons/fa';
import { BsAlexa } from 'react-icons/bs';
import { GiFilmSpool } from 'react-icons/gi';
import { FaChartArea } from 'react-icons/fa6';
import { GrStakeholder } from 'react-icons/gr';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

const Management = () => {
  return (
    <div>
    <h1 className="text-center font-thin text-bold py-2 md:text-3xl font-semibold">
      Management
    </h1>
    <div className="flex">
      <div className="w-screen flex-col mx-2 py-2 px-2 grid grid-cols-2 gap-1 xl:grid-cols-4 md:gap-2">
        {/* private presale */}
        <div className="bg-amber-400 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Private Presale</span>
            <h1>
              <GiSellCard />
            </h1>
          </div>
          <div className="mt-2 flex justify-between ">
            <p className="  text-md md:text-1xl font-medium">Balance</p>
          </div>
          <div className="mt-2 ">
            {' '}
            <h1 className=" text-md md:text-1xl font-bold">4,000,000,000</h1>
          </div>
          <div className="flex justify-between mt-2 ">
            <h1 className="  text-mdfont-medium">Sold: 3,000</h1>{' '}
            <h1 className="  text-mdfont-medium">Remaining: 3,000</h1>
          </div>
        </div>

        {/* initial presale */}
        <div className="bg-lime-500 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Initial Presale</span>
            <h1>
              <FaHourglassStart />
            </h1>
          </div>
          <div className="mt-2 flex justify-between ">
            <p className="  text-md md:text-1xl font-medium">Balance</p>
            <p>Connect Meta Mask</p>
          </div>
          <div className="mt-2 ">
            {' '}
            <h1 className=" text-md md:text-1xl font-bold">4,000,000,000</h1>
          </div>
          <div className="flex justify-between mt-2 ">
            <h1 className="  text-mdfont-medium">Sold: 3,000</h1>{' '}
            <h1 className="  text-mdfont-medium">Remaining: 3,000</h1>
          </div>
        </div>
        {/* sale package */}
        <div className="bg-cyan-400 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Sales Package</span>
            <h1>
              <BsAlexa />
            </h1>
          </div>
          <div className="mt-2 flex justify-between ">
            <p className="  text-md md:text-1xl font-medium">Balance</p>
          </div>
          <div className="mt-2 ">
            {' '}
            <h1 className=" text-md md:text-1xl font-bold">4,000,000,000</h1>
          </div>
          <div className="flex justify-between mt-2 ">
            <h1 className="  text-mdfont-medium">Sold: 3,000</h1>{' '}
            <h1 className="  text-mdfont-medium">Remaining: 3,000</h1>
          </div>
        </div>
        {/* liquidity pool */}
        <div className="bg-blue-400 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Liquidity Pool</span>
            <h1>
              <GiFilmSpool />
            </h1>
          </div>
          <div className="mt-2 flex justify-between ">
            <p className="  text-md md:text-1xl font-medium">Balance</p>
          </div>
          <div className="mt-2 ">
            {' '}
            <h1 className=" text-md md:text-1xl font-bold">4,000,000,000</h1>
          </div>
          <div className="flex justify-between mt-2 ">
            <h1 className="  text-mdfont-medium">Sold: 3,000</h1>{' '}
            <h1 className="  text-mdfont-medium">Remaining: 3,000</h1>
          </div>
        </div>
        {/* Staking pool */}
        <div className="bg-fuchsia-600 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Staking Pool</span>
            <h1>
              <GrStakeholder />
            </h1>
          </div>
          <div className="mt-2 flex justify-between ">
            <p className="  text-md md:text-1xl font-medium">Balance</p>
          </div>
          <div className="mt-2 ">
            {' '}
            <h1 className=" text-md md:text-1xl font-bold">4,000,000,000</h1>
          </div>
          <div className="flex justify-between mt-2 ">
            <h1 className="  text-mdfont-medium">Sold: 3,000</h1>{' '}
            <h1 className="  text-mdfont-medium">Remaining: 3,000</h1>
          </div>
        </div>
        {/* Pioneer fc */}
        <div className="bg-rose-700 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span> Pool</span>
            <h1>
              <FaChartArea />
            </h1>
          </div>
          <div className="mt-2 flex justify-between ">
            <p className="  text-md md:text-1xl font-medium">Balance</p>
          </div>
          <div className="mt-2 ">
            {' '}
            <h1 className=" text-md md:text-1xl font-bold">4,000,000,000</h1>
          </div>
          <div className="flex justify-between mt-2 ">
            <h1 className="  text-mdfont-medium">Sold: 3,000</h1>{' '}
            <h1 className="  text-mdfont-medium">Remaining: 3,000</h1>
          </div>
        </div>
        {/* presale balance */}
        <div className="bg-emerald-800 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Presale Balance</span>
            <h1>
              <MdOutlineAccountBalanceWallet />
            </h1>
          </div>
          <div className="mt-2 flex justify-between ">
            <p className="  text-md md:text-1xl font-medium">Balance</p>
          </div>
          <div className="mt-2 ">
            {' '}
            <h1 className=" text-md md:text-1xl font-bold">4,000,000,000</h1>
          </div>
          <div className="flex justify-between mt-2 ">
            <h1 className="  text-mdfont-medium">Sold: 3,000</h1>{' '}
            <h1 className="  text-mdfont-medium">Remaining: 3,000</h1>
          </div>
        </div>
        {/* total supply*/}
        <div className="bg-teal-500 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Liquidity Pool</span>
            <h1>
              <GiFilmSpool />
            </h1>
          </div>
          <div className="mt-2 flex justify-between ">
            <p className="  text-md md:text-1xl font-medium">Balance</p>
          </div>
          <div className="mt-2 ">
            {' '}
            <h1 className=" text-md md:text-1xl font-bold">4,000,000,000</h1>
          </div>
          <div className="flex justify-between mt-2 ">
            <h1 className="  text-mdfont-medium">Sold: 3,000</h1>{' '}
            <h1 className="  text-mdfont-medium">Remaining: 3,000</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Management