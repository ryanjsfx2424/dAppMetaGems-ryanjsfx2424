const initialState = {
  loading: false,
  totalSupply: 0,
  totalStandardSupply:0,
  totalDeluxeSupply:0,
  totalSpecialSupply:0,
  totalSupremeSupply:0,
  cost: 0,
  //basicCost: 0,
  error: false,
  errorMsg: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        totalSupply: action.payload.totalSupply,
        totalStandardSupply: action.payload.totalStandardSupply,
        totalDeluxeSupply: action.payload.totalDeluxeSupply,
        totalSpecialSupply: action.payload.totalSpecialSupply,
        totalSupremeSupply: action.payload.totalSupremeSupply,
        // cost: action.payload.cost,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_FAILED":
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
