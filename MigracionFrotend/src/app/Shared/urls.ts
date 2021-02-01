
export let SERVER = 'https://localhost:44397/api/'
  
export let APIURL = {
  

  Person: {
    List: SERVER + 'Person/GetList', 
    Create: SERVER + 'Person/Create',
    Remove: SERVER + 'Person/Remove', 
    Update: SERVER + 'Person/Update'
  }, 

  Request: {
    List: SERVER + 'Request/GetList', 
    Create: SERVER + 'Request/Create',
    Remove: SERVER + 'Request/Remove', 
    Update: SERVER + 'Request/Update'
  }

};
