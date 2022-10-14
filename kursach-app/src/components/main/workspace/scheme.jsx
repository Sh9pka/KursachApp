import React, { useEffect, useState } from "react";
import './scheme.css'
import AppliancesApp from './appliances';

const SchemeApp = (props) => {

  let cellCount = [...Array(98).keys()]

  const [appliancesBoard, setAppliancesBoard] = useState([
    {id: 1, items: [{id: 1, title: 'R'}, {id: 2, title: 'U'}, {id: 3, title: 'I'}, {id: 4, title: 'провод'}]}
  ])

  const [currentBoard, setCurrentBoard] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)


  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none'
  }
  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none'
  }
  function dragOverHandler(e) {
    e.preventDefault()
    if(e.target.className == 'resistor') {
      e.target.style.boxShadow = '0 4px 3px gray'
    }
  }
  function dropHandler(e, board) {
    e.preventDefault()
    // const currentIndex = currentBoard.items.indexOf(currentItem)
    // board.items.splice(currentIndex, 1)    
    // const dropIndex = board.items.indexOf(item)
    // board.items.splice(dropIndex + 1, 0, currentItem)
   
    board.items.splice(0, 1)    
    board.items.splice(-1, 0, currentItem)
    
    setAppliancesBoard(appliancesBoard.map(b => {
      if (b.id === board.id) {
        return board
      }
      if (b.id === currentBoard.id) {
        return currentBoard
      }
      return b
    }))
  }

  const [cells, setCells] = useState([
    Object.keys(cellCount).map(key => {
      return {id: key, items: [{id: 0, title: ''}]}
    })
  ])

  return (
    <div className="scheme">
      <div className="left-bar">
        <a className="left-bar__button">
          <p>Назад</p>
        </a>
        <a className="left-bar__button">
          <p>Вперед</p>
        </a>
        <a className="left-bar__button">
          <p>Удалить</p>
        </a>
      </div>
      <div className="scheme-content">
        <div className="grid">

        {cells[0].map(function(cell, key) {
        return (
          <div 
              onDragLeave={e => dragLeaveHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, cell)}
              className="cell"
            >
            {cell.items[0].title}
            </div>
        )
        })}
        {<AppliancesApp currentBoard={currentBoard} setCurrentBoard={setCurrentBoard} currentItem={currentItem} setCurrentItem={setCurrentItem} appliancesBoard={appliancesBoard} setAppliancesBoard={setAppliancesBoard} {...props}/>}
        </div>
      </div>
      <div className="right-bar">
        <div className="indicators-table">
          <p>Показатели</p>
          <div className ="indicators-table__system">

          </div>
          
        </div>
        <div>
          <p className="button-start">Начать</p>
        </div>
      </div>
      
    </div>
  )
}

export default SchemeApp;