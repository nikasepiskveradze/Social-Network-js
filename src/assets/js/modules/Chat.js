import ui from './UI';

class Chat {

  showChat(e) {
    if(e.target.parentElement.classList.contains('fb-contact__item__info')) {
      const target = e.target.parentElement;
      const children = Array.from(target.children);

      const image = children[0].src;
      const name = children[1].textContent;

      ui.profileChatRender(image, name);
    }
  }

  closeChat(e) {
    if(e.target.parentElement.id === 'fb-chat-close') {
      ui.closeChat();
    }

    e.preventDefault();
  }

}

const chat = new Chat;
export default chat;