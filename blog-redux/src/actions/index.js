import _ from 'lodash';
import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// Using Memoization
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

// // Transformation 1 :  The FetchPosts initially just returns type = FETCH_POSTS
// export const fetchPosts = () => {
//   return {
//     type: 'FETCH_POSTS',
//   };
// };

// // Transformation 2 :  Try with a async and await. This will not work because without a Middlware, here we are returns a request(Promise) and not an Action Object
// export const fetchPosts = async () => {
//   const promise = await jsonplaceholder.get('/posts');
//   return {
//     type: 'FETCH_POSTS',
//     payload: promise,
//   };
// };

// // Transformation 3 :  With Middleware, we can also return a function instead of Action Object. The function will always get 2 parameters -dispatch and getState
// export const fetchPosts = () => {
//   return function (dispatch, getState) {
//     const promise = await jsonplaceholder.get('/posts');
//     return {
//       type: 'FETCH_POSTS',
//       payload: promise,
//     };
// };

// // Transformation 4 :  Instead of returning an Action Object from the function, we can dispatch the function manually with the Action Object.
// // We are using the async and await since the response might take some time to get the data from server
// export const fetchPosts = () => {
//   return async function (dispatch, getState) {
//   const response = await jsonplaceholder.get('/posts');
//   dispatch({ type: 'FETCH_POSTS', payload: response });
// };
// };

// // Transformation 5 :  Instead of function keyword, we make use of arrow function
// export const fetchPosts = () => {
//   return async  (dispatch, getState) => {
//   const response = await jsonplaceholder.get('/posts');
//   dispatch({ type: 'FETCH_POSTS', payload: response });
// };
// };

// // Transformation 6 :  We are not using the getState right now, so removing the parameter getState and since 1 parameter , paranthesis is removed
// export const fetchPosts = () => {
//   return async  dispatch => {
//   const response = await jsonplaceholder.get('/posts');
//   dispatch({ type: 'FETCH_POSTS', payload: response });
// };
// };

// // Transformation 7 : Since we returning only 1 expression, we can remove the curly braces and remove the return keyword

// export const fetchPosts = () => async (dispatch) => {
//   const response = await jsonplaceholder.get('/posts');
//   dispatch({ type: 'FETCH_POSTS', payload: response.data });
// };
