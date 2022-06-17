
const form = document.getElementById('form')
const main = document.getElementById('main')
const filter = document.getElementById('search')

loadUsers() 


async function loadUsers(){
    const response = await fetch ('https://randomuser.me/api?results=50');
    const {users} = await response.json();
}

result.innerHTMl = ''

users.forEach((user) => {
    const li = document.createElement('li')
    listItems.push(li)

    li.innerHTML = `
    <img src="${user.picture.medium}">
       <div class="user-info">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.dob.age} ${user.location.country}</p>
       </div>
    `
    
    result.appenChild(li)
})

