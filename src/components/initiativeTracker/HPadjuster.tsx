import { useState } from "react";

interface IHPadjuster {
	HP: number;
}

export const HPadjuster = ({ HP }: IHPadjuster) => {
	const [currentHP, setCurrentHP] = useState(HP);

	const HPadjustment = (action: string) => {
        console.log(action)
		switch (action) {
			case "increment":
				return setCurrentHP(currentHP + 1);
			case "decrement":
				return setCurrentHP(currentHP - 1);
			default:
				return currentHP;
		}
	};
	return (
		<span>
			<button onClick={() => HPadjustment("increment")}>+</button>
			{currentHP}
			<button onClick={()=> HPadjustment('decrement')}>-</button>
		</span>
	);
};
