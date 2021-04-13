import { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../context";
import { CREATE_WINDOW_BOX } from "../actions";

const BottommenuWrapper = styled.div`
	background-color: lightgrey;
	color: #323232;
	display: flex;
	position: absolute;
	bottom: 5vh;
	left: 0;
	border: 1pox solid inherit;
	box-shadow: 2px 2px 8px #888888;
`;

const Menu = styled.ul`
	display: flex;
	flex-direction: column;
	list-style-type: none;
`;

const ListItem = styled.li`
	display: flex;
	align-items: center;
	padding: 1rem 4rem 1rem 1rem;
	cursor: pointer;
	&:hover {
		background-color: blue;
		color: #ffffff;
	}
`;
const Image = styled.img`
	width: 1.5rem;
`;

const Span = styled.span`
	display: inline-block;
	font-size: 1.5rem;
	margin-left: 0.5rem;
`;

const BottomMenu = () => {
	const { state, dispatch } = useContext(AppContext);
	return (
		<BottommenuWrapper>
			<Menu>
				{state.items.map((item) => (
					<ListItem
						key={item.id}
						onClick={() =>
							dispatch({ type: CREATE_WINDOW_BOX, payload: item })
						}>
						<Image src={item.icon} alt={item.name} />
						<Span>{item.name}</Span>
					</ListItem>
				))}
			</Menu>
		</BottommenuWrapper>
	);
};

export default BottomMenu;
