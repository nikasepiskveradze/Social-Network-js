class UI {
  constructor() {
    this.profileNav = '.fb-profile-nav';
    this.profilePersonal = '.fb-personal';
    this.profileContact = '.fb-contact';
    this.profilePost = '.fb-post';

    this.text = '#text';
  }

  profileNavRender(user) {
    const nav = document.querySelector(this.profileNav);
    let output = `
      <li class="fb-profile-nav__item">
        <a href="#" class="fb-profile-nav__item__info">
          <img src="${user.image}" alt="">
          <span>${user.name}</span>
        </a>
      </li>
    `;

    // nav.insertBefore(output, nav.firstElementChild);
    nav.innerHTML = output + nav.innerHTML;
  }

  profilePersonalRender(user) {
    const person = document.querySelector(this.profilePersonal);
    let output = `
      <img class="fb-personal__image" src="${user.image}" alt="">
    
      <h2 class="fb-personal__name">${user.name} ${user.lastname}</h2>
      <h3 class="fb-personal__username">@${user.username}</h3>
    `;

    person.innerHTML = output + person.innerHTML;
  }

  profileContactRender(user) {
    const contact = document.querySelector(this.profileContact);
    let output = ``;

    user.friends.forEach((friend) => {
      output += `
        <div class="fb-contact__item">
          <div class="fb-contact__item__info">
            <img src="${friend.image}" alt="Profile Photo">
            <span>${friend.name} ${friend.lastname}</span>
          </div>`;
        
        if(friend.active) {
          output += `<span class="green-dot"></span>`;
        }

        output += `</div>`;
    });

    contact.innerHTML += output;
  }

  profilePostRender(user) {
    const pts = document.querySelector(this.profilePost);
    let output = '';

    let name = user.name;
    let lastname = user.lastname;
    let image = user.image;

    user.posts.reverse().forEach((post) => {
      output += `
        <div class="fb-post__item">
          <div class="fb-post__header">
            <img src="${image}" alt="">

            <div class="fb-post__header__info">
              <p class="fb-post__header__info__name"><a href="#">${name} ${lastname}</a></p>
              <p class="fb-post__header__info__date">${post.date}</p>
            </div>
          </div>

          <div class="fb-post__content">
            <p>${post.body}</p>
          </div>

          <div class="fb-post__photo">
            <a href="#"><img src="${post.image}" alt="Post Photo"></a>
          </div>

          <div class="fb-post__footer">
            <a href="#"><i class="fa fa-thumbs-o-up"></i> Like</a>
            <a href="#"><i class="fa fa-comment-o"></i> Comments</a>
            <a href="#"><i class="fa fa-share"></i> Share</a>
          </div>
        </div>
      `;
    });

    pts.innerHTML = output;
    this.clearTextArea();
  }

  clearTextArea() {
    document.querySelector(this.text).value = '';
  }
}

const ui = new UI;

export default ui;