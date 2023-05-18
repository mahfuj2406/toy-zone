import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysCard from "./ToysCard";


const Toys = () => {
    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])



    return (
        <div>
            <div className="text-center py-5 my-4">
                <h2 className="text-4xl text-teal-500 font-bold ">Toys</h2>
            </div>
            <div>
                <p>total toys number: {toys.length}</p>
                <Tabs>
                    <TabList>
                        <Tab>Regular Car</Tab>
                        <Tab>Sports Car</Tab>
                        <Tab>Truck</Tab>
                    </TabList>

                    <TabPanel >
                        <div  className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5 px-6">
                        {
                            toys.map(toy=> <ToysCard key={toy._id}  toy={toy}></ToysCard>)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Sports car tab</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Truck lorry tab</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Toys;