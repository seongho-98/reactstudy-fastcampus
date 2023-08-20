//확장 프로그램 설치
//es7+react/redux 스니펫
//rcc 입력 -> 컴포넌트 틀이 생성됨
import React, { useState } from 'react'
import Square from './Square'
import "./Board.css";

const Board = ({squares, onClick}) => {

   const renderSquare = (i) => {
      return <Square valueM={squares[i]}
            onClick={() => onClick(i)}/>

      // props로 함수까지 내려줄 수 있음
    }

    return (
      <div>
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
