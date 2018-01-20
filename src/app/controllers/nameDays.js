import axios from 'axios';

export default {

  getCurrent: () => {
    store.dispatch({type: 'FETCHING'});

    axios.get('https://api.abalin.net/today')
    .then(function (res) {
      store.dispatch({
        type: 'FETCHED',
        name: res.data.data.name_sk
      });
    })
  } 

}