import React, { useEffect, useState } from "react";
import './appliances.css'

const AppliancesApp = (props) => {



  function dragStartHandler(e, board, item) {
    props.setCurrentBoard(board)
    props.setCurrentItem(item)
  }


  return (
    <div className="appliances">
        {props.appliancesBoard.map(board => 
          <div className="appliances-grid">
            {board.items.map(item =>
              <div 
                onDragStart={(e) => dragStartHandler(e, board, item)}
                draggable={true}
                className="resistor"
              >
              {item.title}
            </div>   
            )}
          </div>
        )}
    </div>
  )
}

export default AppliancesApp;