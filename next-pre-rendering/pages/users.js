import React from 'react'

const UserList = ({users}) => {
  return (
    <div>
        {
            users.map(user => {
                return (
                    <div key={user.id}>
                        <h5>========================================================================</h5>
                        <h6>Name: {user.name}</h6>
                        <h6>Email: {user.email}</h6>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    console.log(data);

    return {
        props: {
            users: data
        }
    }
}