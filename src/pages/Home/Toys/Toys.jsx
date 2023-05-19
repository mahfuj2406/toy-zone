import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysCard from "./ToysCard";


const Toys = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [toys, setToys] = useState([]);
    const [categorizedToys, setCategorizedToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    useEffect(() => {
        if (tabIndex == 0) {
            const newToys = toys.filter(toy => toy.subCategory === "Regular Car");
            setCategorizedToys(newToys);
        }
        else if (tabIndex == 1) {
            const newToys = toys.filter(toy => toy.subCategory === "Sports Car");
            setCategorizedToys(newToys);
        }
        else if (tabIndex == 2) {
            const newToys = toys.filter(toy => toy.subCategory === "Truck");
            setCategorizedToys(newToys);
        }
    }, [tabIndex,toys])

    return (
        <div>
            <div className="text-center py-5 my-4">
                <h2 className="text-4xl text-teal-500 font-bold ">Toys</h2>
            </div>
            <div>
                <p>total toys number: {toys.length}</p>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Regular Car</Tab>
                        <Tab>Sports Car</Tab>
                        <Tab>Truck</Tab>
                    </TabList>

                    <TabPanel >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5 px-6">
                            {
                                categorizedToys.map(toy => <ToysCard key={toy._id} toy={toy}></ToysCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5 px-6">
                            {
                                categorizedToys.map(toy => <ToysCard key={toy._id} toy={toy}></ToysCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5 px-6">
                            {
                                categorizedToys.map(toy => <ToysCard key={toy._id} toy={toy}></ToysCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Toys;