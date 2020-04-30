export const initializeBlocks = ({ commit }) => {
  commit('INITIALIZE_BLOCKS');
};

export const eraseBlock = ({ commit }, index) => {
  commit('ERASE_BLOCKS', index);
};

export const resetBlocks = ({ commit }) => {
  commit('RESET_BLOCKS');
};
