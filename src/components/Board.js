//확장 프로그램 설치
//es7+react/redux 스니펫
//rcc 입력 -> 컴포넌트 틀이 생성됨
import React, { useState } from 'react'
import Square from './Square'
import "./Board.css";

const Board = () => {
   const [squares, setSquares] = useState(Array(9).fill(null))

   const handleClick = (i) => { //함수형이라 이렇게 수정해줘야함
      // const squares = this.state.squares.slice(); 

      const newSquares = squares.slice();//state에 있는 것 복사
      
      newSquares[i] = 'X';

      //this.setState({squares : squares});
      setSquares(newSquares); //squares 자체를 다시 끼움
   }
   
   const renderSquare = (i) => {
      //return <Square valueM={this.state.squares[i]} onClick={() => this.handleClick(i)} />
      return <Square value={squares[i]}
            onClick={() => this.handleClick(i)}/>

      // props로 함수까지 내려줄 수 있음
    }

    return (
      <div>
         <div className='status'>Next Player: X, O</div>
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
