import { useDispatch, useSelector } from "react-redux";
import { depositBalance } from "../redux/action/balanceActions";

export const DoubleBalance = () => {
  const dispach = useDispatch();
  const balance = useSelector((state) => state.balance);
  return (
    <div>
      <h1>Double my balance</h1>
      <button onClick={() => dispach(depositBalance(balance))}>
        Double It!
      </button>
    </div>
  );
};
