import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const MenuItem = ({ item }) => {
    const { level } = item;
    console.log("🚀 ~ file: Sidemenu.tsx:6 ~ MenuItem ~ item:", item)
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <li dir={ "rtl" }>
            <div
                className={ `flex transition-none p-4 items-center cursor-pointer text-textColor border-b  ${level == 1 ? "bg-primary border-borderColor" : "bg-secondary border-borderColor"}  font-medium text-sm h-12  hover:bg-gradient-to-bl  hover:from-indigo-900 hover:to-secondary hover:text-white ` }
                onClick={ toggleOpen }
            >
                <span className="mr-2">{ item.label }</span>
                { item.children && (
                    <motion.span
                        className="sub-menu-icon"
                        initial={ { rotate: 0 } }
                        animate={ { rotate: isOpen ? -90 : 0 } }
                        transition={ { duration: 0.3 } }
                    >
                        &gt;
                    </motion.span>
                ) }
            </div>
            { item.children && (
                <AnimatePresence>
                    { isOpen && (
                        <motion.ul
                            className={ `sub-menu ${level > 0 ? 'sub-menu-nested' : ''} text-gray-600 font-normal text-sm` }
                            initial={ { height: 0 } }
                            animate={ { height: 'auto' } }
                            exit={ { height: 0 } }
                            transition={ { duration: 0.3 } }
                        >
                            { item.children.map((child) => (
                                <MenuItem key={ child.id + child.level } item={ child } />
                            )) }
                        </motion.ul>
                    ) }
                </AnimatePresence>
            ) }
        </li>
    );
};

const SideMenu = ({ menuItems }) => {

    return (
        <ul className=" text-gray-800 font-medium text-sm">
            { menuItems.map((item, index) => (
                <MenuItem key={ item.label } item={ item } />
            )) }
        </ul>
    );
};

export default SideMenu;
