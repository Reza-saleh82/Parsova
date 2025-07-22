const inStateUser = {
  users: [],
  loginUser: {},
};

const UserRed = (state = inStateUser, { type, payload }) => {
  switch (type) {
    case "users":{
      console.log(state,1);
      
      return { ...state, users: payload };}
    case "loginUser":{
      console.log(state,2);

      return { ...state, loginUser: payload };}
    default:
      return state;
  }
};

export default UserRed;