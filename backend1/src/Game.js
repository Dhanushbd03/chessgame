import { Chess } from "chess.js";
import { MOVE, INIT_GAME } from "./messages.js";
//mine
export class Game {
	constructor(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;
		this.board = new Chess();
		this.moves = [];
		this.movesCount = 0;
		this.starttime = new Date();
		this.player1.send(
			JSON.stringify({
				type: INIT_GAME,
				payload: {
					color: "white",
				},
			})
		);
		this.player2.send(
			JSON.stringify({
				type: INIT_GAME,
				payload: {
					color: "black",
				},
			})
		);
	}
	makeMove(socket, move) {
		//validation here
		if (this.movesCount % 2 === 0 && socket !== this.player1) {
			return;
		}
		if (this.movesCount % 2 === 1 && socket !== this.player2) {
			return;
		}
		try {
			this.board.move(move);
		} catch (error) {
			console.log(error);
			return;
		}
		if (this.board.isGameOver()) {
			//send the messages to both players
			this.player1.emit(
				JSON.stringify({
					type: GAME_OVER,
					payload: {
						winner: this.board.turn() === "w" ? "black" : "white",
					},
				})
			);

			this.player2.emit(
				JSON.stringify({
					type: GAME_OVER,
					payload: {
						winner: this.board.turn() === "w" ? "black" : "white",
					},
				})
			);
			return;
		}
		if (this.movesCount % 2 === 0) {
			this.player2.send(JSON.stringify({ type: MOVE, payload: move }));
		} else {
			this.player1.send(JSON.stringify({ type: MOVE, payload: move }));
		}
		//check if the game is over
		this.movesCount++; //send the updates the board to both players
	}
}
