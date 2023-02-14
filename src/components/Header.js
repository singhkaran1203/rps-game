import logo from "../images/logo.svg"

function Header(props) {
    return (
        <div className="d-flex flex-wrap m-2 p-2 justify-content-between border rounded border-3" style={{height:'10rem'}}>
            <img style={{height:'8.5rem'}} src={logo} alt="logo" />
            <div className="score bg-light rounded  px-3 mt-2 mt-sm-0" style={{height:'8.5rem'}}>
                <h1>Score</h1>
                <p className="display-3">{props.score}</p>
            </div>
        </div>
    );
}

export default Header;