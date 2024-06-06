import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import Dashboard from './Dashboard';
import Products from './Products';
import Refills from './Refills';
import Management from './Management';

const Navigation = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/products" component={Products} />
        <Route path="/refills" component={Refills} />
        <Route path="/management" component={Management} />
        <Route path="/" component={Dashboard} />
      </Routes>
      <BottomBar />
    </Router>
  );
};

export default Navigation;

