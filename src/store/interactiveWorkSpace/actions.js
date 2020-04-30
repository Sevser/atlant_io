export const initializeBlocks = ({ commit }) => {
  commit('INITIALIZE_BLOCKS');
};

export const eraseBlock = ({ commit }, id) => {
  commit('ERASE_BLOCKS', id);
};

export const updateBlock = ({ commit }, block) => {
  commit('UPDATE_BLOCKS', block);
};

export const resetBlocks = ({ commit }) => {
  commit('RESET_BLOCKS');
};
export const addNewDefaultBlock = ({ commit }) => {
  commit('ADD_NEW_DEFAULT_BLOCK');
};
export const returnErasedBlock = ({ commit }, params) => {
  commit('RETURN_ERASED_BLOCK', params);
};
