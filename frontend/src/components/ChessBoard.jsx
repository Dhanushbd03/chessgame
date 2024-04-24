import React, { useState } from "react";
import { MOVE } from "../screens/Game";

const ChessBoard = ({ board, socket, setBoard, chess }) => {
	const [from, setFrom] = useState(null);
	const [to, setTo] = useState(null);
	
	return (
		<div className="flex flex-col ">
			{board.map((row, i) => {
				return (
					<div key={i} className="flex text-gold w-full  border border-gold">
						{row.map((square, j) => {
							const squareRepresentation =
								String.fromCharCode(97 + (j % 8)) + "" + (8 - i);
							return (
								<div
									onClick={() => {
										if (!from) {
											setFrom(squareRepresentation);
										} else {
											socket.send(
												JSON.stringify({
													type: MOVE,
													payload: {
														move: {
															from,
															to: squareRepresentation,
														},
													},
												})
											);
											setFrom(null);
											setTo(squareRepresentation);

											chess.move({
												from,
												to: squareRepresentation,
											});
											setBoard(chess.board());
											console.log(from, to);
										}
										console.log(
		`/${
			square?.color === "b" ? square?.type : square?.type?.toUpperCase()
		} copy.png`
	);
									}}
									key={j}
									className={`w-20 h-20
									 ${
											(i + j) % 2 == 0 ? "bg-gold" : "bg-turquoise"
										}   flex justify-center items-center  p-5`}
								>
									{square ? (
										<img
											src={`/${
												square?.color === "b"
													? square?.type
													: square?.type?.toUpperCase()+" copy"
											}.png`}
										/>
									) : null}
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default ChessBoard;
