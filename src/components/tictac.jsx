import React, {  useState } from "react";
import "../style/tictacstyle.css"
function Tictacto() {
    //use for countiing the victoris of both parties  
    const [vCount, setvCount] = useState([0, 0])
    //use to count the marks of both player 
    const [counter, setcounter] = useState(0)
    //use for the marking of the boxes 
    const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""])
    //use to set the players turn
    const [player, setplayer] = useState(true);
    //use to show winner result
    const [winner, setWinner] = useState("");

    //a function to mark the boxes according to player 
    function markbox(id) {
        if (boxes[id] === "") {
            setcounter(oldvalue => oldvalue + 1)
            setBoxes(old => {
                if (player === true) {
                    old[id] = "X"
                    setplayer(!player)
                    check();
                }
                else {
                    old[id] = "O"
                    setplayer(!player)
                    check();
                }
                return old
            })
        }
    }

    //function to get the marked box 
    function getBox(no) {
        return boxes[no] === "X" ? <p className="p1mark">{boxes[no]}</p> : <p className="p2mark">{boxes[no]}</p>
    }
    //function for checking the wining player
    function check() {
        //checks for winning cases of player1
        if (player === true) {
            //these are cases to win
            if (boxes[0] === "X" && boxes[1] === "X" && boxes[2] === "X") {
                player1Wins()
            }
            else if (boxes[3] === "X" && boxes[4] === "X" && boxes[5] === "X") {
                player1Wins()
            }
            else if (boxes[6] === "X" && boxes[7] === "X" && boxes[8] === "X") {
                player1Wins()
            }
            else if (boxes[0] === "X" && boxes[3] === "X" && boxes[6] === "X") {
                player1Wins()
            }
            else if (boxes[1] === "X" && boxes[4] === "X" && boxes[7] === "X") {
                player1Wins()
            }
            else if (boxes[2] === "X" && boxes[5] === "X" && boxes[8] === "X") {
                player1Wins()
            }
            else if (boxes[0] === "X" && boxes[4] === "X" && boxes[8] === "X") {
                player1Wins()
            }
            else if (boxes[2] === "X" && boxes[4] === "X" && boxes[6] === "X") {
                setWinner("player1")
            }
            else if (counter === 8 && winner === "") {
                setWinner("draw")
                setTimeout(() => reset(), 2000)
            }
        }
        //checks for winning cases of player2
        else if (player === false) {
            //these are the cases to win 
            if (boxes[0] === "O" && boxes[1] === "O" && boxes[2] === "O") {
                player2Wins()
            }
            else if (boxes[3] === "O" && boxes[4] === "O" && boxes[5] === "O") {
                player2Wins()
            }
            else if (boxes[6] === "O" && boxes[7] === "O" && boxes[8] === "O") {
                player2Wins()
            }
            else if (boxes[0] === "O" && boxes[3] === "O" && boxes[6] === "O") {
                player2Wins()
            }
            else if (boxes[1] === "O" && boxes[4] === "O" && boxes[7] === "O") {
                player2Wins()
            }
            else if (boxes[2] === "O" && boxes[5] === "O" && boxes[8] === "O") {
                player2Wins()
            }
            else if (boxes[0] === "O" && boxes[4] === "O" && boxes[8] === "O") {
                player2Wins()
            }
            else if (boxes[2] === "O" && boxes[4] === "O" && boxes[6] === "O") {
                player2Wins()
            }
            else if (counter > 8 && winner === "") {
                setWinner("draw")
                setTimeout(() => reset(), 2000)
            }
        }



    }

    function getboxdiv(id) {
        return <div onClick={event => { markbox(event.target.id) }} id={id}>
            {getBox(id)}
        </div>
    }
    //method player1 wins 
    function player1Wins() {
        setWinner("player1")
        setvCount(pVcount => [pVcount[0] + 1, pVcount[1]])
        setTimeout(() => reset(), 2000)
    }
    //method when player 2 wins 
    function player2Wins() {
        setWinner("player2")
        setvCount(pVcount => [pVcount[0], pVcount[1] + 1])
        setTimeout(() => reset(), 2000)
    }
    function reset() {
        setBoxes(["", "", "", "", "", "", "", "", ""])
        setWinner("")
        setplayer(true)
        setcounter(0)
    }
    //this is the main return call
    return <div className="top_most">
        <div className="result_div">
            <p className="first_victories">Wins <span>{vCount[0]}</span></p>
            {winner === "player1" ? <h1 className="p1result">player 1 Won</h1> : <h2 className="p1result"></h2>}
            {winner === "draw" ? <h1 className="p1result">draw : No win</h1> : <h1 className="p1result"></h1>}
        </div>
        <div className="parent_div">
            <h1 className="title">Tic<span>tac</span>to</h1>
            <h3>player <span>{player === true ? "one" : "two"}</span>  turn </h3>
            <div className="outer_div">

                {getboxdiv(0)}
                {getboxdiv(1)}
                {getboxdiv(2)}
            </div>
            <div className="outer_div">
                {getboxdiv(3)}
                {getboxdiv(4)}
                {getboxdiv(5)}
            </div>
            <div className="outer_div">
                {getboxdiv(6)}
                {getboxdiv(7)}
                {getboxdiv(8)}
            </div >
            <button onClick={reset}>New game</button>

        </div >
        <div className="result_div">
            <h1 className="second_victories">Wins <span>{vCount[1]}</span></h1>
            {winner === "player2" ? <h1 className="p2result">player 2 Won</h1> : <h2 className="p2result"></h2>}
            {winner === "draw" ? <h1 className="p2result">draw :no win</h1> : <h1 className="p2result"></h1>}
        </div>
    </div>


}
export default Tictacto