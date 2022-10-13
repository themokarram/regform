import React, { useState, useEffect } from 'react'
import "./style.css"
 
const getLocalData=()=>{
  const list= localStorage.getItem("myToDOList")
  if (list){
    return JSON.parse(list)
  } else {
  return [] 
  }
}
const Todo = () => {
  const [inputData,setInputData]= useState(" ")
  const [items,setItems]=useState(getLocalData())
  const [isEditItem,setIsEditItem]= useState(" ")
  //add item function declare
  const addItem=()=>{
    if (!inputData) {
      
      alert ('plz add items')
    } else if (inputData){ 
      setItems(
         items.map((curElem)=>{
          if (curElem.id === isEditItem){
            return {...curElem, name: inputData }
          } 
            return curElem;

          
         })
         )
     
    }
    
    {
      const myNewDataInput={
        id:new Date().getTime().toString(),
        name: inputData,
    };
      setItems([...items,myNewDataInput])
      setInputData(" ");
    }
  }
   const deleteItem=(id)=> {
   const updatedItems=items.filter((curElem)=>{
      return curElem.id !== id;
    })
    setItems(updatedItems);
   }

   const removeAll =()=> {
    setItems([ ]);
   }
     
   useEffect(() => {
    localStorage.setItem("myToDOList",JSON.stringify(items))
   }, [items])
   
  
   const editItem=(id)=>{
   const editedItem = items.find((curElem)=>{
     return curElem.id === id;
   })
      setInputData(editedItem.name);
      setIsEditItem(id);
   }
  return (
    <>
<div className='main-div'>
    <div className='child-div'>
        <figure><img src="./images/todo.svg" alt="todologo" />
        <figcaption> Add your List Here.✌ </figcaption> </figure>
        <div className='additems' >
            <input type="text" placeholder='Add Item here😊' 
            className='form-control'
            value={ inputData}
            onChange={(event)=>setInputData(event.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={addItem} ></i>
          </div>
            {/* show items space*/}
            <div className='showItems'>

              {
                items.map((curElem,index)=>{
                  return( <div className='eachItem' key={index}>
                  <h3 >{curElem.name }</h3>
                  <div className='todo-btn'>
                  <i className="fa fa-edit add-btn" onClick={()=>editItem(curElem.id)}></i>
                  <i className="fa fa-trash add-btn" onClick={()=>deleteItem(curElem.id)}></i>
                  </div>
                  
                </div>

                  )
                })
              }
              
            </div>
      

           { /*remove All button */}
          <div className='showItems'> <button className='btn effect04' data-sm-link-text= "Remove All" onClick={removeAll}>
           <span>Check  list</span> </button>

          </div>
    </div>
</div>
    
    </>
  )
}

export default Todo