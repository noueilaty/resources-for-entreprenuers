'use strict';
//document.getElementById('delete_button').addEventListener('click', deleteResource)


function deleteResource(id){

  console.log(id)

  fetch("http://localhost:3000/resources/"+ id, {
     method: 'DELETE',
     headers: new Headers({
       'Content-Type':'application/json'
     })
     }).then((response) =>{
      console.log("hey whats up")
   });

}
