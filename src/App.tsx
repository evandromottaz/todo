import {Area, Container, Header} from './App.styles'
import {useState} from 'react';
import {Item} from './types/Item'
import ListItem from './components/ListItem'
import AddArea from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar ovo', done: false},
    {id: 2, name: 'Comprar sorvete', done: false},
  ])

  const handleAddTask = (taskName:string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList)
  }

  const handleTaskChange = (id:number, done:boolean) => {
    let newList = [...list];
    console.log(done)
    for(let i in newList) {
      if(newList[i].id === id) newList[i].done = done 
    }
    setList(newList)
  }

return (
<Container>
  <Area>
    <Header>Lista de Tarefas</Header>

    {/* Área de adicionar novas tarefas */}
    <AddArea onEnter={handleAddTask}/>

    {/* Lista de tarefas */}
    {list.map((item,index) => (
      <ListItem 
      key={index} 
      item={item} 
      onChange={handleTaskChange}
      />
    ))}
  </Area>
</Container>
);
}

export default App;