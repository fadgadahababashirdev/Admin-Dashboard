import React, { useState } from 'react';
import { RiAdminFill } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';
import { FaLinkSlash } from 'react-icons/fa6';
import { MdPayments } from 'react-icons/md';
import { MdOutlineCardMembership } from 'react-icons/md';
import { FaUsersLine } from 'react-icons/fa6';
import { LiaLayerGroupSolid } from 'react-icons/lia';
import { MdOutlineAccountTree } from 'react-icons/md';
import { FaMailBulk } from 'react-icons/fa';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { LuStore } from 'react-icons/lu';
import { MdOutlineLocalActivity } from 'react-icons/md';
import { SiMarketo } from 'react-icons/si';
import { PiWalletLight } from 'react-icons/pi';
import { BiMobileLandscape } from 'react-icons/bi';
import { MdSubscriptions } from 'react-icons/md';
import { TbUsersGroup } from 'react-icons/tb';
import { MdContactPhone } from 'react-icons/md';
import { FaBuysellads } from 'react-icons/fa';
import { MdOutlineVideoSettings } from 'react-icons/md';
import { SiClubhouse } from 'react-icons/si';
import { GiShieldOpposition } from 'react-icons/gi';
import { MdUnsubscribe } from 'react-icons/md';
import { TbLogout2 } from 'react-icons/tb';

import './sidebar.css';

