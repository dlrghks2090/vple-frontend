import React from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PlanMap from './pages/planMap/PlanMap'
import Login from "./pages/login/Login";
import ViewAllGuide from "./pages/viewAllGuide/ViewAllGuide";
import ViewAllRestaurant from "./pages/viewAllRestaurant/ViewAllRestaurant";
import Plan from "./components/plan/Plan";
import Home from "./pages/home/Home";
import GuideDetail from './pages/guideDetail/GuideDetail';
import RestaurantDetail from './pages/restaurantDetail/RestaurantDetail';
import MyProfile from './pages/myProfile/MyProfile';
import MyProfileEdit from './pages/myProfileEdit/MyProfileEdit';
import BottomNav from './components/bottomNav/BottomNav';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/plan' element={<Plan/>}/>
                    <Route path='/plan/map' element={<PlanMap/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/view/guide' element={<ViewAllGuide/>}/>
                    <Route path='/view/restaurant' element={<ViewAllRestaurant/>}/>
                    <Route path='/guide/detail' element={<GuideDetail/>} />
                    <Route path='/restaurant/detail' element={<RestaurantDetail/>} />
                    <Route path='/myProfile' element={<MyProfile/>} />
                    <Route path='/myProfile/edit' element={<MyProfileEdit/> }/>
                </Routes>
                <BottomNav/>
            </Router>
        </div>
    );
}

export default App;
