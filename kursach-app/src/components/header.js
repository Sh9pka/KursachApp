import './header.css'

function HeaderApp () {
  return (
    <div className="nav-header">
      <div>
        <a href="#" className="nav-button">Name</a>
      </div>
      <div>
        <ul className="nav-items">
          <li><a href="#" className="nav-button">Button 1</a></li>
          <li><a href="#" className="nav-button">Button 2</a></li>
          <li><a href="#" className="nav-button">Button 3</a></li>
        </ul>
      </div>
      <div>
        <a href="#" className="nav-button">Button</a>
      </div>
    </div>
  )
}

export default HeaderApp;