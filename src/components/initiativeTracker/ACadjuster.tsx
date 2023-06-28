import { useState, MouseEvent,FC } from "react";
import { IACadjuster } from "../../interfaces";

export const ACadjuster: FC<IACadjuster> = ({ adjustAC, AC, index }) => {
	const [currentAC, setCurrentAC] = useState(AC);

	const ACadjustment = (event: MouseEvent, action: string) => {
		const { target } = event;
		switch (action) {
			case "increment":
				adjustAC((target as HTMLButtonElement).value, "increment");
				return setCurrentAC(currentAC + 1);
			case "decrement":
				adjustAC((target as HTMLButtonElement).value, "decrement");
				return setCurrentAC(currentAC - 1);
			default:
				return currentAC;
		}
	};

	return (
		<span className="statsAdjuster">
			<button
				className="adjusterButtons"
				value={index}
				onClick={(e) => ACadjustment(e, "decrement")}
			>
				-
			</button>
			AC: {currentAC}
			<button
				className="adjusterButtons"
				value={index}
				onClick={(e) => ACadjustment(e, "increment")}
			>
				+
			</button>
		</span>
	);
};
