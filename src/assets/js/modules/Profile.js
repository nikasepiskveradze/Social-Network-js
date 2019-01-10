import http from '../lib/EasyHTTP';
import ui from './UI';
import util from './Utilities';

class Profile {
  constructor() {
    this.text = '#text';
    this.publish = '#publish';
    this.user = JSON.parse(localStorage.getItem('userLogged'));
    
    this.loadEvents();
  }

  loadEvents() {
    document.addEventListener('DOMContentLoaded', () => {
      this.getUser((userData) => {
        ui.profileNavRender(userData);
        ui.profilePersonalRender(userData);
        ui.profileCoverRender(userData);
        ui.profileContactRender(userData);

        ui.profilePostRender(userData);
      });
    });

    document.querySelector(this.publish).addEventListener('click', this.addPost.bind(this));
  }

  getUser(user) {
    http.get(`http://localhost:3000/users/${this.user}`, (error, data) => {
      user(JSON.parse(data));
    });
  }

  putPosts(newPost) {
    http.put(`http://localhost:3000/users/${this.user}`, newPost, (error, data) => {
      ui.profilePostRender(newPost);
    });
  }

  addPost() {
    let txt = document.querySelector(this.text).value;

    if(txt === '') {
      alert('Please Fill Field');
      return;
    }

    const dte = util.getPostDate();
    const img = util.getRandomImage();

    const information = {
      date: dte,
      image: img,
      body: txt
    }

    this.getUser((data) => {
      data.posts.push(information);
      this.putPosts(data);
    });
  }
}

export default Profile;