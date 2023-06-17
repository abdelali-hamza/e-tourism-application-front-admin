
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';
import SidebarMob from './SidebarMob'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownOpen2, setDropdownOpen2] = useState(false);
    const [isDropdownOpen3, setDropdownOpen3] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
            setDropdownOpen(false)
            setDropdownOpen2(false)
            setDropdownOpen3(false)
        }
    };

    const toggleDropdownNot = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdownMeg = () => {
        setDropdownOpen2(!isDropdownOpen2);
    };

    const toggleDropdownSett = () => {
        setDropdownOpen3(!isDropdownOpen3);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="w-full flex flex-col p-2 sm:px-8" >
            <div className=" flex flex-row items-center justify-between w-full">
                <div className='md:w-1/2 w-full'>
                    <div className="flex justify-between items-center w-full">
                        <div className='sm:hidden flex p-2' onClick={() => setOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                        <div className=" relative  items-center w-full flex flex-row ">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" className=" focus:border-blue-900  border-2 w-full p-1 pl-10 text-lg mr-1 text-gray-900 border-gray-400 rounded-lg bg-white" placeholder="Rechercher un Lieu ...." />
                            <div className=" ml-2  mt-3 items-center hidden md:flex ">
                                <button type="button" className="text-white bg-blue-600 hover:bg-blue-800  focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm sm:px-3  sm:py-2 px-2 py-2  text-center items-center mb-2.5" >
                                    RECHERCHE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:flex flex-row hidden'>
                    <div className="relative inline-block mr-3" ref={dropdownRef}>
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-200 hover:bg-blue-300 text-white text-xl font-bold focus:outline-none"
                            onClick={toggleDropdownNot}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0E86D4" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="none">
                                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        Notification 1
                                    </div>
                                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        Notification 2
                                    </div>
                                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        Notification 3
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative inline-block mr-3" ref={dropdownRef}>
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-200 hover:bg-blue-300 text-white text-xl font-bold focus:outline-none"
                            onClick={toggleDropdownMeg}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0E86D4" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                            </svg>
                        </button>
                        {isDropdownOpen2 && (
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="none">
                                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        message 1
                                    </div>
                                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        message 2
                                    </div>
                                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        message 3
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative inline-block" ref={dropdownRef}>
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-red-200 hover:bg-red-300 text-white text-xl font-bold focus:outline-none"
                            onClick={toggleDropdownSett}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF2E2E" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                        {isDropdownOpen3 && (
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="none">
                                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        message 1
                                    </div>
                                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        message 2
                                    </div>
                                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        message 3
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative inline-block" ref={dropdownRef}>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='md:flex hidden whitespace-nowrap mr-4'>Bonjour Imed Triki</div>
                        <div>
                            <button
                                type="button"
                                className="inline-flex justify-center items-center w-9 h-9 rounded-full bg-indigo-500 text-white text-xl font-bold focus:outline-none"
                                onClick={toggleDropdown}
                            >
                                I
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="none">
                                <Link href="/ProfilePage">
                                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                                        Mon compte
                                    </div>
                                </Link>
                                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                                    Paramètres
                                </div>
                                <div className="block px-4 py-2 text-sm text-red-700 hover:bg-red-100 hover:text-red-900 cursor-pointer">
                                    Déconnexion
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {open && <SidebarMob setOpen={setOpen} />}
        </div>
    )
}

export default Navbar