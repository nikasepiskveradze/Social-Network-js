import http from '../lib/EasyHTTP';

class Profile {
  constructor() {
    this.profileNav = '.fb-profile-nav';
    this.profilePersonal = '.fb-personal';

    this.user = '';

    this.getInformationFromAPI();
  }

  getInformationFromAPI() {
    const userId = JSON.parse(localStorage.getItem('userLogged'));

    http.get(`http://localhost:3000/users/${userId}`, (error, data) => {
      this.user = JSON.parse(data);
      console.log(this.user);

      // Render Elements
    this.profileNavItemRender();
    this.profilePersonalRender();

    });
  }

  profileNavItemRender() {
    const nav = document.querySelector(this.profileNav);

    const li = document.createElement('li');
    li.className = 'fb-profile-nav__item';

    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.className = 'fb-profile-nav__item__info';

    const img = document.createElement('img');
    img.src = this.user.image;

    const span = document.createElement('span');
    span.textContent = this.user.name;

    a.appendChild(img);
    a.appendChild(span);

    li.appendChild(a);

    nav.insertBefore(li, nav.firstElementChild);
  }

  profilePersonalRender() {
    const personal = document.querySelector(this.profilePersonal);
    
    const img = document.createElement('img');
    img.src = this.user.image;
    img.className = 'fb-personal__image';
    
    const h2 = document.createElement('h2');
    h2.className = 'fb-personal__name';
    h2.textContent = `${this.user.name} ${this.user.lastname}`;

    const h3 = document.createElement('h3');
    h3.className = 'fb-personal__username';
    h3.textContent = `@${this.user.username}`;

    personal.insertBefore(h3, personal.firstElementChild);
    personal.insertBefore(h2, personal.firstElementChild);
    personal.insertBefore(img, personal.firstElementChild);
  }
}

export default Profile;