import { IBlockchain, IMessage } from '@/types/interfaces';
import { WSSTATUS } from '@/enums/wsstatus';
import { computed, reactive } from 'vue';
import { Message } from '@/types/types';
import config from '../config/urls';

class BlockchainManager implements IBlockchain {
  constructor(url: string) {
    this.url = url;
    this.status = WSSTATUS.CLOSED;
    this.provider = null;
    this.message = computed(() => this.lastMessage);
    this.lastMessage = reactive<Message>(new Message(<IMessage>{}));
    this.init = new Promise((resolve, reject) => {
      this.onReady = resolve;
      this.onInitError = reject;
    });
  }

  async connect() {
    try {
      this.status = WSSTATUS.CONNECTING;
      this.provider = new WebSocket(this.url);
      this.provider.onopen = this.onOpen.bind(this);
      this.provider.onclose = this.onClose.bind(this);
      this.provider.onmessage = this.onMessage.bind(this);
      this.provider.onerror = this.onError.bind(this);
    } catch (e) {
      console.error(e.message);
      this.status = WSSTATUS.ERROR;
    }
    return this;
  }

  sendMessage(msg: IMessage) {
    if (this.status !== WSSTATUS.CONNECTED) {
      throw new Error('websocket doesn\'t exist');
    }
    if (msg !== null && this.provider !== null) {
      this.provider.send(JSON.stringify(msg));
    }
  }

  subscribe() {
    const msg = <IMessage> {
      op: 'unconfirmed_sub',
    };
    this.sendMessage(msg);
  }

  unsubscribe() {
    const msg = <IMessage> {
      op: 'unconfirmed_unsub',
    };
    this.sendMessage(msg);
  }

  onOpen(event: any) {
    this.status = WSSTATUS.CONNECTED;
    this.onReady();
    console.log('onOpen', event);
  }

  onClose(event: any) {
    this.status = WSSTATUS.CLOSED;
    console.log('onClose', event);
  }

  onMessage(event: any) {
    this.lastMessage.update(<IMessage>JSON.parse(event.data));
  }

  onError(event: any) {
    this.status = WSSTATUS.ERROR;
    this.onInitError();
    console.log('onError', event);
  }

  status: WSSTATUS;

  lastMessage: any;

  onReady: any;

  onInitError: any;

  init: Promise<void>;

  url: string;

  provider: WebSocket | null;

  message: any;
}

const bcManager = new BlockchainManager(config.bcServer);
bcManager.connect();

export default bcManager;
