"use strict";

const getUsers = () => {
    const url = 'https://reqres.in/api/users?per_page=12';

    return fetch(url)
    .then(response => response.json())
}

const printSurnames = (users) => {
    users.forEach(({last_name: surname}) => console.log(surname))
    return users

}

const printUserWithSurnameStartsWithF = (users) => {
    users.filter(({last_name: surname}) => surname.startsWith('F'))
        .forEach(users => console.log(users))
    return users

}

const printDataBase = (users) => {
  const result =  users.map(({first_name: name, last_name: surname}) => `${surname} ${name}`)
       .join(', ')
    console.log(`Наша база содержит данные следующих польщователей: ${result}`)

    return users
}

const printKeys = (user) => {
    Object.keys(user).forEach(key => console.log(key))


}

getUsers()
.then(({data: users}) => users)
.then(printSurnames)
.then(printUserWithSurnameStartsWithF)
.then(printDataBase)
.then(printKeys)