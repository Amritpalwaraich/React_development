const Card = ({title}) => {
 return (
  <div> 
    <h2>{title}</h2>
  </div>
 )

}


const Rea = ({run}) => {
  return (
    <div>
      <h4>{run}</h4>
      
    </div>
  )
}




function App() {
  return (
    <div>
      <h1> App Component</h1>

      <Card title="THe Lion King"/>
      <Card title="Avatar"/>
      <Card title="Monkey"/>
      <Rea run="Why not yet   "/>
    </div>
  )
  
}

export default App
