import React from 'react'
import data from './users.json'
import UserItem from './UserItem.js';
import AverageAge from './AverageAge.js';

const UserList = () => {
   const myFunc = (total, current) => {
      return total += current
   }
   const average = () => {
      const result = data.filter(item => item.role === 'admin')
      const countAdmin = result.length;
      let ageArray = []
      result.map((res) => ageArray.push(res.age));
      let age = (ageArray.reduce(myFunc)) / countAdmin;
      return age
   }
   return (
      <div >
         {data.map((users) => {
            return (
               (users.role === 'user' ?
                  <UserItem name={users.name} />
                  : ''
               )
            )
         })}
         <AverageAge average={average()} />
      </div>)
}

export default UserList
