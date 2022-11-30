import React from 'react'

export const List = ({names}) => {
  return (
      <div>
        
          <ul>
            { names.map((item,i)=>{
                 return <li>{item}</li>
             })}
          </ul>
    </div>
  )
}
