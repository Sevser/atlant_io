export const INITIALIZE_BLOCKS = (state) => {
  state.blocks = JSON.parse(JSON.stringify(state.defaultBlocks));
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
