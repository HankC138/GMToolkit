

export interface Item {
	name: string;
	charClass: string;
	AC: number;
	HP: number;
	totalHP: number;
}

export interface ContainerState {
	characters: Item[];
	monsters: Item[];
}

export interface CharCardProps {
	key: string;
	id: string;
	HP: number;
	totalHP: number;
	AC: number;
	name: string;
	charClass: string;
	index: number;
	moveCard: (dragIndex: number, hoverIndex: number) => void;
	adjustHP: (index: string, action: string) => void;
	adjustAC: (index: string, action: string) => void;
}

export interface DragItem {
	index: number;
	id: string;
	type: string;
}

export const ItemTypes = {
	CHARACTER: "character",
};

export interface IBestiarySelector {
	monsterClick: (arg1: Item) => void;
}
export interface IACadjuster {
	AC: number;
	adjustAC: (index: string, checked: string) => void;
	index: number;
}

export interface IHPadjuster {
	HP: number;
	adjustHP: (index: string, action: string) => void;
	index: number;
}


