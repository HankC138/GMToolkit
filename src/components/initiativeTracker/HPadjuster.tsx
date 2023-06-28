import { useState, MouseEvent, FC } from "react";
import { IHPadjuster } from "../../interfaces";

export const HPadjuster: FC<IHPadjuster> = ({ HP, adjustHP, index }) => {
	const [currentHP, setCurrentHP] = useState(HP);

	const HPadjustment = (action: string, event: MouseEvent) => {
		const { target } = event;
		switch (action) {
			case "increment":
				adjustHP((target as HTMLButtonElement).value, "increment");
				return setCurrentHP(currentHP + 1);
			case "decrement":
				adjustHP((target as HTMLButtonElement).value, "decrement");
				return setCurrentHP(currentHP - 1);
			default:
				return currentHP;
		}
	};
	return (
		<span className="statsAdjuster">
			<button
				className="adjusterButtons"
				value={index}
				onClick={(e) => HPadjustment("decrement", e)}
			>
				-
			</button>
			HP: {currentHP}
			<button
				className="adjusterButtons"
				value={index}
				onClick={(e) => HPadjustment("increment", e)}
			>
				+
			</button>
		</span>
	);
};
