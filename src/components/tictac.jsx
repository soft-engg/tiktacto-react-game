import React, {  useState } from "react";
function Tictacto() {
    //use for counting the victories of both parties  
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
        console.log("the box is called with id " ,id)
        console.log(boxes)
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
        return boxes[no] === "X" ? <p className="w-20 h-20 border-2 border-green-600/60  text-4xl flex justify-center items-center font-bold text-green-600">{boxes[no]}</p> 
        : <p className="w-20 h-20 border-2 border-green-600/60  text-4xl flex justify-center items-center font-bold text-red-600">{boxes[no]}</p>
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
      
        return <div  onClick={event => { markbox(id)}} id={id}>
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
    return <div className=" flex min-h-screen bg-gray-900   ">
        <div className="flex flex-col flex-shrink  w-2/6 justify-center items-center">
            <p className="text-gray-300 text-2xl font-bold">Wins <span className="text-4xl text-green-600">{vCount[0]}</span></p>
            {winner === "player1" ? <p className="text-green-600 font-bold text-lg h-6">player 1 Won</p> : <p className="p1result"></p>}
            {winner === "draw" ? <p className="text-gray-300 font-bold text-lg h-6">draw : No win</p> : <p className="p1result"></p>}
        </div>

        <div className="w-4/6 flex flex-col   items-center justify-center">
            
            <p className="text-green-600 text-4xl font-bold tracking-wide ">Tic
            
            <span className="text-rose-600">Tac</span>To</p>
            
            <h3 className="text-xl text-red-600">player <span className="text-2xl font-bold text-green-600">{player === true ? "one" : "two"}</span>  turn </h3>
            
            <div className="flex w-3/4 justify-center mt-1">

                {getboxdiv(0)}
                {getboxdiv(1)}
                {getboxdiv(2)}
            </div>
            <div className="flex w-3/4 justify-center   ">
                {getboxdiv(3)}
                {getboxdiv(4)}
                {getboxdiv(5)}
            </div>
            <div className="flex w-3/4 justify-center  mb-2">
                {getboxdiv(6)}
                {getboxdiv(7)}
                {getboxdiv(8)}
            </div >
            <button onClick={reset} className="border-red-600 text-green-600 font-bold border-2 px-2 py-1 rounded-md  bg-gray-900/70">New game</button>

        </div >


        <div className="flex flex-col flex-shrink   w-2/6 justify-center items-center">
            <p className="text-gray-300 text-2xl font-bold ">Wins <span className="text-4xl text-red-600">{vCount[1]}</span></p>
            {winner === "player2" ? <p className="text-red-600 font-bold text-lg h-6">player 2 Won</p> : <p className="p2result"></p>}
            {winner === "draw" ? <p className="text-gray-300 font-bold text-lg h-6">draw :no win</p> : <p className="p2result"></p>}
        </div>
    </div>


}
export default Tictacto