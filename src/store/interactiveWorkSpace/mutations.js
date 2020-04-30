import LSManager from '../../utills/localStorageManager';

export const INITIALIZE_BLOCKS = (state) => {
  state.blocks = LSManager.getHasSavedBlocks() ? LSManager.getBlocks() : JSON.parse(JSON.stringify(state.defaultBlocks));
  state.erasedBlocksIds = LSManager.getHasErasedBlocks() ? LSManager.getErasedBlocks() : [];
};

export const RESET_BLOCKS = (state) => {
  state.blocks = JSON.parse(JSON.stringify(state.defaultBlocks));
};

export const ERASE_BLOCKS = (state, eraseId) => {
  state.blocks.splice(state.blocks.findIndex(({ id }) => id === eraseId), 1);
  state.erasedBlocksIds.push(eraseId);
};

export const ADD_NEW_DEFAULT_BLOCK = (state) => {
  state.blocks.push({
    ...state.blockTemplate,
    id: state.highestBlockId + 1,
    title: `title_${state.highestBlockId + 1}`,
  });
  state.highestBlockId += 1;
};

export const RETURN_ERASED_BLOCK = (state, props) => {
  state.blocks.push({
    ...state.blockTemplate,
    ...props,
    id: state.erasedBlocksIds[0],
    title: `title_${state.erasedBlocksIds[0]}`,
  });
  state.erasedBlocksIds.splice(0, 1);
};

export const UPDATE_BLOCKS = (state, newBlock) => {
  const blocksIndex = state.blocks.findIndex(({ id }) => id === newBlock.id);
  state.blocks.splice(blocksIndex, 1, newBlock);
};
