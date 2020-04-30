export const INITIALIZE_BLOCKS = (state) => {
  state.blocks = JSON.parse(JSON.stringify(state.defaultBlocks));
};

export const RESET_BLOCKS = (state) => {
  state.blocks = JSON.parse(JSON.stringify(state.defaultBlocks));
};

export const ERASE_BLOCKS = (state, index) => {
  state.blocks.splice(index, 1);
};
