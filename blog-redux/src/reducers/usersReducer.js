export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload]; // Here we are making an array of all the users. The name of the Action is FETCH_USER, but when we are going through the reducer, we are collecting the complete list of Users and then filtering inside the component
    default:
      return state;
  }
};
