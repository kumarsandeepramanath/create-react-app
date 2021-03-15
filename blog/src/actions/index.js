import jsonPlaceholder from '../apis/jsonPlaceholder';

// export const fetchPosts = () => {
//   return async (dispatch) => {
//     //Return a function instead of an Object
//     const response = await jsonPlaceholder.get('/posts');
//     dispatch({
//       // If we using Thunk, we will dispatch an action object
//       type: 'FETCH_POSTS',
//       payload: response,
//     });
//   };
// };

export const fetchPosts = () =>  async dispatch => { // Function returning a Function
    //Return a function instead of an Object
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response,
    });
  };
};

