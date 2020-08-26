import React, {Fragment} from 'react';
import Slider from '../components/Slider'
import About from '../components/About'
import Projects from '../components/Projects'
function Dashboard() {
  return (
    <Fragment>
        <Slider />
        <About />
        <Projects />
    </Fragment>
  );
}

export default Dashboard;
