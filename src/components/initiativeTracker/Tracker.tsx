import update from "immutability-helper";
import type { FC } from "react";
import { useState } from "react";
import { CharCard } from "./Card.tsx";
import { initTrackerValues, monsters } from "../../../characterSheets.ts";
import { Link } from "react-router-dom";
import { Item } from "../../interfaces.ts";
import '../../styles/styles.css'
import { useDocumentTitle } from "../../hooks/useDocumentTitle.tsx";
export const Tracker: FC = () => {
	{
		useDocumentTitle('Init Tracker')
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

		const monsterClick = (monster: Item) => {
			setCharacters([...characters, monster]);
		};

		const renderCharacters = (
			{ name, charClass, AC, HP }: Item,
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
						AC={AC}
						charClass={charClass}
						moveCard={moveCard}
						adjustHP={adjustHP}
					/>
				</div>
			);
		};

		return (
			<>
				<div className="trackerDiv">
					{characters.map((char, i) => renderCharacters(char, i))}
					<div className="monsterDiv">
						{monsters.map((monster, i) => (
							<div
								key={`${monster.name}+${i}`}
								onClick={() => monsterClick(monster)}
								className="monster"
							>
								{" "}
								{monster.name}{" "}
							</div>
						))}
					</div>
				</div>
				<Link to="/">Home</Link>
			</>
		);
	}
};
