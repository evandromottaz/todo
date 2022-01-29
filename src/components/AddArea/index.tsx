import { useState, KeyboardEvent } from 'react';
import {Container} from './styles'

type Props = {
  onEnter: (taskName:string) => void;
}

const AddArea = ({onEnter}: Props) => {
  const [inputText, setInputText] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== '') {
      onEnter(inputText)
      setInputText('');
    }
  }

  return <Container>
    <div className='image'>➕</div>
    <input 
    type="text" 
    placeholder='Adicione uma nova tarefa'
    value={inputText}
    onKeyUp={handleKeyUp}
    />
    </Container>;
};

export default AddArea;
