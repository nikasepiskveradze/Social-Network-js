class EasyHTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }

  // Make an GET Request
  get(url, callback) {
    this.http.open('GET', url, true);

    this.http.onload = () => {
      if(this.http.status === 200) {
        callback(null, this.http.responseText);
      }else {
        callback('Error: ' + this.http.status);
      }
    }

    this.http.send();
  }

  // Make an POST Request
  post(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');

    this.http.onload = () => {
      callback(null, this.http.responseText);
    }

    this.http.send(JSON.stringify(data));
  }

  // Make an PUT Request
  put(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');

    this.http.onload = () => {
      callback(null, this.http.responseText);
    }

    this.http.send(JSON.stringify(data));
  }

  // Make an DELETE Request
  delete(url, callback) {
    this.http.open('DELETE', url, true);

    this.http.onload = () => {
      if(this.http.status === 200) {
        callback(null, 'Deleted...');
      }else {
        callback('Error: ' + this.http.status);
      }
    }

    this.http.send();
  }
}

const http = new EasyHTTP;

export default http;