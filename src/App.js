import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Home/Booking/Booking';
import Error from './Pages/Home/Error/Error';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Header from './Pages/Sheared/Hedaer/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider >
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
