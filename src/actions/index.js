import axios from 'axios';
import _ from "lodash"; // _ represents lodash

const ROOT_URL = `http://reduxblog.herokuapp.com/api`
const API_KEY = `?key=jee123eae0df3`
const URL = `${ROOT_URL}/posts${API_KEY}`;
// const ROOT_URL = `http://localhost:3000`;
// const ROOT_URL = `http://localhost:10080/api`;
// const URL = `${ROOT_URL}/posts`;
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const UPDATE_POST = 'update_post';

export function fetchPosts() {
  const request = axios.get(URL)
    .catch(function(error){
      console.log(error);
    });

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .catch(function(error){
      console.log(error);
    });

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(values, callback) {
  // siirrä on submit -> palauttaa error 400
  // {"title":"Toka postaus","categories":"toka","contents":"tää on toka postaus."}:
  // categories array...
  // _.split('a-b-c', '-', 2);
  // => ['a', 'b']
  // console.log(values);
  //values.categories = values.categories.split(" ");
  //console.log(JSON.stringify(values));
  // const request = axios.post(URL, JSON.stringify(values));
  const request = axios.post(URL, values)
    .then(() => callback())
    .catch(function(error){
      console.log(error);
    });

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function updatePost(values, callback) {
  const request = axios.put(URL, values)
    .then(() => callback())
    .catch(function(error){
      console.log(error);
    });

  return {
    type: UPDATE_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback())
    .catch(function(error){
      console.log(error);
    });

  return {
    type: DELETE_POST,
    payload: id
  };
}
