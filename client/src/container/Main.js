import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile';
import Adenine from '../pages/Adenine';
import Benzene from '../pages/Benzene';
import Diamond from '../pages/Diamond';
import Thymine from '../pages/Thymine';
import Uracil from '../pages/Uracil';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/adenine" element={<Adenine />} />
                <Route path="/benzene" element={<Benzene />} />
                <Route path="/diamond" element={<Diamond />} />
                <Route path="/thymine" element={<Thymine />} />
                <Route path="/uracil" element={<Uracil />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
