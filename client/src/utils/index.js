import axios from 'axios';

const utils = {
  fetchTodos: () => {
    return axios.get('/todos')
  },
  createTodo: (name) => {
    return axios.post('/todo', {name: name})
  },
  updateTodo: (todo) => {
    return axios.put('/todo', todo);
  },
  // Helper function for converting date string into yyyy-mm-dd format
  convertDateStringForInput: (string) => {
    var date = new Date(string);
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();

    if(dd<10){
      dd='0'+dd;
    } 
    if(mm<10){
      mm='0'+mm;
    }

    return yyyy+'-'+mm+'-'+dd;
  }
}

export default utils;