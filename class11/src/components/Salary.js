import { useDispatch } from "react-redux";
import {
  depositBalance,
  depositBalanceAsync,
} from "../redux/action/balanceActions";

export const Salary = () => {
  const monthlySalary = 2000;
  const dispach = useDispatch();

  return (
    <div>
      <h1>Add Salary</h1>
      <button onClick={() => dispach(depositBalance(monthlySalary))}>
        Add my monthly salary
      </button>
      <button onClick={() => dispach(depositBalanceAsync(monthlySalary))}>
        Add my salary but asyncronious - after some time
      </button>
    </div>
  );
};
