import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

   let [title, changeTitle] = useState(['재밌는 게임 추천', '재밌는 만화 추천', '재밌는 스포츠 추천']);
   let [good, plusGood] = useState(function(){
      let li = [];
      for(let i in title) {
         li[i] = 0;
      }
      return li;
   });
   let [modal, setModal] = useState(false);
   let [numT, changeNumT] = useState('0');
   let [tInput, cInput] = useState('');

   return (
      <div className="App">
         <div className="black-nav">
            <h4>ReactBlog</h4>
         </div>

         {
            title.map(function(a, i){
               return (
                  <div className="list" key={i}>
                     <h4 onClick={ () => { setModal(!modal); changeNumT(i); } }>{ title[i] }
                        <span onClick={() => {
                           let copy = [...good];
                           copy[i] += 1;
                           plusGood(copy);
                        }}>👍</span>{ good[i] }
                     </h4>
                     <p>8월 03일 발행</p>
                  </div>
               )
            })
         }

         <input onChange={(e)=>{
            cInput(e.target.value);
            console.log(tInput);
            }} />
         
         {
            modal == true 
            ? <Modal title={title} changeTitle={changeTitle} numT={numT} /> 
            : null
         }
      
      </div>
   );
}

function Modal(props) {
   return(
      <div className="modal">
         <h4>{props.title[props.numT]}</h4>
         <p>날짜</p>
         <p>상세내용</p>
         <button>글수정</button>
      </div>
   );
}

export default App;
