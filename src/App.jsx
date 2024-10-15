import { Amenities, Gallery, Highlight, Home, Location, Pricing, SideBar } from './Components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
    return (
        <div className='flex'>
            <div className='w-full lg:w-[75vw]'>
                <Home />
                <div className='max-w-[400px] lg:hidden block mx-auto sm:p-10 p-4 rounded-2xl shadow-2xl'>
                    <SideBar />
                </div>
                <Highlight />
                <Pricing />
                <Amenities />
                <Gallery />
                <Location />
            </div>
            <div className='w-[25vw] lg:block hidden h-screen sticky top-0 shadow-2xl'>
                <SideBar />
            </div>
        </div>
    );
};

export default App;
