
class UI {
  constructor() {
    this.profileNav = '.fb-profile-nav';
    this.profilePersonal = '.fb-personal';
    this.profilePost = '.fb-post';
    this.profileContact = '.fb-contact';

    this.text = '#text';
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
              <p class="fb-post__header__info__date">September 17 At 9:01 AM</p>
            </div>
          </div>

          <div class="fb-post__content">
            <p>${post.body}</p>
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