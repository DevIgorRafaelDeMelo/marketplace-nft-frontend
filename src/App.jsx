import Footer from './Ui/Components/Footer/Footer';
import Profile from './Pages/Profile/Profile';
import Favorited from './Pages/Profile/components/SubPages/Favorited';
import MyCollection from './Pages/Profile/components/SubPages/MyCollection';
import Offers from './Pages/Profile/components/SubPages/Offers';
import Register from './Pages/Sign/Sign';
import Header from './Ui/Components/Header';

import Main from './Pages/Home/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Register />} />
        <Route path="/profile">
          <Route
            path="/profile"
            element={
              <Profile>
                <Offers />
              </Profile>
            }
          />
          <Route
            path="/profile/offers"
            element={
              <Profile>
                <Offers />
              </Profile>
            }
          />
          <Route
            path="/profile/collection"
            element={
              <Profile>
                <MyCollection />
              </Profile>
            }
          />
          <Route
            path="/profile/favorited"
            element={
              <Profile>
                <Favorited />
              </Profile>
            }
          />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
