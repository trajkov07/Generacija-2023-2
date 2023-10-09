import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { depositBalance, withdrawBalance } from "./redux/action/balanceActions";
import { Salary } from "./components/Salary";
import { DoubleBalance } from "./components/DoubleBalance";

function App() {
  // const [balance, setBalance] = useState(100);
  const [vrednost, setVrednost] = useState(0);

  const balance = useSelector((state) => state.balance);
  const dispach = useDispatch();

  // event handler
  const handleDeposit = () => {
    // console.log(balance);
    // console.log(value);
    // setBalance(balance + Number(value));
    console.log("Dispatching deposit");
    dispach(depositBalance(vrednost));
  };

  const handleWithdraw = () => {
    // console.log(balance);
    // console.log(value);
    // setBalance(balance - Number(value));
    console.log("Dispatching withdraw");
    dispach(withdrawBalance(vrednost));
  };

  return (
    <div className="App">
      <div>
        <h1>My bank</h1>
        <h2>Balance: {balance}</h2>
        <input type="number" onChange={(e) => setVrednost(e.target.value)} />
        <div>
          <button onClick={handleDeposit}>Deposit</button>
          <button onClick={handleWithdraw}>Withdraw</button>
        </div>
      </div>
      <Salary />
      <DoubleBalance />
    </div>
  );
}

export default App;
