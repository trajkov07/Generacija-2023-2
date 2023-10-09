export const depositBalance = (value) => {
  console.log("DEPOSIT ACTION");
  return {
    type: "DEPOSIT",
    payload: value,
  };
};

export const depositBalanceAsync = (value) => {
  console.log("DEPOSITING ASYNC");
  return (dispatch) => {
    setTimeout(() => {
      console.log("Dispatching async");
      dispatch(depositBalance(value));
    }, 2000);
  };
};

export const withdrawBalance = (value) => {
  console.log("WITHDRAWING ACTION");
  return {
    type: "WITHDRAW",
    payload: value,
  };
};
