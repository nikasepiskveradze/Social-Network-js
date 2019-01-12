import http from '../lib/EasyHTTP';
import ui from './UI';
import util from './Utilities';
import modal from './Modal';
import chat from './Chat';

class Profile {
  constructor() {
    this.text = '#text';
    this.publish = '#publish';
    this.contacts = '#contacts';
    this.chat = '.fb-chat-show';
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

    // Chat Events
    document.querySelector(this.contacts).addEventListener('click', chat.showChat);
    document.querySelector(this.chat).addEventListener('click', chat.closeChat);
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
      modal.openModal('Fill In Text', 'If you want to post, you must first fill with some words...');
    }else {
      const dte = util.getPostDate();
      const img = util.getRandomImage(500, 300);
  
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
}

export default Profile;