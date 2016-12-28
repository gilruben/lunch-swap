import $ from 'jquery';
import store from './store/store';

//Verifies if the user is signed in. If so, whenever the user goes to the
//'/signin' route, they will be redirected to the '/' route
export const verifySignedIn = (nextState, replace, cb) => {
  //debugger
  verify(nextState, replace, cb, '/findfood');
  //cb();
}



//When a route is passed as argument through the route parameter, its assumed
//that the verify function is being used by the verifySignedIn function on the
//'/signin' route. So if the user goes to the signin route and is
//not authorized, they will not be redirected. If the user goes to the signin
//route and is authorized, they will be redirected to the '/' route.
//
//When no argument is passed in via the route parameter, the function verifies
//if user is authorized to be in the current route. If not, user is redirected
//to the '/signin' route. If user is authorized, the user will will be allowed
//to access the route they were attempting to access.
export const verify = (nextState, replace, cb, route) => {

  $.ajax({
    url: '/auth/verify',
    type: 'GET'
  })
  .fail((data) => {
    //if route is not given and user is not authorized, go to '/sigin'
    if(!route) replace('/signin');
    cb();

    return data;
  })
  .done((data) => {
    //if route is given and user is authorized go to route
    if(route) replace(route)
    cb();
  })

};
