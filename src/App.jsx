import { Amenities, Gallery, Highlight, Home, Location, Pricing, SideBar } from './Components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {
    return (
        <div className='w-full flex max-w-screen-2xl mx-auto'>
            <div className='w-full lg:w-[75vw]'>
                <Home />
                <Highlight />
                <Pricing />
                <Amenities />
                <Gallery />
                <Location />
            </div>
            <div className='w-[25vw] lg:block hidden h-screen sticky top-0 shadow-lg'>
                <SideBar />
            </div>
        </div>
    );
};

export default App;
