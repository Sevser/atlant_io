export default class blockchainManager {
  constructor(url = null) {
    this.status = 'closed';
    this.websocket = null;
    this.onMessageCallback = null;
    this.url = url;
  }
  setUrl(url) {
    this.url = url;
  }
  setMessageCallback(callback) {
    this.onMessageCallback = callback;
  }
  sendMessage(message) {
    if (!this.websocket || this.status !== 'opened') {
      throw new Error({
        message: 'websocket doesn\'t exist',
      });
    }
    if (typeof message === 'string') {
      this.websocket.send(message);
    }
    if (typeof message === 'object') {
      this.websocket.send(JSON.stringify(message));
    }
  }
  connect() {
    if (!this.url) {
      throw new Error({
        message: 'Url not specified',
      });
    }
    this.status = 'tryingConnect';
    this.websocket = new WebSocket(this.url);
    this.websocket.onopen = this.onOpen.bind(this);
    this.websocket.onclose = this.onClose.bind(this);
    this.websocket.onmessage = this.onMessage.bind(this);
    this.websocket.onerror = this.onError.bind(this);
  }
  subscribe() {
    this.sendMessage({ op: 'unconfirmed_sub' });
  }
  unsubscribe() {
    this.sendMessage({ op: 'unconfirmed_unsub' });
  }
  onOpen($event) {
    this.status = 'opened';
    console.log('onOpen', $event);
  }
  onClose($event) {
    this.status = 'closed';
    console.log('onClose', $event);
  }
  onMessage($event) {
    console.log('onMessage', $event);
    console.log(this.onMessageCallback)
    console.log(typeof this.onMessageCallback)
    if (typeof this.onMessageCallback === 'function') {

      this.onMessageCallback(JSON.parse($event.data));
    }
  }
  onError($event) {
    console.log('onError', $event);
  }
}
