// eslint-disable-next-line max-classes-per-file
import {
  IInput_Unconfirmed,
  IMessage,
  ITransaction,
  IUnconfirmed_transaction,
} from '@/types/interfaces';

export class Unconfirmed_transaction implements IUnconfirmed_transaction {
  constructor({
    addr, n, script, tx_index, type, value, spent,
  }: IUnconfirmed_transaction) {
    this.addr = addr;
    this.n = n;
    this.script = script;
    this.tx_index = tx_index;
    this.type = type;
    this.value = value;
    this.spent = spent;
  }

  addr: string;

  n: number;

  script: string;

  spent: boolean;

  tx_index: number;

  type: number;

  value: number;
}

export class Transaction implements ITransaction {
  constructor({
    hash, out, lock_time, time, relayed_by, size, ver, tx_index, inputs, vout_sz, vin_sz,
  } : ITransaction) {
    this.hash = hash;
    this.inputs = inputs;
    this.lock_time = lock_time;
    this.time = time;
    this.relayed_by = relayed_by;
    this.size = size;
    this.ver = ver;
    this.tx_index = tx_index;
    this.out = out.map((input) => new Unconfirmed_transaction(<Unconfirmed_transaction>input));
    this.vout_sz = vout_sz;
    this.vin_sz = vin_sz;
  }

  hash: string;

  inputs: IInput_Unconfirmed[];

  lock_time: number;

  out: IUnconfirmed_transaction[];

  relayed_by: string;

  size: number;

  time: number;

  tx_index: number;

  ver: number;

  vin_sz: number;

  vout_sz: number;
}

export class Message implements IMessage {
  constructor({ op, x } : IMessage) {
    this.op = op;
    if (x) {
      this.x = new Transaction(<ITransaction>x);
    }
  }

  update({ op, x } : IMessage) {
    this.op = op;
    if (x) {
      this.x = new Transaction(<ITransaction>x);
    }
  }

  op: string;

  x?: ITransaction;
}
