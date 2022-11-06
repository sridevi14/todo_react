import React from 'react';

import  Card  from "@material-ui/core/Card";

import Button from "@material-ui/core/Button";

const Form = ({setInputText,setTodos,todos,inputText}) => {
  
  const addingList = (e) => {
   
    setInputText(e.target.value)
  };

  const reloadHandler = (e) => {
    setInputText(e.target.value)
    setTodos([
...todos,
      {
        text: inputText,completed:false, id: Math.random(),
      }

    ]);
    setInputText('');
  }

  return (
  <section className='form-box'>
    

      
    <Card  className='form'>

      <input className='addingList'
       value={inputText}
       onChange={addingList}
       placeholder="Add todo"
      ></input>
     
      <Button  onClick={reloadHandler}  variant="contained" className='add'>
    to add list
          </Button>
    </Card>
   



      
      </section>
  );
}

export default Form;