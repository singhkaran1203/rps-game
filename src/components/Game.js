import { useState, useEffect } from "react";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissor from "../images/icon-scissors.svg";
import { Link } from "react-router-dom"

function Game(props) {

    const [house, sethouse] = useState("");
    const [playerwin, setplayerwin] = useState("");


    function newhousepick() {
            const choices = ["rock", "paper", "scissor"];
            sethouse(choices[Math.floor(Math.random() * 3)]);
    }
    useEffect(() => {
        newhousepick();
    }, []);


    function result() {
        if (house === "rock" && props.mychoice === "paper") {
            setplayerwin("win");
            props.setscore(props.score + 1);
        }
        else if (house === "paper" && props.mychoice === "scissor") {
            setplayerwin("win");
            props.setscore(props.score + 1);
        }
        else if (house === "scissor" && props.mychoice === "rock") {
            setplayerwin("win");
            props.setscore(props.score + 1);
        }
        else if (house === "paper" && props.mychoice === "rock") {
            setplayerwin("lose");
            props.setscore(props.score - 1);
        }
        else if (house === "rock" && props.mychoice === "scissor") {
            setplayerwin("lose");
            props.setscore(props.score - 1);
        }
        else if (house === "scissor" && props.mychoice === "paper") {
            setplayerwin("lose");
            props.setscore(props.score - 1);
        }
        else {
            setplayerwin("draw");
            props.setscore(props.score);
        }
    }



    useEffect(() => {
        result();
    }, [house]);


    const myimage = () => {
        if (props.mychoice === "paper") return paper;
        else if (props.mychoice === "rock") return rock;
        else return scissor;
    }
    const houseimage = () => {
        if (house === "paper") return paper;
        else if (house === "rock") return rock;
        else return scissor;
    }

    return (
        <div className="game d-grid">
            <div className="row my-5">
                <div className="col-4 bg-light p-5 border rounded-circle">
                    <img src={myimage()} alt="myimage" />
                    <p className="text-dark">You picked</p>
                </div>
                <div className="col-4 text-center mt-5">
                    {playerwin === "win" && <h1>YOU WIN</h1>}
                    {playerwin === "lose" && <h1>YOU LOSE</h1>}
                    {playerwin === "draw" && <h1>DRAW</h1>}
                    <Link to="/" className="btn btn-outline-danger btn-lg mt-5">play again</Link>
                </div>
                <div className="col-4 bg-light p-5 border rounded-circle">
                    <img src={houseimage()} alt="houseimage" />
                    <p className="text-dark">House picked</p>
                </div>
            </div>
        </div>
    );
}

export default Game;


// my choice:{props.mychoice}
//             <br />
//             housepicked:{house}
//             <br />
//             winner:
//             {playerwin==="win"&&<h2>WIN</h2>}
//             {playerwin==="lose"&&<h2>LOSE</h2>}
//             {playerwin==="draw"&&<h2>DRAW</h2>}