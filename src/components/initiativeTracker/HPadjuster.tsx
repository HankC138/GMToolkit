import { useState, MouseEvent } from "react";
interface IHPadjuster {
	HP: number;
	adjustHP: (index: string, action: string) => void;
	index: number;
}

export const HPadjuster = ({ HP, adjustHP, index }: IHPadjuster) => {
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
		<span>
			Current HP:{" "}
			<button value={index} onClick={(e) => HPadjustment("increment", e)}>
				+
			</button>
			{currentHP}
			<button value={index} onClick={(e) => HPadjustment("decrement", e)}>
				-
			</button>
		</span>
	);
};
