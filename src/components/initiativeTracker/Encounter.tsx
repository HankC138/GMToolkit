import update from "immutability-helper";
import { useState, FC, MouseEvent } from "react";
import { CharCard } from "./Card.tsx";
import { initTrackerValues, monsters } from "../../../characterSheets.ts";
import { Item } from "../../interfaces.ts";
import "../../styles/styles.css";
import { BestiarySelector } from "./BestiarySelector.tsx";
export const Encounter: FC = () => {
	const [characters, setCharacters] = useState(initTrackerValues);

	const moveCard = (dragIndex: number, hoverIndex: number) => {
		setCharacters((prevChars: Item[]) =>
			update(prevChars, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevChars[dragIndex] as Item],
				],
			})
		);
	};

	const adjustHP = (index: string, action: string) => {
		switch (action) {
			case "increment":
				return setCharacters(
					characters.map((char: Item, i: number) => {
						if (i === parseInt(index)) {
							char.HP += 1;
						}
						return char;
					})
				);
			case "decrement":
				return setCharacters(
					characters.map((char: Item, i: number) => {
						if (i === parseInt(index)) {
							char.HP -= 1;
						}
						return char;
					})
				);
			default:
				return null;
		}
	};

	const adjustAC = (index: string, action: string) => {
		switch (action) {
			case "increment":
				return setCharacters(
					characters.map((char: Item, i: number) => {
						if (i === parseInt(index)) {
							char.AC += 1;
						}
						return char;
					})
				);
			case "decrement":
				return setCharacters(
					characters.map((char: Item, i: number) => {
						if (i === parseInt(index)) {
							char.AC -= 1;
						}
						return char;
					})
				);
			default:
				return null;
		}
	};

	const monsterClick = (monster: Item) => {
		setCharacters([...characters, monster]);
	};

	const renderCharacters = (
		{ name, charClass, AC, HP, totalHP }: Item,
		index: number
	) => {
		return (
			<div className="charCard" key={index}>
				<CharCard
					key={`${name}_${index}`}
					index={index}
					id={name}
					name={name}
					HP={HP}
					totalHP={totalHP}
					AC={AC}
					charClass={charClass}
					moveCard={moveCard}
					adjustHP={adjustHP}
					adjustAC={adjustAC}
				/>
			</div>
		);
	};
	return (
		<>
			<div className="trackerDiv">
				{characters.map((char, i) => renderCharacters(char, i))}
				<BestiarySelector monsterClick={monsterClick} />
				<br />
			</div>
		</>
	);
};
