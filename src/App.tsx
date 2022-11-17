import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import WORDS_API from './API';
import { AxiosResponse } from 'axios';

function App() {
  
  const [tabledata,settabledata] = useState({})
  const [authId, setAuthId] = useState({})

  async function getAllBooks(){
    await WORDS_API.get('books')
    .then((response:AxiosResponse)=>{
      settabledata(response.data)
      console.log(response.data)
    })
  }

  async function getBookByAuthorId(){
    // const id = document.getElementById('authId')?.firstChild?.nodeValue
    console.log("hello?")
    console.log(document.getElementById('authId'))
    // await WORDS_API.get('/author/'+id)
    // .then((response:AxiosResponse)=>{
    //   console.log(response.data)
    // })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // setAuthId(event.currentTarget)
    console.log(event.currentTarget)
  }


  return (
    <div className="App">
      <button style={{ marginBottom: '2.5rem' }} onClick={()=>(getAllBooks())}>Get all books</button>
      <form style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: '20rem', marginBottom: '2.5rem' }}>
        <div>Title <input></input></div>
        <div>Is Stocked? <input type={'checkbox'}></input></div>
        <div>Author Id <input></input></div>
        <div>Author Name <input></input></div>
        <button>Insert Book</button>
      </form>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: '20rem', marginBottom: '2.5rem' }}>
        
        <div id='authId'>Audthor Id <input></input></div>
        <button type='submit'  >Get Books by Author Id</button>
      </form>
    </div>
  );
}

export default App;
