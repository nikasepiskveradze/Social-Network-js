class Utilities {

  getPostDate() {
    const date = new Date();
    const month = this.getMonth(date.getMonth());
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    const dateString = `${month} ${day} At ${hour}:${minute}`;
    return dateString;
  }

  getMonth(month) {
    const months = ['January', 'Februray', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return months[month];
  }

  getRandomImage(width, height) {
    const rand = Math.trunc(Math.random()*100 + 1);
    const link = `https://picsum.photos/${width}/${height}?image=${rand}`;

    return link;
  }
}

const util = new Utilities;

export default util;