import "./App.css";
import packageInfo from "../package.json";
import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";
import Wallet from "./Wallet";

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://rose-peculiar-canid-53.mypinata.cloud/ipfs/QmcMpYRbDS8GGi5MNoeXYYrdU6pTUGpNLPRnWrfzojw6v5">
      <div className="App">
        <header className="App-header">
          <TonConnectButton />
          <Wallet />
        </header>
      </div>
    </TonConnectUIProvider>
    //hotfix 2
  );
}

App.version = packageInfo.version;

export default App;
