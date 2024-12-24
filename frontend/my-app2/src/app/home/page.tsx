import React from 'react';
import Navbar from '@/components/global/Header';
import CarouselComponent from './components/homeCarousel';
import CustomizedBreadcrumbs from '@/components/global/NavigationBC';


const App: React.FC = () => {
  return (
    <div>
      <CustomizedBreadcrumbs />
      <Navbar />
      <CarouselComponent />
    </div>
  );
};

export default App;

