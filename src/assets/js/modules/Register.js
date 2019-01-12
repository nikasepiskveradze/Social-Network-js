import http from '../lib/EasyHTTP';
import modal from './Modal';
import User from './User';

class Register {
  constructor() {
    this.regName = '#reg-name';
    this.regLastname = '#reg-lastname';
    this.regEmail = '#reg-email';
    this.regPassword = '#reg-password';
    this.regBirth = '#reg-birth';
    this.male = '#male';
    this.female = '#female';

    this.signUp = '#sign-up';

    // Events
    document.querySelector(this.signUp).addEventListener('click', this.register.bind(this));
  }

  register(event) {
    const user = new User(this.regName, this.regLastname, this.regEmail, this.regPassword, this.regBirth, this.male, this.female);

    if(user.isEmpty()) {
      modal.openModal('Information Missing', 'In order to register, you must fill all fields, please try again!');
    }else {
      this.submitRegistration(user);

      user.clearFields(this.regName, this.regLastname, this.regEmail, this.regPassword,this.regBirth, this.male, this.female);
    }
    
    event.preventDefault();
  }

  submitRegistration(send) {
    http.post(`http://localhost:3000/users`, send, (error, data) => {
      modal.openModal('Registration Completed!', `Congratilations you succesfully register to our site`);
    });
  }
}

export default Register;