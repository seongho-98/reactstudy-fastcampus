//확장 프로그램 설치
//es7+react/redux 스니펫
//rcc 입력 -> 컴포넌트 틀이 생성됨
import React, { Component } from 'react'
import Square from './Square'
import "./Board.css";

export default class Board extends Component {
   constructor(props){
      super(props);
      this.state = {
         squares: Array(9).fill(null)
      }
   } 

   handleClick(i){
      const squares = this.state.squares.slice(); //state에 있는 것 복사
      squares[i] = 'X';

      this.setState({
         squares : squares
      }); //squares 자체를 다시 끼움
   }
   
   renderSquare(i){
        return <Square valueM={this.state.squares[i]}
                  onClick={() => this.handleClick(i)} />
      // props로 함수까지 내려줄 수 있음
    }

  render() {
    return (
      <div>
         <div className='status'>Next Player: X, O</div>
         <div className='board-row'>
            {/* <Square />
             이렇게 그냥 사용해도 됨 */}
             {this.renderSquare(0)}
             {this.renderSquare(1)}
             {this.renderSquare(2)}
         </div>
         <div className='board-row'>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
         </div>
         <div className='board-row'>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
         </div>
      </div>
    )
  }
}
