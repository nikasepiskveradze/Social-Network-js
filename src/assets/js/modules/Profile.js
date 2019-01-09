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

    this.getPosts();
  }


  loadEvents() {
    document.querySelector(this.publish).addEventListener('click', this.addPost.bind(this));
  }

  getPosts() {
    http.get(`http://localhost:3000/users/${this.user}`, (error, data) => {
      ui.profilePostRender(JSON.parse(data));
    });
  }

  addPost() {
    let txt = document.querySelector(this.text).value;

    const information = {
      body: txt
    }
    
    // http.put(`http://localhost:3000/users/${this.user}`,)
    http.get(`http://localhost:3000/users/${this.user}`, (error, data) => {
      let dataToArray = JSON.parse(data);

      dataToArray.posts.push(information);

      // console.log(dataToArray.posts);

      http.put(`http://localhost:3000/users/${this.user}`, dataToArray, (error, data) => {
        console.log('Modified');
        ui.profilePostRender(dataToArray);
      });

    });

    console.log(txt);
  }
}

export default Profile;