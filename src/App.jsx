import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComponentList from './ComponentList';
import Alerts from './components/Alerts';
import Badges from './components/Badges';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import ListGroups from './components/ListGroups';
import Modals from './components/Modals';
import Ratings from './components/Ratings';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import ProgressBars from './components/ProgressBars';
import Tooltips from './components/Tooltips';

function App() {
  return (
    <Router>
      <div className='flex'>
        <ComponentList />
        <div className='flex items-start justify-center md:pl-60 pl-40 pt-8 w-full min-h-[100vh] bg-quicksand-300'>
          <Routes>
            <Route
              path='/'
              element={
                <div className='flex flex-col items-center justify-center gap-10 h-full'>
                  <h1 className='text-3xl text-semibold'>My component list</h1>
                  <p>Click on the links to see all the components</p>
                  <AiOutlineArrowLeft className='text-4xl scale-x-125' />
                </div>
              }
            />
            <Route path='/buttons' element={<Buttons />} />
            <Route path='/alerts' element={<Alerts />} />
            <Route path='/badges' element={<Badges />} />
            <Route path='/cards' element={<Cards />} />
            <Route path='/modals' element={<Modals />} />
            <Route path='/ratings' element={<Ratings />} />
            <Route path='/list-groups' element={<ListGroups />} />
            <Route path='/progress-bars' element={<ProgressBars />} />
            <Route path='/tooltips' element={<Tooltips />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
