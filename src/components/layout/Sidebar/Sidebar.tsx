import { useState, useEffect, useRef } from 'react';
import { Title } from '../../Title/Title';
import ListItems from './ListItems';
import { Items } from './ItemsArray';
import { PiGraph } from 'react-icons/pi';
import { Bars3Icon } from '@heroicons/react/16/solid';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef: any = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event: { target: any; }) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            closeSidebar();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    return (
        <>
            <button
                onClick={toggleSidebar}
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm  text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="w-5 h-5" />
            </button>
            <aside
                id="default-sidebar"
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-40 w-64 border-r-2  shadow-xl h-full transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 bg-white dark:bg-gray-800`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto relative">
                    <div className="flex items-center justify-center">
                        <PiGraph className="h-10 w-10 mt-2" />
                        <Title title={"SpendTrend."} />
                    </div>
                    <ul className="space-y-2 font-medium text-primary mt-8">
                        {Items.map((Item) => (
                            <ListItems to={Item.item.replace(' ', '').toLowerCase()} key={Item.item} item={Item.item} Icon={Item.Icon} />
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
