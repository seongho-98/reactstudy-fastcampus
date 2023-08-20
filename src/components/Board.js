//확장 프로그램 설치
//es7+react/redux 스니펫
//rcc 입력 -> 컴포넌트 틀이 생성됨
import React, { useState } from 'react'
import Square from './Square'
import "./Board.css";

const Board = () => {
   const [squares, setSquares] = useState(Array(9).fill(null))
   const [xIsNext, setXIsNext] = useState(true);

   let status = `Next Player ${xIsNext ? 'X' : 'O'}`;   

   const calculateWiner = (squares) => {
      const winList = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6]
      ]

      for (let index = 0; index < winList.length; index++) {
         const [a,b,c] = winList[index];

         if(squares[a] && squares[a] === squares[b]
             && squares[b] === squares[c])
         {
            return squares[a]; //승자 리턴
         }
      }      
      return null;
   }

   const winner = calculateWiner(squares);

   if(winner){
      status = `Winner: ${winner}`;
   }else{
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
   }

   const handleClick = (i) => {

      const newSquares = squares.slice();//state에 있는 것 복사

      console.log('newSquares', newSquares);
      console.log('newSquares[i]', newSquares[i]);
      //winner가 있거나, 클릭이 이미 되어있다면
      if(calculateWiner(newSquares) || newSquares[i]){
         return; //클릭이 안되도록
      }

      newSquares[i] = xIsNext ? 'X': 'O';

      setSquares(newSquares); //squares 자체를 다시 끼움
      
      setXIsNext(!xIsNext)
      //setXIsNext(previousStateMM => !previousStateMM);
      //비슷하게 동작하지만.. 좀 다른 부분이 있음 -> 생략
      
   }
   
   const renderSquare = (i) => {
      return <Square valueM={squares[i]}
            onClick={() => handleClick(i)}/>

      // props로 함수까지 내려줄 수 있음
    }

    return (
      <div>
         <div className='status'>{status}</div>
         <div className='board-row'>
            {/* <Square />
             이렇게 그냥 사용해도 됨 */}
             {renderSquare(0)}
             {renderSquare(1)}
             {renderSquare(2)}
         </div>
         <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
         </div>
         <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
         </div>
      </div>
    )
}

export default Board;
