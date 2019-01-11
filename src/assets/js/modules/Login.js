import http from "../lib/EasyHTTP";
import modal from './Modal';

class Login {
  constructor() {
    this.email = '#email';
    this.password = '#password';
    this.login = '#login';

    this.loadEvents();
  }

  loadEvents() {
    document.querySelector(this.login).addEventListener('click', this.logIn.bind(this));
  }

  logIn(e) {
    http.get('http://localhost:3000/users', this.submitLogIn.bind(this));

    e.preventDefault();
  }

  submitLogIn(error, data) {
    const email = document.querySelector(this.email).value;
    const password = document.querySelector(this.password).value;

    let user = JSON.parse(data).find((u) => email === u.email && password === u.password);

    if(!user){
      // alert('Wrong Email Or Password');
      modal.openModal('Wrong Password Or Email', 'Please Try Again, You may have an CAPS LOCK issue or check your email and password if you typed correctly.');
    }else {
      window.location.href = 'http://localhost:3001/profile.html';
      localStorage.setItem('userLogged', JSON.stringify(user.id));
    }
    
  }
}

export default Login;