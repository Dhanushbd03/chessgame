import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./../components/Button";
const Landing = () => {
	const navigate = useNavigate();
	return (
		<div className=" bg-Dark-classic-blue text-gold h-screen">
			<div className="sm:flex justify-center p-10 gap-10">
				<img src="\chessboard.jpeg" alt="" className="sm:w-1/4 rounded-lg" />
				<div className="px-10 py-5 flex flex-col">
					<h1 className="text-5xl text-center">Play Chess</h1>
					<h1 className="text-5xl text-center">Online</h1>
					<h1 className="text-5xl text-center">on the #2 Site!</h1>
					<div className="flex justify-center">
						<Button
							onClick={() => navigate("/game")}
							className="bg-turquoise p-2 my-5 rounded-xl hover:opacity-70 font-bold text-2xl"
						>
							Play Online
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
