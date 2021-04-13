import { useState, useContext } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

import { AppContext } from "../context";
import { CREATE_WINDOW_BOX } from "../actions";
import Window from "./window";

const IconsHolderWrapper = styled.div`
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
`;

const IconsHolder = () => {
	const { state, dispatch } = useContext(AppContext);
	const [sortedIcons, setSortedIcons] = useState(state.items);
	console.log(state);
	return (
		<>
			<IconsHolderWrapper>
				{sortedIcons.map((item, index) => (
					<Draggable key={item.id}>
						<ImagWrapper
							onDoubleClick={() =>
								dispatch({ type: CREATE_WINDOW_BOX, payload: item })
							}>
							<Image src={item.icon} alt={item.name} />
						</ImagWrapper>
					</Draggable>
				))}
			</IconsHolderWrapper>

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
