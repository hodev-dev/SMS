import LOGO from '@/assets/img/logo.png';
import PROFILE from '@/assets/img/profile.png';
import SideMenu from "@/components/Sidemenu/Sidemenu";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AreaChart } from "../AreaChart";
import { AreaChart2 } from "../AreaChart2";
import { AreaChart3 } from "../AreaChart3";

function Dashboard() {
    const [show, setShow] = useState(true);
    const items = [
        {
            id: 1,
            level: 1,
            label: 'Dashboard',
        },
        {
            id: 2,
            level: 1,
            label: 'Customers',
            children: [
                {
                    id: 3,
                    level: 2,
                    label: 'All Customers',
                    children: [
                        {
                            id: 10,
                            level: 3,
                            label: 'All Customers',
                            children: [
                                {
                                    id: 101,
                                    level: 4,
                                    label: 'All Customers',
                                },
                                {
                                    id: 102,
                                    level: 4,
                                    label: 'All Customers',
                                },
                            ]
                        },
                        {
                            id: 11,
                            level: 3,
                            label: 'All Customers',
                        },
                    ]
                },
                {
                    id: 4,
                    level: 2,
                    label: 'New Customer',
                },
            ],
        },
        {
            id: 5,
            level: 1,
            label: 'Orders',
        },
    ];


    return (
        <div className={ "relative w-full flex flex-row min-h-screen bg-slate-50 " }>
            <div className={ "w-full flex flex-col" }>
                <div className={ "w-full h-16 bg-white border-b-2 border-slate-300 shadow-lg shadow-slate-700" }></div>
                <motion.div
                    className={ `w-full h-auto min-h-[14] flex flex-row  cursor-pointer bg-slate-200` }
                    onClick={ () => setShow(!show) }
                    initial={ false }
                    animate={ { width: show ? "80%" : "100%", } }
                    exit={ { width: "0" } }
                    transition={ { duration: 0.2 } }
                >
                    <div className={ "w-full mt-8 px-7 flex flex-col gap-4 h-auto transition-none overflow-hidden " }>
                        <div className={ "w-full flex flex-row justify-between" }>
                            <div className={ "w-[33%] bg-gradient-to-br from-primary via-secondary to-secondary h-auto min-h-[23rem] p-4 rounded-2xl flex justify-center items-center" }>
                                <AreaChart3 />
                            </div>
                            <div className={ "w-[33%] bg-gradient-to-br from-primary via-secondary to-secondary h-auto min-h-[23rem] p-4 rounded-2xl flex justify-center items-center" }>
                                <AreaChart />
                            </div>
                            <div className={ "w-[33%] bg-gradient-to-br from-primary via-secondary to-secondary h-auto min-h-[23rem] p-4 rounded-2xl flex justify-center items-center" }>
                                <AreaChart2 />
                            </div>
                        </div>
                        <div className={ "w-full min-h-screen bg-white border-2 border-slate-300 shadow-md rounded-xl" }>
                            test
                        </div>
                    </div>
                </motion.div>
                <AnimatePresence initial={ false }>
                    { show && <motion.div
                        className="fixed right-0 min-h-screen max-h-screen w-[40%] bg-primary overflow-hidden"
                        initial={ { width: 0 } }
                        animate={ { width: "20%" } }
                        exit={ { width: "0%" } }
                        transition={ { duration: 0.2 } }
                    >
                        <div className={ "h-24  flex flex-col" } dir="rtl">
                            <div className={ " w-full flex flex-row  bg-primary  items-center h-24" }>
                                <img alt={ "logo" } src={ LOGO.toString() } className={ "w-12 h-16 mr-5" } />
                                <div className={ "flex flex-col w-6/12 mr-5 text-white  font-IRANSansX text-xl" }>
                                    <div className={ "w-full whitespace-nowrap font-IRANSansX font-bold text-base" }>
                                        سامانه سد و مصارف
                                    </div>
                                    <div className={ "w-full whitespace-nowrap font-IRANSansX font-normal text-base" }>
                                        خوزستان
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={ "h-auto bg-secondary  border-borderColor flex flex-col" } dir="rtl">
                            <div className={ "w-full flex flex-row bg-gradient-to-bl  from-indigo-900 to-secondary rounded-md  border-borderColor items-center h-20" }>
                                <img alt={ "PROFILE" } src={ PROFILE.toString() } className={ "w-14 h-14 rounded-full bg-gradient-to-bl from-primary to-borderColor border-primary border-2 mr-5" } />
                                <div className={ "flex flex-col w-6/12 mr-5 text-zinc-200  font-IRANSansX text-sm" }>
                                    <div className={ "w-full whitespace-nowrap font-IRANSansX font-black text-md" }>
                                        حسین مولا
                                    </div>
                                    <div className={ "w-full mt-2 text-xs text-amber-100 whitespace-nowrap" }>
                                        کارشناس نرم افزار
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SideMenu menuItems={ items } />
                    </motion.div> }
                </AnimatePresence>
            </div>
        </div >
    )
}

export default Dashboard