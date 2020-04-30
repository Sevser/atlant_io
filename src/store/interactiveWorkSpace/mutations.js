import LSManager from '../../utills/localStorageManager';

export const INITIALIZE_BLOCKS = (state) => {
  state.blocks = LSManager.getHasSavedBlocks() ? LSManager.getBlocks() : JSON.parse(JSON.stringify(state.defaultBlocks));
};

export const RESET_BLOCKS = (state) => {
  state.blocks = JSON.parse(JSON.stringify(state.defaultBlocks));
};

export const ERASE_BLOCKS = (state, eraseId) => {
  state.blocks.splice(state.blocks.findIndex(({ id }) => id === eraseId), 1);
};

export const ADD_NEW_DEFAULT_BLOCK = (state) => {
  state.blocks.push({
    ...state.blockTemplate,
    id: state.blocks.length + 1,
    title: `title_${state.blocks.length + 1}`,
  });
};

export const UPDATE_BLOCKS = (state, newBlock) => {
  const blocksIndex = state.blocks.findIndex(({ id }) => id === newBlock.id);
  state.blocks.splice(blocksIndex, 1, newBlock);
};
