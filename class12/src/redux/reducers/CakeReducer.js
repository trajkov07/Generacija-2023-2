import { BUY_CAKE, RESTOCK_CAKES } from "../../constants/CakeConstants";

const initialState = {
  cakes: 15,
  message: undefined,
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      // dokolku nema dovolno torti na lager ne pravime nisto tuku
      // samo vrakame poraka deka nema dovolno torti
      if (state.cakes - action.payload < 0) {
        return {
          ...state,
          message: `You cannot buy ${action.payload} that amount of cakes only ${state.cakes} left`,
        };
      } else {
        // dokolku imame dovolno, samo gi odzememame tortite od
        // vkupniot broj na torti sto gi imame na lager
        return {
          ...state,
          cakes: state.cakes - action.payload,
        };
      }
    case RESTOCK_CAKES:
      return {
        ...state,
        cakes: action.payload,
        message: undefined,
      };
    // morame sekogas da imame default case kaj sto kje go vrakame
    // stejtot
    default:
      return state;
  }
};

export default CakeReducer;
