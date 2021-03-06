import React, { useState, useEffect } from 'react'
import UserExpCard from "./UserExpCard"

const UserExpList = () => {
  const [expr, setExp] = useState([])
  useEffect(() => {
    axios
      .get('https://wanderlustbw.herokuapp.com/exp/experience/0')
      .then(res => {
        setExp(res)
        console.log(res)
      })
      .catch(err => console.log('Loading Error Experinces', err))
  }, [index])
  return (
    <div>
      {expr.map(exp => {
        return (
          <UserExpCard key={exp.id}
            title={exp.title}
            desc={exp.description}
            date={exp.date}
            img={exp.image}
          />)
      })}
    </div>
  )
}

export default UserExpList
