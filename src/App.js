import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

   let [title, changeTitle] = useState(['재밌는 게임 추천', '재밌는 만화 추천', '재밌는 스포츠 추천']);
   let [good, plusGood] = useState(function(){
      let li = []
      for(let i in title) {
         li[i] = 0
      }
      return li;
   });
   let [modal, setModal] = useState(false);

   return (
      <div className="App">
         <div className="black-nav">
            <h4>ReactBlog</h4>
         </div>

         {/* <div className="list">
            <h4>{ title[0] } <span onClick={ () => { plusGood(good+1) } }>👍</span> {good} </h4>
            <p>8월 03일 발행</p>
         </div>
         <div className="list">
            <h4>{ title[1] }</h4>
            <p>8월 03일 발행</p>
         </div>
         <div className="list">
            <h4 onClick={() => { setModal(!modal) }}>{ title[2] }</h4>
            <p>8월 03일 발행</p>
         </div> */}

         {
            title.map(function(a, i){
               return (
                  <div className="list">
                     <h4>{ title[i] } <span onClick={() => {
                           let copy = [...good];
                           copy[i] = good[i]+1 
                           plusGood(copy);
                        }}>👍</span></h4>
                     <p>8월 4일 발행</p>
                  </div>
               )
            })
         }

      </div>
   );
}

function Modal() {
   return(
      <div className="modal">
         <h4>제목</h4>
         <p>날짜</p>
         <p>상세내용</p>
      </div>
   );
}

export default App;
