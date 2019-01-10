import http from '../lib/EasyHTTP';
import ui from '../modules/UI';

class Profile {
  constructor() {
    this.text = '#text';
    this.publish = '#publish';
    this.user = JSON.parse(localStorage.getItem('userLogged'));
    
    this.loadEvents();
  }

  loadEvents() {
    document.addEventListener('DOMContentLoaded', () => {
      this.getPosts((data) => {
        ui.profilePostRender(JSON.parse(data));
      });
    });

    document.querySelector(this.publish).addEventListener('click', this.addPost.bind(this));
  }

  getPosts(use) {
    http.get(`http://localhost:3000/users/${this.user}`, (error, data) => {
      use(data);
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

    const information = {
      body: txt
    }

    this.getPosts((data) => {
      let user = JSON.parse(data);

      user.posts.push(information);

      this.putPosts(user);
    });
  }
}

export default Profile;