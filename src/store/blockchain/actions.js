import BlockchainManager from '../../utills/blockchainManager';
import config from '../../config/urls';

const bcManager = new BlockchainManager(config.bcServer);
bcManager.connect();

export const subscribe = () => {
  bcManager.subscribe();
};

export const unSubscribe = () => {
  bcManager.unsubscribe();
};

export const setMessageCallback = (vuex, callback) => {
  console.log(true)
  bcManager.setMessageCallback(callback);
};

export const connect = ({ commit }, callback) => {
  commit('SET_MANAGER_MESSAGE_CALLBACK', callback);
};

export const addTransaction = ({ commit }, transaction) => {
  commit('ADD_TRANSACTION', transaction);
};
