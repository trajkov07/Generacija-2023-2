import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCakes } from "../redux/actions/CakeActions";

export const Cake = () => {
  const cakes = useSelector((state) => state.cakes);
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Cakes: {cakes}</p>
      {message && <p>{message}</p>}
      <button disabled={cakes < 1} onClick={() => dispatch(buyCake(1))}>
        Buy 1 Cake
      </button>
      <button disabled={cakes < 2} onClick={() => dispatch(buyCake(2))}>
        Buy 2 Cakes
      </button>
      <button disabled={cakes < 3} onClick={() => dispatch(buyCake(3))}>
        Buy 3 Cakes
      </button>
      <button onClick={() => dispatch(restockCakes())}>Restock Cakes</button>
    </div>
  );
};
