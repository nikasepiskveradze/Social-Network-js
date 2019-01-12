class UI {
  constructor() {
    this.profileNav = '.fb-profile-nav';
    this.profilePersonal = '.fb-personal';
    this.profileCover = '.fb-pg-main__cover';
    this.profileContact = '.fb-contact';
    this.profilePost = '.fb-post';
    this.chat = '.fb-chat-show';

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

  profileCoverRender(user) {
    const cover = document.querySelector(this.profileCover);
    let output = `<a href="#"><img src="${user.cover}" alt="Cover"></a>`;

    cover.innerHTML = output;
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

  profileChatRender(image, name) {
    document.querySelector(this.chat).innerHTML = `
      <div class="fb-chat">
        <div class="fb-chat__header">
          <div class="fb-chat__header__user">
            <img class="fb-chat__header__user__image" src="${image}" alt="">
            <div class="fb-chat__header__user__details">
              <a href="#" class="fb-chat__header__user__details__link">${name}</a>
              <span class="fb-chat__header__user__details__active">Active now</span>
            </div>
          </div>

          <div class="fb-chat__header__options">
            <a href="#"><i class="fa fa-phone"></i></a>
            <a href="#"><i class="fa fa-video-camera"></i></a>
            <a href="#" id="fb-chat-close"><i class="fa fa-times"></i></a>
          </div>
        </div>

        <div class="fb-chat__content">
          <p class="fb-chat__content__message">Hello ${name}</p>
        </div>

        <div class="fb-chat__bottom">
          <div class="fb-chat__bottom__input">
            <input class="fb-chat__bottom__input__field" type="text" placeholder="Type a message">
          </div>

          <div class="fb-chat__bottom__options">
            <div class="fb-chat__bottom__options__left">
              <i class="fa fa-file-image-o"></i>
              <i class="fa fa-video-camera"></i>
              <i class="fa fa-paperclip"></i>
              <i class="fa fa-gift"></i>
              <i class="fa fa-smile-o"></i>
              <i class="fa fa-gamepad"></i>
            </div>
            <div class="fb-chat__bottom__options__right">
              <i class="fa fa-thumbs-up"></i>
            </div>
          </div>
        </div>
      </div>`;
  }

  clearTextArea() {
    document.querySelector(this.text).value = '';
  }

  closeChat() {
    document.querySelector(this.chat).innerHTML = '';
  }
}

const ui = new UI;

export default ui;