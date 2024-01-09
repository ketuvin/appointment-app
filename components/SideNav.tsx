import React from 'react';
import Link from 'next/link';
import { HomeIcon, AppointmentsIcon, MessagesIcon, ContactsIcon, DataAnalyticsIcon, SubscriptionIcon, HelpCenterIcon, SettingsIcon } from './SVGComponents';

const SideNav: React.FC = () => {
  const menuItems = [
    { text: 'Home', link: '/', icon: <HomeIcon /> },
    { text: 'Appointments', link: '/appointments', icon: <AppointmentsIcon /> },
    { text: 'Messages', link: '/messages', icon: <MessagesIcon /> },
    { text: 'Contacts', link: '/contacts', icon: <ContactsIcon /> },
    { text: 'Data Analytics', link: '/analytics', icon: <DataAnalyticsIcon /> },
    { text: 'Subscription', link: '/subscription', icon: <SubscriptionIcon /> },
    { text: 'Help Center', link: '/help', icon: <HelpCenterIcon /> },
    { text: 'Settings', link: '/settings', icon: <SettingsIcon /> },
  ];

  return (
    <nav className="fixed top-0 left-0 h-full bg-zinc-900 text-white w-64 flex flex-col ">
      <div className="flex items-center justify-center my-10 gap-20">
        <img src="/images/Header.png" alt="Header Logo" className="w-[183px] h-[36px]" />
      </div>
      <div
        className="h-px w-full bg-gray-900 border-b-[1px] border-gradient mb-10"
        style={{
          borderImageSource: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))',
          borderImageSlice: '1',
        }}
      />
      <ul className="space-y-1 flex-grow">
        {menuItems.map((item, index) => (
        <li
          key={index}
          className="items-center justify-center w-full hover:text-orange-500 hover:bg-zinc-800 cursor-pointer hover:border-r-4 hover:border-orange-500"
          style={{ height: '60px', padding: '20px 40px' }}
        >
          <Link href={item.link} legacyBehavior>
            <a className="flex text-base font-medium items-center gap-2">
              {item.icon}
              {item.text}
            </a>
          </Link>
        </li>
        ))}
      </ul>

      <div
        className="h-px w-full bg-gray-900 border-b-[1px] border-gradient mb-10"
        style={{
          borderImageSource: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))',
          borderImageSlice: '1',
        }}
      />
      <div className="mt-auto flex items-center justify-center gap-12 mb-10">
        <img src="/images/Copyright.png" alt="Footer Logo" className="w-[79px] h-[46px]" />
      </div>
    </nav>
  );
};

export default SideNav;