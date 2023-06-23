import update from "immutability-helper";
import type { FC } from "react";
import { useCallback, useState } from "react";
import { CharCard } from "./Card.tsx";
import { initTrackerValues } from "../../../characterSheets.ts";
import { Link } from "react-router-dom";
const style = {
	width: 400,
};

export interface Item {
	name: string;
	ancestry: string;
	class: string;
	AC: number;
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
		const renderCharacters = useCallback(
			(
				character: {
					name: string;
					class: string;
					ancestry: string;
					AC: number;
				},
				index: number
			) => {
				return (
					<CharCard
						key={`${character.name}_${index}`}
						index={index}
						id={character.name}
						text={`${character.name}-${character.ancestry}-${character.class}-AC:${character.AC}`}
						moveCard={moveCard}
					/>
				);
			},
			[]
		);
		return (
			<>
				<div style={style}>
					{characters.map((char, i) => renderCharacters(char, i))}
				</div>
				<Link to="/">Home</Link>
			</>
		);
	}
};
