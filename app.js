const usersList = document.querySelector('.users-list');
const addUser = document.querySelector('.add-user-form');
let output = '';
const nameValue = document.getElementById('name-value');
const emailValue = document.getElementById('email-value');
const ageValue = document.getElementById('age-value');
const url = 'http://localhost:5000/api/users';

// Get - Read users
// Method : Get

fetch(url)
.then(res => res.json())
.then(data => renderUsers(data));


function renderUsers(users){
    users.forEach( user =>
        {
           output += `
           <div class="card mt-4 col-md-6 bg-light">
           <div class="card-body">
               <h5 class="card-title">${user.name}</h5>
               <h6 class="card-subtitle mb-2 text-muted">Email: ${user.email}</h6>
               <h6 class="card-subtitle mb-2 text-muted">Age : ${user.age}</h6>
               <a href="#" class="card-link">Edit</a>
               <a href="#" class="card-link">Delete</a>
           </div>
       </div>
           `;
        })
        usersList.innerHTML = output;
}

// Create new User
// Method : Post

addUser.addEventListener('submit' , (e) => {
   
    e.preventDefault();
    fetch(url, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name : nameValue.value,
            email : emailValue.value,
            age : ageValue.value,
        })
    })
    .then(res => res.json())
    .then(data => {
        const dataArr = [];
        dataArr.push(data);
        renderUsers(dataArr);
    })
})

