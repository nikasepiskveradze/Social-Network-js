class Modal {
  constructor() {
    this.modal = '.modal';
    this.closeModalButton = '.modal-footer-close';

    this.loadModal();
  }

  loadEvents() {
    document.querySelector(this.closeModalButton).addEventListener('click', this.closeModal.bind(this));

    window.addEventListener('keyup', this.keyPressHandler.bind(this));
  }

  loadModal() {
    document.body.innerHTML += `
      <div class="modal">
      </div>
    `;
  }

  openModal(head, body) {
    const modal = document.querySelector(this.modal);
    let output = `
      <div class="modal-header">
        <h2 class="modal-header-title">${head}</h2>
      </div>

      <div class="modal-content">
        <p class="modal-content-desc">${body}</p>
      </div>

      <div class="modal-footer">
        <button class="modal-footer-close">CLOSE</button>
      </div>
    `;

    modal.innerHTML = output;
    modal.classList.add('modal--show');

    this.closeAfterTime();
    this.loadEvents();
  }

  closeAfterTime() {
    setTimeout(() => {
      this.closeModal();
    }, 5000);
  }

  closeModal() {
    document.querySelector(this.modal).classList.remove('modal--show');
  }

  keyPressHandler(e) {
    if(e.keyCode === 27) {
      this.closeModal();
    }
  }
}

const modal = new Modal;

export default modal;