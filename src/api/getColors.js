import axiosWithAuth from '../utils/axiosWithAuth'

export const getColors = () => {
    return axiosWithAuth()
    .get('/colors')
    .then(res => {
        return res;
    })
    .catch(err=> {
        console.error("error fetching data from api, err: ", err.message);
        return err;
      })
  }