import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConnectButton from './components/ConnectButton';
// import Test from './components/Test';
import Web3 from "web3";
import Web3Modal from "web3modal";

const providerOptions = {
  // Example with injected providers
  injected: {
    display: {
      logo: "data:image/gif;base64,INSERT_BASE64_STRING",
      name: "Injected",
      description: "Connect with the provider in your Browser"
    },
    package: null
  },
};
const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <p>
          <Test message="rr" />
        </p> */}
        <p>
          <ConnectButton
            message="Connect Wallet"
            disabled={false}
            onClick={() => onConnect()} />
        </p>
      </header>
    </div>
  );
}

async function onConnect() {
  console.log("function onConnect()")
  const provider = await web3Modal.connect();
  console.log(`provider.isConnected() : ${provider.isConnected()}`)
}

export default App;
