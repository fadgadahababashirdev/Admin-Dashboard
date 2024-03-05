
import { FaScaleBalanced } from "react-icons/fa6";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";
import { MdOutlinePointOfSale } from "react-icons/md";
import { SiVirustotal } from "react-icons/si";
import { MdCurrencyExchange } from "react-icons/md";
import { GiBuyCard } from "react-icons/gi";
import { RiLuggageDepositLine } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdSwitchAccount } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { LuNewspaper } from "react-icons/lu";
import { LuAward } from "react-icons/lu";


const Balance = () => {
  return (
    <div>
         <div>
    <h1 className="text-center font-thin text-bold py-2 md:text-3xl font-semibold">
      Balance
    </h1>
    <div className="flex">
      <div className="w-screen flex-col mx-2 py-2 px-2 grid grid-cols-2 gap-1 xl:grid-cols-4 md:gap-2">
        {/* Total Balance */}
        <div className="bg-rose-900 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Total Balance</span>
            <h1>
              <FaScaleBalanced  />
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

        {/* Available balance*/}
        <div className="bg-violet-600 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Available Balance</span>
            <h1>
              < MdOutlineEventAvailable  />
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
        {/* All action Fomo*/}
        <div className="bg-sky-600 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>All action Fomo</span>
            <h1>
              < SiGithubactions  />
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
        {/* Marketing */}
        <div className="bg-green-700 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Marketing</span>
            <h1>
              <SiGooglemarketingplatform/>
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
        {/* Admin sales*/}
        <div className="bg-yellow-700 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Admin Sales</span>
            <h1>
              <SiPhpmyadmin/>
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
        {/* All action */}
        <div className="bg-neutral-500 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>All Action</span>
            <h1>
              < SiGithubactions />
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
        {/* vendor sales */}
        <div className="bg-teal-800 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Vendor Sales</span>
            <h1>
              <MdOutlinePointOfSale  />
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
        {/* total online*/}
        <div className="bg-sky-600 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Total Online</span>
            <h1>
              <SiVirustotal />
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
           {/* exchange*/}
           <div className="bg-rose-700 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Exchange</span>
            <h1>
              <MdCurrencyExchange />
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
           {/* Merchant*/}
           <div className="bg-sky-800 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Merchant</span>
            <h1>
              < GiBuyCard  />
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
           {/* total deposit*/}
           <div className="bg-emerald-900 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Total Deposit</span>
            <h1>
              < RiLuggageDepositLine  />
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
           {/* withdraw*/}
           <div className="bg-amber-600 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Withdraw</span>
            <h1>
              <BiMoneyWithdraw  />
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
         {/* Balance in account*/}
         <div className="bg-cyan-600 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Balance in Account</span>
            <h1>
              <MdSwitchAccount  />
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
         {/* commision*/}
         <div className="bg-blue-300 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Comission</span>
            <h1>
              < GiMoneyStack />
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
         {/* pm */}
         <div className="bg-indigo-600 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>PM</span>
            <h1>
              <LuNewspaper />
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
         {/* Reward*/}
         <div className="bg-fuchsia-600 rounded-md text-white  px-2 py-3">
          <div className="  text-md md:text-2xl font-bold mt-2 flex justify-between">
            <span>Reward</span>
            <h1>
              < LuAward  />
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

    </div>
  )
}

export default Balance