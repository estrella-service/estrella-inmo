import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalpePage from './pages/CalpePage';
import AlteaPage from './pages/AlteaPage';
import BenisaPage from './pages/BenisaPage';
import MorairaPage from './pages/MorairaPage';
import PropietariosPage from './pages/PropietariosPage';
import Details from './components/Details';
import PropertyPage from './pages/PropertyPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPanelPage from './pages/AdminPanelPage';
import DashBoradMain from './components/admin/DashboardMain';
import PropertyList from './components/admin/PropertyList';
import UserList from './components/admin/UsersList';
import ReservationList from './components/admin/ReservationList';
import HouseDetails from './components/admin/HouseDetails';
import { Toaster } from 'sonner';
import EditPropertyForm from './components/admin/EditPropertyForm';
import UserDetail from './components/admin/UserDetail';
import ReservationForm from './components/ReservationForm';
import ReservationDetail from './components/admin/ReservationDetail';
import BookingTable from './components/admin/BookingTable';
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Toaster
          position='top-right'
          richColors
        />
        <Details />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/visit-calpe'
            element={<CalpePage />}
          />
          <Route
            path='/visit-altea'
            element={<AlteaPage />}
          />
          <Route
            path='/visit-benissa'
            element={<BenisaPage />}
          />
          <Route
            path='/visit-moraira'
            element={<MorairaPage />}
          />
          <Route
            path='/propietarios'
            element={<PropietariosPage />}
          />
          <Route
            path='/property/:id'
            element={<PropertyPage />}
          />
          <Route
            path='/login'
            element={<LoginPage />}
          />
          <Route
            path='/register'
            element={<RegisterPage />}
          />
          <Route
            path='/reservar/:id'
            element={<ReservationForm />}
          />
          {/* Admin Panel Routes */}
          <Route
            path='/admin-panel'
            element={<AdminPanelPage />}>
            <Route
              index
              element={<ReservationList />}
            />
            <Route
              path='houses'
              element={<PropertyList />}
            />
            <Route
              path='new-property'
              element={<DashBoradMain />}
            />
            <Route
              path='property/:id'
              element={<EditPropertyForm />}
            />
            <Route
              path='houses/:id'
              element={<HouseDetails />}
            />
            <Route
              path='guests'
              element={<UserList />}
            />
            <Route
              path='guests/:id'
              element={<UserDetail />}
            />
            <Route
              path='bookings'
              element={<ReservationList />}
            />
            <Route
              path='bookings/:id'
              element={<ReservationDetail />}
            />
          </Route>
          {/* Admin Panel Routes END */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
