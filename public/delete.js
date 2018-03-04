'use strict';


function deleteResource(id){

  console.log(id)

  fetch("http://localhost:3000/resources/"+ id, {
     method: 'DELETE',
     headers: new Headers({
       'Content-Type':'application/json'
     })
     }).then((response) =>{
       location.reload()
   });

}
