import './appliances.css'

function AppliancesApp () {
  return (
    <div className="appliances">
      <div className="appliances-grid">

        <div className="resistor" draggable="true">
          <p>R</p>
        </div>
        <div className="resistor">
          <p>U</p>
        </div>
        <div className="resistor">
          <p>I</p>
        </div>
      </div>
    </div>
  )
}

export default AppliancesApp;