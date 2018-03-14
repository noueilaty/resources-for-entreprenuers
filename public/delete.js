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

function displayInfo(id){
  fetch("http://localhost:3000/resources/" + id,{
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(directory) {

    let businessName = directory.businessName
    let url = directory.url
    let description = directory.description
    let phone = directory.phone
    let email = directory.email
    let contactName = directory.contactName
    let address = directory.address
    let market = directory.market
    let services = directory.services

    $(".modal .modal-title").html(businessName);

    $(".modal .modal-body").html(`<ul class="modal-list">
    <li><strong>Business URL:</strong> <a href="${url}">${url}</a> </li><br>
    <li><strong>Business Description:</strong> ${description} </li><br>
    <li><strong>Business phone:</strong> ${phone} </li><br>
    <li><strong>Business email:</strong> ${email} </li><br>
    <li><strong>Business contact name:</strong> ${contactName} </li><br>
    <li><strong>Business address: </strong>${address} </li><br>
    <li><strong>Target market: </strong>${market} </li><br>
    <li><strong>Business services:</strong> ${services} </li><br>
    `);

    $("#myModal").modal({
      show:true
    })
  });
}
