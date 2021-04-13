import { useState, useContext } from "react";
import styled from "styled-components";
import {
	DragDropContext,
	Draggable as Dragable,
	Droppable,
} from "react-beautiful-dnd";
import Draggable from "react-draggable";

import { AppContext } from "../context";
import { CREATE_WINDOW_BOX } from "../actions";
import Window from "./window";

const IconsHolderWrapper = styled.div`
	// display: flex;
	// flex-direction: column;
	// justify-content: center;
	position: relative;
	margin-bottom: auto;
	height: 80vh;
`;
const ImagWrapper = styled.div`
	margin: 2rem 0 0 2rem;
	postion: absolute;
`;

const Image = styled.img`
	width: 3rem;
	display: inline-block;
	// height: 4rem;
`;

const IconsHolder = () => {
	const { state, dispatch } = useContext(AppContext);
	const [sortedIcons, setSortedIcons] = useState(state.items);
	console.log(state);

	const handleDragEnd = (result) => {
		if (!result.destination) return;
		const items = [...sortedIcons];
		const [reordered] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reordered);
		setSortedIcons(items);
	};
	return (
		<>
			<IconsHolderWrapper>
				{sortedIcons.map((item, index) => (
					<Draggable>
						<ImagWrapper
							onClick={() =>
								dispatch({ type: CREATE_WINDOW_BOX, payload: item })
							}>
							<Image src={item.icon} alt={item.name} />
						</ImagWrapper>
					</Draggable>
				))}
			</IconsHolderWrapper>

			{/* <DragDropContext onDragEnd={handleDragEnd}>
				<Droppable droppableId='test'>
					{(provided) => (
						<IconsHolderWrapper
							{...provided.droppableProps}
							ref={provided.innerRef}>
							{sortedIcons.map((item, index) => (
								<Draggable>
									<Dragable key={item.id} draggableId={item.id} index={index}>
										{(provided) => (
											<ImagWrapper
												onClick={() =>
													dispatch({ type: CREATE_WINDOW_BOX, payload: item })
												}>
												<Image
													{...provided.draggableProps}
													ref={provided.innerRef}
													{...provided.dragHandleProps}
													src={item.icon}
													alt={item.name}
												/>
											</ImagWrapper>
										)}
									</Dragable>
								</Draggable>
							))}
							{provided.placeholder}
						</IconsHolderWrapper>
					)}
				</Droppable>
			</DragDropContext> */}

			{state.activeWindows.map((item) => (
				<Window
					key={item.id}
					id={item.id}
					windowForIcon={item.icon}
					windowForName={item.name}
				/>
			))}
		</>
	);
};

export default IconsHolder;
