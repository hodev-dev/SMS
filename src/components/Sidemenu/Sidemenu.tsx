import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const MenuItem = ({ item, level = 1 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <li dir={ "rtl" }>
            <motion.div
                className="flex transition-none items-center cursor-pointer text-indigo-700 border-b bg-white  font-medium text-sm h-14 p-2 hover:bg-indigo-700 hover:text-white"
                onClick={ toggleOpen }
                initial={ {} }
                animate={ {} }
                exit={ {} }
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
            </motion.div>
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
                                <MenuItem key={ child.label } item={ child } level={ level + 1 } />
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
