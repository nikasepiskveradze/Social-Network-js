const hash = require('object-hash');
import util from './Utilities';

class User {
  constructor(name, lastname, email, password, birth, male, female) {
    this.name = document.querySelector(name).value;
    this.lastname = document.querySelector(lastname).value;
    this.username = this.lastname.toLowerCase();
    this.email = document.querySelector(email).value;
    this.password = hash(document.querySelector(password).value);
    this.birth = document.querySelector(birth).value;

    this.gender = document.querySelector(male).checked ? document.querySelector(male).value : document.querySelector(female).checked ? document.querySelector(female).value : '';

    this.image = util.getRandomImage(300, 300);
    this.cover = util.getRandomImage(820, 306);

    this.friends = [
      {
        name: 'Mariam',
        lastname: 'Sarjveladze',
        image: util.getRandomImage(300,300),
        active: true
      },
      {
        name: 'Tornike',
        lastname: 'Gagadze',
        image: util.getRandomImage(300,300),
        active: true
      },
      {
        name: 'Iuri',
        lastname: 'Sajaia',
        image: util.getRandomImage(300,300),
        active: true
      },
      {
        name: 'Nika',
        lastname: 'Sepiskveradze',
        image: util.getRandomImage(300,300),
        active: true
      },
      {
        name: 'Natia',
        lastname: 'Aludauri',
        image: util.getRandomImage(300,300),
        active: true
      }
    ];

    this.posts = [];
  }

  isEmpty() {
    if(this.name === '' || this.lastname === '' || this.email === '' || this.password === '' || this.birth === '' || this.gender === '') {
      return true;
    }
    return false;
  }

  clearFields(name, lastname, email, password, birth, male, female) {
    document.querySelector(name).value = '';
    document.querySelector(lastname).value = '';
    document.querySelector(email).value = '';
    document.querySelector(password).value = '';
    document.querySelector(birth).value = '';
    document.querySelector(male).checked = false;
    document.querySelector(female).checked = false;
  }
}

export default User;