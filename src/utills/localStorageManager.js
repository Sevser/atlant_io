class LocalStorageManager {
  constructor() {
    this.hasHavedBlocks = this.calcHasSavedBlocks();
    this.hasErasedBlocks = this.calcHasErasedBlocks();
  }
  getBlocks() {
    if (this.hasHavedBlocks) {
      return JSON.parse(localStorage.getItem('userBlocks'));
    }
    return [];
  }
  getErasedBlocks() {
    if (this.hasErasedBlocks) {
      return JSON.parse(localStorage.getItem('erasedBlocks'));
    }
    return [];
  }
  getHasSavedBlocks() {
    return this.hasHavedBlocks;
  }
  getHasErasedBlocks() {
    return this.hasHavedBlocks;
  }
  calcHasSavedBlocks() {
    for (let i = 0; i < localStorage.length; i += 1) {
      if (localStorage.key(i) === 'userBlocks') {
        return true;
      }
    }
    return false;
  }
  calcHasErasedBlocks() {
    for (let i = 0; i < localStorage.length; i += 1) {
      if (localStorage.key(i) === 'erasedBlocks') {
        return true;
      }
    }
    return false;
  }
  updateBlocks(blocks) {
    localStorage.setItem('userBlocks', JSON.stringify(blocks));
  }
  updateErasedBlocks(blocks) {
    localStorage.setItem('erasedBlocks', JSON.stringify(blocks));
  }
}
const manager = new LocalStorageManager();
export default manager;
