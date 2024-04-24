import React, { useEffect, useState } from "react";
import ChessBoard from "../components/ChessBoard";
import Button from "../components/Button";
import { useSocket } from "../hooks/useSocket";
import { Chess } from "chess.js";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

const Game = () => {
	const socket = useSocket();
	const [chess, setChess] = useState(new Chess());
	const [board, setBoard] = useState(chess.board());
	const [started, setStarted] = useState(false)
	useEffect(() => {
		if (!socket) {
			return;
		}
		socket.onmessage = (event) => {
			const message = JSON.parse(event.data);
			switch (message.type) {
				case INIT_GAME:
					setBoard(chess.board());
					setStarted(true)
					break;
				case MOVE:
					const move = message.payload;
					chess.move(move);
					setBoard(chess.board());
					console.log("move made");
					break;
				case GAME_OVER:
					console.log("game over");
					break;
			}
		};
	}, [socket]);

	if (!socket) return <div>connecting..........</div>;
	return (
		<div className="p-8 bg-Dark-classic-blue flex justify-center">
			<div className="sm:grid grid-cols-5 gap-10 ">
				<div className="col-span-3 w-full flex justify-center">
					<ChessBoard
						board={board}
						socket={socket}
						setBoard={setBoard}
						chess={chess}
					/>
				</div>
				<div className="col-span-2  w-full flex flex-col bg-gold rounded-xl">
					{!started?<Button
						onClick={() => {
							socket.send(JSON.stringify({ type: INIT_GAME }));
						}}
						className={
							"bg-turquoise p-2 my-5 rounded-xl hover:opacity-70 font-bold text-3xl mx-auto text-Dark-classic-blue "
						}
					>
						Play
					</Button>:null}
				</div>
			</div>
		</div>
	);
};

export default Game;
