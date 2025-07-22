const inState = {
    data: [],
    filter: [],

  };


const ProductRed = (state=inState, {type,payload}) => {
    switch (type) {
      case "AllData":
        return { ...state, data: action.payload, filter: action.payload };
      case "search":
        return { ...state, filter: action.payload };
      default:
        return state;
    }
  };

export default ProductRed