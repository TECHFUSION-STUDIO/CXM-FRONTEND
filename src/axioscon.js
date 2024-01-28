import axios from 'axios';

const axiosConn = axios.create({
  baseURL: 'http://localhost:3000'
});

export default axiosConn;

// Request interceptor (Outgoing)
axiosConn.interceptors.request.use(function (config) {
    // Do something before request is sent   
    // console.log('Interceptor Request (Outgoing) ', config);
   
    // config.headers.API_KEY = 'YOUR_API_KEY';

    // if(sessionStorage.getItem('jwt_token')) {
    //   config.headers.Authorization = `Bearer ${sessionStorage.getItem('jwt_token')}`;
    // }
    // config.headers.Authorization = 'eyJhbGciOiJIUzUxMiJ9.eyJpZCI6ImF2aUBnbWFpbC5jb20iLCJpc3MiOiJURlMiLCJpYXQiOjE3MDU3MjUxOTMsImV4cCI6MTcwNzc5ODc5M30.XFwLEZ6HoHD-SB_fiGXPZgJEgr3biqr0lpJIpUbL8BW18y1Ilk8KeeTq7kP4mCrdESCVNQkwSn6gw9KaCKiVAQ'
    return config;
  }, function (error) {
    // Request error
    return Promise.reject(error);
});
  
// Response interceptor (Incoming) - Optional
axiosConn.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger

  // Response data
  // console.log('Interceptor Response (Incoming) ', response);

  return response;
}, function (error) {

  // Any status codes that falls outside the range of 2xx cause this function to trigger

  // Do something with response error
  return Promise.reject(error);
});  