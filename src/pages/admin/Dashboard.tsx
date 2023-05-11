import SideMenu from "@/components/Sidemenu/Sidemenu";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useCallback, useState } from "react";

function Dashboard() {
    const [show, setShow] = useState(true);
    const items = [
        {
            id: 1,
            label: 'Dashboard',
        },
        {
            id: 2,
            label: 'Customers',
            children: [
                {
                    id: 3,
                    label: 'All Customers',
                    children: [
                        {
                            id: 10,
                            label: 'All Customers',
                            children: [
                                {
                                    id: 101,
                                    label: 'All Customers',
                                },
                                {
                                    id: 102,
                                    label: 'All Customers',
                                },
                            ]
                        },
                        {
                            id: 11,
                            label: 'All Customers',
                        },
                    ]
                },
                {
                    id: 4,
                    label: 'New Customer',
                },
            ],
        },
        {
            id: 5,
            label: 'Orders',
        },
    ];

    const data = [
        {
            "country": "AD",
            "hot dog": 64,
            "hot dogColor": "hsl(155, 70%, 50%)",
            "burger": 179,
            "burgerColor": "hsl(176, 70%, 50%)",
            "sandwich": 91,
            "sandwichColor": "hsl(126, 70%, 50%)",
            "kebab": 166,
            "kebabColor": "hsl(195, 70%, 50%)",
            "fries": 133,
            "friesColor": "hsl(50, 70%, 50%)",
            "donut": 72,
            "donutColor": "hsl(128, 70%, 50%)"
        },
        {
            "country": "AE",
            "hot dog": 160,
            "hot dogColor": "hsl(90, 70%, 50%)",
            "burger": 114,
            "burgerColor": "hsl(31, 70%, 50%)",
            "sandwich": 63,
            "sandwichColor": "hsl(155, 70%, 50%)",
            "kebab": 26,
            "kebabColor": "hsl(6, 70%, 50%)",
            "fries": 115,
            "friesColor": "hsl(345, 70%, 50%)",
            "donut": 16,
            "donutColor": "hsl(27, 70%, 50%)"
        },
        {
            "country": "AF",
            "hot dog": 166,
            "hot dogColor": "hsl(229, 70%, 50%)",
            "burger": 109,
            "burgerColor": "hsl(282, 70%, 50%)",
            "sandwich": 53,
            "sandwichColor": "hsl(56, 70%, 50%)",
            "kebab": 172,
            "kebabColor": "hsl(16, 70%, 50%)",
            "fries": 158,
            "friesColor": "hsl(172, 70%, 50%)",
            "donut": 153,
            "donutColor": "hsl(197, 70%, 50%)"
        },
        {
            "country": "AG",
            "hot dog": 77,
            "hot dogColor": "hsl(133, 70%, 50%)",
            "burger": 110,
            "burgerColor": "hsl(27, 70%, 50%)",
            "sandwich": 128,
            "sandwichColor": "hsl(334, 70%, 50%)",
            "kebab": 62,
            "kebabColor": "hsl(167, 70%, 50%)",
            "fries": 129,
            "friesColor": "hsl(204, 70%, 50%)",
            "donut": 187,
            "donutColor": "hsl(289, 70%, 50%)"
        },
        {
            "country": "AI",
            "hot dog": 12,
            "hot dogColor": "hsl(310, 70%, 50%)",
            "burger": 0,
            "burgerColor": "hsl(164, 70%, 50%)",
            "sandwich": 183,
            "sandwichColor": "hsl(276, 70%, 50%)",
            "kebab": 183,
            "kebabColor": "hsl(81, 70%, 50%)",
            "fries": 14,
            "friesColor": "hsl(279, 70%, 50%)",
            "donut": 161,
            "donutColor": "hsl(59, 70%, 50%)"
        },
        {
            "country": "AL",
            "hot dog": 149,
            "hot dogColor": "hsl(208, 70%, 50%)",
            "burger": 3,
            "burgerColor": "hsl(65, 70%, 50%)",
            "sandwich": 167,
            "sandwichColor": "hsl(296, 70%, 50%)",
            "kebab": 177,
            "kebabColor": "hsl(276, 70%, 50%)",
            "fries": 113,
            "friesColor": "hsl(252, 70%, 50%)",
            "donut": 8,
            "donutColor": "hsl(207, 70%, 50%)"
        },
        {
            "country": "AM",
            "hot dog": 157,
            "hot dogColor": "hsl(51, 70%, 50%)",
            "burger": 14,
            "burgerColor": "hsl(203, 70%, 50%)",
            "sandwich": 111,
            "sandwichColor": "hsl(179, 70%, 50%)",
            "kebab": 100,
            "kebabColor": "hsl(281, 70%, 50%)",
            "fries": 98,
            "friesColor": "hsl(14, 70%, 50%)",
            "donut": 1,
            "donutColor": "hsl(128, 70%, 50%)"
        }
    ];

    const renderItems = useCallback(() => {
        return (
            <Fragment>

            </Fragment>
        )
    }, []);

    return (
        <div className={ "relative w-full flex flex-row min-h-screen bg-slate-50  overflow-x-hidden" }>
            <motion.div
                className={ `h-auto min-h-[14] flex flex-row border cursor-pointer bg-white` }
                onClick={ () => setShow(!show) }
                initial={ { width: "0" } }
                animate={ { width: show ? "75%" : "100%" } }
                exit={ { width: "0" } }
                transition={ { duration: 0.2 } }
            >
                <div className={ "w-6/12 h-screen bg-blue-500 flex flex-col" }>
                    { renderItems() }
                </div>
                <div className={ "w-6/12 h-screen bg-red-500" }>
                </div>
            </motion.div>
            <AnimatePresence>
                { show && <motion.div
                    className="min-h-screen bg-white overflow-hidden"
                    initial={ { x: "50vw", width: "0" } }
                    animate={ { x: 0, width: "25%" } }
                    exit={ { x: "50vw", width: "0%" } }
                    transition={ { duration: 0.2 } }
                >
                    <SideMenu menuItems={ items } />
                </motion.div> }
            </AnimatePresence>
        </div >
    )
}

export default Dashboard