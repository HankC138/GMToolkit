export interface Item {
	name: string;
	charClass: string;
	AC: number;
	HP: number;
}

export interface ContainerState {
	characters: Item[];
	monsters: Item[];
}

export interface CharCardProps {
	key: string;
	id: string;
	HP: number;
	AC: number;
	name:string;
	charClass:string;
	index: number;
	moveCard: (dragIndex: number, hoverIndex: number) => void;
	adjustHP: (index: string, action: string) => void;
}

export interface DragItem {
	index: number;
	id: string;
	type: string;
}

export const ItemTypes = {
    CHARACTER: 'character',
  }
  