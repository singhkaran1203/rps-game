import { Link } from "react-router-dom";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissor from "../images/icon-scissors.svg";
import './play.css'

function Play(props) {

    const setchoice = (e) => {
        props.setmychoice(e.target.id);
        // console.log(e.target.id);

    }


    return (
        <div className="play d-grid">
            <div className="row">
                <Link to="/game" className="col-3 mx-auto my-auto">
                    <div id="paper" onClick={setchoice} className="icon--paper bg-light p-5 rounded-circle">
                        <img src={paper} alt="paper" onClick={setchoice} id="paper"  />
                    </div>
                </Link>
                <Link to="/game" className="col-3 mx-auto my-auto">
                    <div id="rock" onClick={setchoice} className="p-5 bg-light rounded-circle khud" >
                        <img src={rock} alt="rock" onClick={setchoice}  id="rock"  />
                    </div>
                </Link>
            </div>
            <div className="row">
                <Link to="/game" className="col-3 mx-auto my-auto ">
                    <div id="scissor" onClick={setchoice} className="icon--scissor bg-light p-5 rounded-circle">
                        <img src={scissor} alt="scissor" onClick={setchoice} id="scissor" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Play;