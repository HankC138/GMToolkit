import update from "immutability-helper";
import type { FC } from "react";
import { useCallback, useState } from "react";
import { CharCard } from "./Card.tsx";
import { initTrackerValues, monsters } from "../../../characterSheets.ts";
import { Link } from "react-router-dom";
import { HPadjuster } from "./HPadjuster.tsx";
const style = {
	width: 400,
};
const monsterStyle = {
	border: "1px dashed gray",
	padding: "0.5rem 1rem",
	marginBottom: ".5rem",
	backgroundColor: "white",
	cursor: "move",
	justifyContent: 'center',
	borderRadius: "10px",
	display:'flex'
};
const monsterDivStyle = {
	border: "1px dashed gray",
	padding: "0.5rem 1rem",
	marginBottom: ".5rem",
	backgroundColor: "white",
	cursor: "move",
	justifyContent: 'center',
	borderRadius: "10px",
	display:'grid',
	grid: '1fr 1fr',
	gridTemplateColumns:'1fr 1fr'
};

export interface Item {
	name: string;
	class: string;
	AC: number;
	HP: number;
}

export interface ContainerState {
	characters: Item[];
}

export const Tracker: FC = () => {
	{
		const [characters, setCharacters] = useState(initTrackerValues);
		const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
			setCharacters((prevChars: Item[]) =>
				update(prevChars, {
					$splice: [
						[dragIndex, 1],
						[hoverIndex, 0, prevChars[dragIndex] as Item],
					],
				})
			);
		}, []);

		const monsterClick = (monster) => {
			console.log("clicked", monster);

			setCharacters([...characters, monster]);
			console.log(characters);
		};
		const renderCharacters = useCallback(
			(
				character: {
					name: string;
					class: string;
					AC: number;
					HP: number;
				},
				index: number
			) => {
				return (
					<div key={index}>
						<CharCard
							key={`${character.name}_${index}`}
							index={index}
							id={character.name}
							name={character.name}
							HP={character.HP}
							AC={character.AC}
							charClass={character.class}
							moveCard={moveCard}
						/>
						<HPadjuster
							key={`${character.name}+${character.HP}${index}`}
							HP={character.HP}
						/>
					</div>
				);
			},
			[]
		);

		return (
			<>
				<div style={style}>
					{characters.map((char, i) => renderCharacters(char, i))}
					<div style={monsterDivStyle}>
					{monsters.map((monster, i) => (
						<div
							key={`${monster.name}+${i}`}
							onClick={() => monsterClick(monster)}
							className={'monster'}
							style={monsterStyle}
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
