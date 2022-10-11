import './scheme.css'

function SchemeApp () {

  let cellCount = [...Array(144).keys()]

  let cells = Object.keys(cellCount).map(function(item, key) {
    return <div className="cell" key={key}></div>
  })

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

        {cells}

        </div>
      </div>
      <div className="right-bar">
        <div className="indicators-table">
          <p>Показатели</p>
          <div className ="indicators-table__system">

          </div>
        </div>
      </div>
    </div>
  )
}

export default SchemeApp;