import config from '../config/urls';
class BlockchainManager {
    constructor(url) {
        this.url = url;
    }
}
const bcManager = new BlockchainManager(config.bcServer);
bcManager.connect();
export default bcManager;
//# sourceMappingURL=blockchain.js.map