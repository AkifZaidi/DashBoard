import React from 'react'

export default function About(props) {
  let {dataSource,colums,title} = props;
  return (
    <div>
    <h2>{title}</h2>
    <h2>ABOUT</h2>
    
  

    <table>
      <thead>
        <tr>
          {colums && Array.isArray(colums) && colums.length > 0 ?
          colums.map((e,i) =>{
              return(
                <th key={i}>{e.displayName}</th>
              )            
          }): null}
        </tr>
      </thead>
      <tbody>
          {dataSource && Array.isArray(dataSource) && dataSource.length > 0 ?
          dataSource.map((x,d) => (
            <tr key={d}>
              {colums.map((j,k) =>(
                <td key={k}>
                  {j.displayField ?
                  j.displayField (x) : null}
                  {x[j.key]}</td>
              ))}
            </tr>
          )):null}
      </tbody>
    </table>
    
    </div>
  )
}
