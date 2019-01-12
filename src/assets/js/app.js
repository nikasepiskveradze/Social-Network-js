import Login from './modules/Login';
import Register from './modules/Register';
import Profile from './modules/Profile';

const App = {
  init: function() {
    if(window.location.pathname === '/') {
      const login = new Login;
      const register = new Register;
    }

    if(window.location.pathname === '/profile.html') {
      const profile = new Profile;
    }
    
  }
}

App.init();