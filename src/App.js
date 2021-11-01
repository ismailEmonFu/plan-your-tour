import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Inspiration from './Pages/Inspiration/Inspiration';
import Hotel from './Pages/Hotel/Hotel';
import Location from './Pages/Location/Location';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/LoginAndRegister/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import GoldOffer from './Pages/GoldOffer/GoldOffer';
import AddLocation from './Pages/AddManage/AddLocation';
import Admin from './Pages/Admin/Admin';
import ManageOrder from './Pages/AddManage/ManageOrder';
import PrivateRoute from './Pages/LoginAndRegister/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import BookPackage from './Pages/BookPacakge/BookPackage';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import UserPanel from './UserPanel/UserPanel';
import AuthorizeAdmin from './Pages/Admin/AuthorizeAdmin';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/location'>
              <Location></Location>
            </Route>
            <Route path='/inspiration'>
              <Inspiration></Inspiration>
            </Route>
            <Route path='/goldOffer'>
              <GoldOffer></GoldOffer>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/admin'>
              <Admin></Admin>
            </Route>
            <Route path='/newLocation'>
              <AddLocation></AddLocation>
            </Route>
            <Route path='/adminPanel'>
              <AdminPanel></AdminPanel>
            </Route>
            <Route path='/authorizeAdmin'>
              <AuthorizeAdmin></AuthorizeAdmin>
            </Route>
            <PrivateRoute path='/userPanel'>
              <UserPanel></UserPanel>
            </PrivateRoute>
            <Route path='/manageUser'>
              <ManageOrder></ManageOrder>
            </Route>
            <PrivateRoute path='/package/:packageId'>
              <BookPackage></BookPackage>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
