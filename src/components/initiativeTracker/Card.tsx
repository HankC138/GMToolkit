import type { Identifier, XYCoord } from "dnd-core";
import { useRef, FC } from "react";
import { useDrag, useDrop } from "react-dnd";
import "../../styles/styles.css";
import { CharCardProps, DragItem, ItemTypes } from "../../interfaces";
import { HPadjuster } from "./HPadjuster";
import { ACadjuster } from "./ACadjuster";

export const CharCard: FC<CharCardProps> = ({
	id,
	name,
	HP,
	AC,
	totalHP,
	index,
	moveCard,
	adjustHP,
	adjustAC,
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [{ handlerId }, drop] = useDrop<
		DragItem,
		void,
		{ handlerId: Identifier | null }
	>({
		accept: ItemTypes.CHARACTER,
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item: DragItem, monitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;

			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}

			// Determine rectangle on screen
			const hoverBoundingRect = ref.current?.getBoundingClientRect();

			// Get vertical middle
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

			// Determine mouse position
			const clientOffset = monitor.getClientOffset();

			// Get pixels to the top
			const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%

			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}

			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}

			// Time to actually perform the action
			moveCard(dragIndex, hoverIndex);

			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		},
	});

	const [{ isDragging }, drag] = useDrag({
		type: ItemTypes.CHARACTER,
		item: () => {
			return { id, index };
		},
		collect: (monitor: any) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const isDead = HP===0 ? 'dead' : '';
	const backgroundColor = isDragging ? "dragging" : "";

	drag(drop(ref));
	return (
		<span
			ref={ref}
			className={`initCard ${backgroundColor} ${isDead}`}
			data-handler-id={handlerId}
		>
			-{name}
			<br />
			-Total HP:{totalHP}
			<br />
			-Init Order:{index + 1}
			<br />
			<div className="statsAdjustersDiv">
				<HPadjuster
					key={`${name}+${HP}${index}`}
					HP={HP}
					index={index}
					adjustHP={adjustHP}
				/>
				<ACadjuster AC={AC} index={index} adjustAC={adjustAC} />
			</div>
		</span>
	);
};
