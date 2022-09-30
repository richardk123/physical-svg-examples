import React from 'react';
import './App.css';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Showcase} from "./components/showcase";
import {Example1} from "./examples/example1";
import {Example2} from "./examples/example2";
import {Example3} from "./examples/example3";
import {Example1Aggregator} from "./examples/example1_aggregator";
import {Intro} from "./components/intro";

function App()
{
    const example1 = new Example1();
    const example1_aggregator = new Example1Aggregator();
    const example2 = new Example2();
    const example3 = new Example3();

    return (
        <div className="App">
            <Header />

            <Intro/>

            <Showcase title="Gravity simulation with mouse interaction aggregated by path" data={example1} />
            <Showcase title="Gravity simulation and mouse interaction aggregated by connected points" data={example1_aggregator} />
            <Showcase title="Zero gravity and mouse and scroll interaction" data={example2} />
            <Showcase title="Another example" data={example3} />

            <Footer />
        </div>
    );
}

export default App;