const Sidebar = () => {
  // useful links
  const [link, setLink] = useState(false);
  const [hiddenLinks, setHiddenLinks] = useState(false);

  const handleClickOnLinkIcon = () => {
    setHiddenLinks(!hiddenLinks);
    setLink(true);
  };
  const handleMoveDown = () => {
    setLink(false);
    setHiddenLinks(false);
  };
  //   payments
  const [payment, setPayment] = useState(false);

  const handlePayment = () => {
    setPayment(!payment);
  };
  const removePayment = () => {
    setPayment(false);
  };
  // members
  const [members, setMembers] = useState(false);

  const handleMembers = () => {
    setMembers(!members);
  };
  const removeMembers = () => {
    setMembers(false);
  };

  // localStore
  const [localstore, setLocalStore] = useState(false);

  const handleLocalStore = () => {
    setLocalStore(!localstore);
  };
  const removeLocalStore = () => {
    setLocalStore(false);
  };
  // marketing
  const [marketing, setMarketing] = useState(false);

  const handleMarketing = () => {
    setMarketing(!marketing);
  };
  const removeMarketing = () => {
    setMarketing(false);
  };
  // activity
  const [activity, setActivity] = useState(false);

  const handleActivity = () => {
    setActivity(!activity);
  };
  const removeActivity = () => {
    setActivity(false);
  };
  // wallet
  const [wallet, setWallet] = useState(false);

  const handleWallet = () => {
    setWallet(!wallet);
  };
  const removeWallet = () => {
    setWallet(false);
  };

  // mim
  const [mim, setMim] = useState(false);

  const handleMim = () => {
    setMim(!mim);
  };
  const removeMim = () => {
    setMim(false);
  };

  // saas
  // mim
  const [saas, setSaas] = useState(false);

  const handleSaas = () => {
    setSaas(!mim);
  };
  const removeSaas = () => {
    setSaas(false);
  };

  return (
    <div
      className="w-60 h-screen bg-white px-2 overflow-y-auto sidebar"
      style={{ scrollbarWidth: 'thin' }}
    >
      {/* admin icon and welcoming tex */}
      <div className="flex  pr-6   bg-slate-300 fixed top-0 left-0 ">
        <div className="relative flex">
          <div className="text-blue-500 text-5xl mt-3 pb-3 w-fit">
            <RiAdminFill />
          </div>
          <div className=" mt-3">
            <h1 className="text-black text-1xl font-bold">Welcome Admin</h1>
            <p>Super Admin</p>
          </div>
        </div>
      </div>
      {/*dashboard  inks useful l payments and members*/}
      <div className="mt-32">
        {/* dashboard */}
        <div className="flex mt-5 mx-2">
          <div className="text-2xl text-gray-500">
            <FaHome />
          </div>
          <div className="mx-2 text-gray-500">Dashboard</div>
        </div>

        {/* links */}
        <div className="mt-5">
          {/* useful */}
          <div className="flex mt-5 mx-2">
            <div className="text-2xl text-gray-500">
              <FaLinkSlash />
            </div>
            <div className="mx-2 text-gray-500">Useful Links</div>
            {link ? (
              <IoIosArrowDown
                className="mt-1 cursor-pointer"
                onClick={() => handleMoveDown()}
              />
            ) : (
              <span
                className="flex items-center mt-1"
                onClick={() => handleClickOnLinkIcon()}
              >
                <IoIosArrowForward className="cursor-pointer" />
              </span>
            )}
          </div>
          {hiddenLinks && (
            <div className="bg-white w-full h-fit pl-5 pt-2 dissapearingDiv rounded-lg py-3 shadow-2xl mt-5 font-bold">
              <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
          )}

          {/* payments*/}
          <div className="flex mt-5 mx-2">
            <div className="text-2xl text-gray-500">
              <MdPayments />
            </div>
            <div className="flex ">
              <div className="mx-2 text-gray-500">Payments</div>
              {payment ? (
                <IoIosArrowDown onClick={() => removePayment()} />
              ) : (
                <span>
                  <IoIosArrowForward
                    className="cursor-pointer mt-1"
                    onClick={() => handlePayment()}
                  />
                </span>
              )}
            </div>
          </div>

          {payment && (
            <div className="bg-white w-full h-fit pl-5 pt-2 dissapearingDiv rounded-lg py-3 shadow-2xl mt-5 font-bold">
              <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
          )}
          {/* payments */}

          {/* Members*/}
          {/* members*/}
          <div className="flex mt-5 mx-2">
            <div className="text-2xl text-gray-500">
              <MdOutlineCardMembership />
            </div>
            <div className="flex ">
              <div className="mx-2 text-gray-500">Members</div>
              {members ? (
                <IoIosArrowDown onClick={() => removeMembers()} />
              ) : (
                <span>
                  <IoIosArrowForward
                    className="cursor-pointer mt-1"
                    onClick={() => handleMembers()}
                  />
                </span>
              )}
            </div>
          </div>

          {members && (
            <div className="bg-white w-full h-fit pl-5 pt-2 dissapearingDiv rounded-lg py-3 shadow-2xl mt-5 font-bold">
              <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
          )}
          {/* members */}
        </div>
      </div>

      {/* users List users Groups Referring tree Mail sender manage admins */}
      <div>
        {/* users List */}
        <div className="flex mt-12 justify-center mr-6">
          <div className="text-2xl text-gray-500">
            <LiaLayerGroupSolid />
          </div>
          <div className="mx-2 text-gray-500">Users List</div>
        </div>

        {/* users froups */}

        <div className="flex mt-12 justify-center">
          <div className="text-2xl text-gray-500">
            <LiaLayerGroupSolid />
          </div>
          <div className="mx-2 text-gray-500">Users Groups</div>
        </div>
        {/* reffering tree */}

        <div className="flex mt-12 justify-center">
          <div className="text-2xl text-gray-500">
            <MdOutlineAccountTree />
          </div>
          <div className="mx-2 text-gray-500">Referring tree</div>
        </div>
        {/* Mail sender */}

        <div className="flex mt-12 justify-center">
          <div className="text-2xl text-gray-500">
            <FaMailBulk />
          </div>
          <div className="mx-2 text-gray-500">Mail Sender</div>
        </div>
        {/* manage admin */}

        <div className="flex mt-12 justify-center">
          <div className="text-2xl text-gray-500">
            <MdOutlineManageAccounts />
          </div>
          <div className="mx-2 text-gray-500">Manage Admin</div>
        </div>
      </div>

      {/* localstore ,marketing ,activity , wallet ,mim and sas */}
      <div className="mt-11">
        {/* local store */}

        <div className="flex mt-5 mx-2">
          <div className="text-2xl text-gray-500">
            <LuStore />
          </div>
          <div className="flex ">
            <div className="mx-2 text-gray-500">Local Store</div>
            {localstore ? (
              <IoIosArrowDown onClick={() => removeLocalStore()} />
            ) : (
              <span>
                <IoIosArrowForward
                  className="cursor-pointer mt-1"
                  onClick={() => handleLocalStore()}
                />
              </span>
            )}
          </div>
        </div>

        {localstore && (
          <div className="bg-white w-full h-fit pl-5 pt-2 dissapearingDiv rounded-lg py-3 shadow-2xl mt-5 font-bold">
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
        )}

        {/* local store */}

        {/* marketing*/}

        <div className="flex mt-5 mx-2">
          <div className="text-2xl text-gray-500">
            <SiMarketo />
          </div>
          <div className="flex ">
            <div className="mx-2 text-gray-500">Marketing</div>
            {marketing ? (
              <IoIosArrowDown onClick={() => removeMarketing()} />
            ) : (
              <span>
                <IoIosArrowForward
                  className="cursor-pointer mt-1"
                  onClick={() => handleMarketing()}
                />
              </span>
            )}
          </div>
        </div>

        {marketing && (
          <div className="bg-white w-full h-fit pl-5 pt-2 dissapearingDiv rounded-lg py-3 shadow-2xl mt-5 font-bold">
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
        )}

        {/* marketing */}

        {/* Activity*/}

        <div className="flex mt-5 mx-2">
          <div className="text-2xl text-gray-500">
            <MdOutlineLocalActivity />
          </div>
          <div className="flex ">
            <div className="mx-2 text-gray-500">Activity</div>
            {activity ? (
              <IoIosArrowDown onClick={() => removeActivity()} />
            ) : (
              <span>
                <IoIosArrowForward
                  className="cursor-pointer mt-1"
                  onClick={() => handleActivity()}
                />
              </span>
            )}
          </div>
        </div>

        {activity && (
          <div className="bg-white w-full h-fit pl-5 pt-2 dissapearingDiv rounded-lg py-3 shadow-2xl mt-5 font-bold">
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
        )}

        {/* activity */}

        {/* wallet*/}

        <div className="flex mt-5 mx-2">
          <div className="text-2xl text-gray-500">
            <PiWalletLight />
          </div>
          <div className="flex ">
            <div className="mx-2 text-gray-500">Wallet</div>
            {wallet ? (
              <IoIosArrowDown onClick={() => removeWallet()} />
            ) : (
              <span>
                <IoIosArrowForward
                  className="cursor-pointer mt-1"
                  onClick={() => handleWallet()}
                />
              </span>
            )}
          </div>
        </div>

        {wallet && (
          <div className="bg-white w-full h-fit pl-5 pt-2 dissapearingDiv rounded-lg py-3 shadow-2xl mt-5 font-bold">
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
        )}

        {/* wallet */}

        {/* Mim*/}

        <div className="flex mt-5 mx-2">
          <div className="text-2xl text-gray-500">
            <BiMobileLandscape />
          </div>
          <div className="flex ">
            <div className="mx-2 text-gray-500">MIM</div>
            {mim ? (
              <IoIosArrowDown onClick={() => removeMim()} />
            ) : (
              <span>
                <IoIosArrowForward
                  className="cursor-pointer mt-1"
                  onClick={() => handleMim()}
                />
              </span>
            )}
          </div>
        </div>

        {mim && (
          <div className="bg-white w-full h-fit pl-5 pt-2 dissapearingDiv rounded-lg py-3 shadow-2xl mt-5 font-bold">
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
        )}

        {/* Mim */}

        {/* saas*/}

        <div className="flex mt-5 mx-2">
          <div className="text-2xl text-gray-500">
            <MdSubscriptions />
          </div>
          <div className="flex ">
            <div className="mx-2 text-gray-500">Saas</div>
            {saas ? (
              <IoIosArrowDown onClick={() => removeSaas()} />
            ) : (
              <span>
                <IoIosArrowForward
                  className="cursor-pointer mt-1"
                  onClick={() => handleSaas()}
                />
              </span>
            )}
          </div>
        </div>

        {saas && (
          <div className="bg-white w-full h-fit pl-5 pt-2 dissapearingDiv rounded-lg py-3 shadow-2xl mt-5 font-bold">
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
        )}

        {/* saas */}
      </div>

      {/* blue bg  */}
      <div className=" w-full h-max bg-blue-900 mt-12 px-5 text-white">
        {/* requested users */}
        <div className="flex space-x-7 pt-3 pb-3">
          <div className="text-2xl">
            <TbUsersGroup />
          </div>
          <div>
            <h1>Requested Users</h1>
          </div>
        </div>
        {/* requested users */}
        {/* Contacted */}
        <div className="flex space-x-7 pt-3 pb-3">
          <div className="text-2xl">
            <MdContactPhone />
          </div>
          <div>
            <h1>Contacted</h1>
          </div>
        </div>
        {/*contacted*/}
        {/* manage ads*/}
        <div className="flex space-x-7 pt-3 pb-3">
          <div className="text-2xl">
            <FaBuysellads />
          </div>
          <div>
            <h1>Manage Ads</h1>
          </div>
        </div>
        {/* manage ads*/}
        {/* manage videos*/}
        <div className="flex space-x-7 pt-3 pb-3">
          <div className="text-2xl">
            <MdOutlineVideoSettings />
          </div>
          <div>
            <h1>Manage Videos</h1>
          </div>
        </div>
        {/* manage videos */}
        {/* manage clubs */}
        <div className="flex space-x-7 pt-3 pb-3">
          <div className="text-2xl">
            <SiClubhouse />
          </div>
          <div>
            <h1>Manage Clubs</h1>
          </div>
        </div>
        {/* manage clubs */}
        {/* Positions*/}
        <div className="flex space-x-7 pt-3 pb-3">
          <div className="text-2xl">
            <GiShieldOpposition />
          </div>
          <div>
            <h1>Positions</h1>
          </div>
        </div>
        {/* Positions */}
        {/* Subscribed*/}
        <div className="flex space-x-7 pt-3 pb-3">
          <div className="text-2xl">
            <MdUnsubscribe />
          </div>
          <div>
            <h1>Subscribed</h1>
          </div>
        </div>
        {/* Subscribed */}
        {/* Logout */}
        <div className=" block pt-3 pb-3">
          <div className="text-2xl text-red-600">
            <TbLogout2 />
          </div>
          <div>
            <h1 className="font-bold">Logout</h1>
          </div>
        </div>
        {/* Logout*/}
      </div>
    </div>
  );
};

export default Sidebar;
