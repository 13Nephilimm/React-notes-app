const Header = ({ handleToggleDark }) => {
    return (
        <div className="header">
            <h1 className="heading">Nephilim's Notes</h1>
            <button 
                className="save" 
                onClick={() => {handleToggleDark(prevDarkMode => !prevDarkMode)}}>Toggle Mode
            </button>
        </div>
    )
}

export default Header