import http from '../lib/EasyHTTP';
import ui from '../modules/UI';

class Profile {
  constructor() {
    // this.profileNav = '.fb-profile-nav';
    // this.profilePersonal = '.fb-personal';
    // this.profilePost = '.fb-post';
    // this.profileContact = '.fb-contact';

    this.text = '#text';
    this.publish = '#publish';

    this.user = JSON.parse(localStorage.getItem('userLogged'));

    this.loadEvents();
  }


  loadEvents() {
    // document.addEventListener('DOMContentLoaded', () => {
    //   this.getPosts();
    // });

    document.addEventListener('DOMContentLoaded', () => {
      this.getPosts((data) => {
        ui.profilePostRender(JSON.parse(data));
      });
    });

    document.querySelector(this.publish).addEventListener('click', this.addPost.bind(this));
  }

  // getPosts() {
  //   http.get(`http://localhost:3000/users/${this.user}`, (error, data) => {
  //     ui.profilePostRender(JSON.parse(data));
  //   });
  // }

  getPosts(use) {
    http.get(`http://localhost:3000/users/${this.user}`, (error, data) => {
      use(data);
    });
  }

  putPosts(newPost) {
    http.put(`http://localhost:3000/users/${this.user}`, newPost, (error, data) => {
      console.log('Modified');
      ui.profilePostRender(newPost);
    })
  }

  addPost() {
    let txt = document.querySelector(this.text).value;

    const information = {
      body: txt
    }
    
    http.get(`http://localhost:3000/users/${this.user}`, (error, data) => {
      let user = JSON.parse(data);

      user.posts.push(information);

      this.putPosts(user);

      // http.put(`http://localhost:3000/users/${this.user}`, dataToArray, (error, data) => {
      //   console.log('Modified');
      //   ui.profilePostRender(dataToArray);
      // });

    });

    console.log(txt);
  }
}

export default Profile;