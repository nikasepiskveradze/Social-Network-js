import Login from './modules/Login';
import Profile from './modules/Profile';


const App = {
  init: function() {
    if(window.location.pathname === '/') {
      const login = new Login;
    }

    if(window.location.pathname === '/profile.html') {
      const profile = new Profile;
    }
    
  }
}

App.init();