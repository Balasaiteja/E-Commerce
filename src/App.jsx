import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import { Routes , Route } from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomenPage from './stores/pages/WomenPage'
import FurniturePage from './stores/pages/FurniturePage'
import ACPage from './stores/pages/ACPage'
import TvsPage from './stores/pages/TvsPage'
import KitchenPage from './stores/pages/KitchenPage'
import BooksPage from './stores/pages/BooksPage'
import FridgesPage from './stores/pages/FridgesPage'
import SpeakersPage from './stores/pages/SpeakersPage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'
import ComputerSingle from './singles/ComputerSingle'
import WatchSingle from './singles/WatchSingle'
import MenSingle from './singles/MenSingle'
import WomenSingle from './singles/WomenSingle'
import KitchenSingle from './singles/KitchenSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import AcSingle from './singles/AcSingle'
import TvSingle from './singles/TvSingle'
import BookSingle from './singles/BookSingle'
import FridgeSingle from './singles/FridgeSingle'
import SpeakerSingle from './singles/SpeakerSingle'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/Mobiles' element={<MobilePage/>}></Route>
        <Route path='/Computers' element={<ComputerPage/>}></Route>
        <Route path='/Watches' element={<WatchPage/>}></Route>
        <Route path='/Men' element={<MenPage/>}></Route>
        <Route path='/Women' element={<WomenPage></WomenPage>}></Route>
        <Route path='/Furniture' element={<FurniturePage></FurniturePage>}></Route>
        <Route path='/AC' element={<ACPage></ACPage>}></Route>
        <Route path='TV' element={<TvsPage></TvsPage>}></Route>
        <Route path='/Kitchen' element={<KitchenPage></KitchenPage>}></Route>
        <Route path='/Books' element={<BooksPage></BooksPage>}></Route>
        <Route path='/Fridges' element={<FridgesPage></FridgesPage>}></Route>
        <Route path='/Speakers' element={<SpeakersPage></SpeakersPage>}></Route>
        <Route path='/Mobiles/:id' element={<MobileSingle></MobileSingle>}></Route>
        <Route path='/Computers/:id' element={<ComputerSingle></ComputerSingle>}></Route>
        <Route path='/Watches/:id' element={<WatchSingle></WatchSingle>}></Route>
        <Route path='/Men/:id' element={<MenSingle></MenSingle>}></Route>
        <Route path='/Women/:id' element={<WomenSingle></WomenSingle>}></Route>
        <Route path='/Kitchen/:id' element={<KitchenSingle></KitchenSingle>}></Route>
        <Route path='/Furniture/:id' element={<FurnitureSingle></FurnitureSingle>}></Route>
        <Route path='/AC/:id' element={<AcSingle></AcSingle>}></Route>
        <Route path='/TV/:id' element={<TvSingle></TvSingle>}></Route>
        <Route path='/Books/:id' element={<BookSingle></BookSingle>}></Route>
        <Route path='/Fridges/:id' element={<FridgeSingle></FridgeSingle>}></Route>
        <Route path='/Speakers/:id' element={<SpeakerSingle></SpeakerSingle>}></Route>
        <Route path='/cart' element={<UserCart></UserCart>}></Route>
        
      </Routes>
    </div>
  )
}

export default App
