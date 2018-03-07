'use strict';

function deleteResource(id){
  fetch("http://localhost:3000/resources/"+ id, {
     method: 'DELETE',
     headers: new Headers({
       'Content-Type':'application/json'
     })
     }).then((response) =>{
       location.reload()
   });
}

function approveResource(id) {
  fetch("http://localhost:3000/resources/" + id, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then((response) => {
    location.reload()
  });
}
