class LocalStorageManager {
  constructor() {
    this.hasHavedBlocks = null;
  }
  getBlocks() {
    if (this.hasHavedBlocks) {
      return JSON.parse(localStorage.getItem('userBlocks'));
    }
    return [];
  }
  getHasSavedBlocks() {
    if (this.hasHavedBlocks !== null) {
      return this.hasHavedBlocks;
    }
    for (let i = 0; i < localStorage.length; i += 1) {
      if (localStorage.key(i) === 'userBlocks') {
        this.hasHavedBlocks = true;
        return true;
      }
    }
    return false;
  }
  updateBlocks(blocks) {
    localStorage.setItem('userBlocks', JSON.stringify(blocks));
  }
}
const manager = new LocalStorageManager();
export default manager;
