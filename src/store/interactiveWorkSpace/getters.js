export const blocks = state => state.blocks;
export const canReturnErasedBlock = state => !state.erasedBlocksIds.length;
export const erasedBlocks = state => state.erasedBlocksIds;
