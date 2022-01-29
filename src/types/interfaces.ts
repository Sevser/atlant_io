import { WSSTATUS } from '@/enums/wsstatus';

export interface IUnconfirmed_transaction {
  addr: string,
  n: number,
  script: string,
  spent: boolean,
  tx_index: number,
  type: number,
  value: number,
}

export interface IInput_Unconfirmed {
  prev_out: IUnconfirmed_transaction,
  script: string,
  sequence: number,
}

export interface ITransaction {
  hash: string,
  lock_time: number,
  relayed_by: string,
  size: number,
  time: number,
  tx_index: number,
  ver: number,
  vin_sz: number,
  vout_sz: number,
  out: IUnconfirmed_transaction[],
  inputs: IInput_Unconfirmed[],
}

export interface IMessage {
  op: string,
  x?: ITransaction,
}

export interface IBlockchain {
  url: string,
  status: WSSTATUS,
  provider: WebSocket | null,
}
