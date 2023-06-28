import { monsters } from "../../../characterSheets";
import { ChangeEvent, useState,FC } from "react";
import { IBestiarySelector } from "../../interfaces";

export const BestiarySelector: FC<IBestiarySelector> = ({ monsterClick }) => {
	const [selectedMonster, setSelectedMonster] = useState(null);

	const options = () => {
		return monsters.map((monster, i) => {
			return (
				<option value={JSON.stringify(monster)} key={`${monster.name}${i}`}>
					{monster.name}
				</option>
			);
		});
	};
	const selectMonster = (event: ChangeEvent) => {
		const { target } = event;
		setSelectedMonster(JSON.parse((target as HTMLButtonElement).value));
	};
	const addMonster = () => {
		selectedMonster ? monsterClick(selectedMonster) : null;
	};
	return (
		<>
			<select onChange={(e) => selectMonster(e)}>{options()}</select>
			<button onClick={() => addMonster()}>add to Encounter</button>
		</>
	);
};
