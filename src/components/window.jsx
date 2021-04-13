import { useContext, useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

import { AppContext } from "../context";

import { CLOSE_WINDOW_BOX, MINIMIZE_WINDOW_BOX } from "../actions";

import { icons } from "../assets";

const WindowWrapper = styled.div`
	width: ${(props) => (props.isExpanded === true ? "100vw" : "32rem")};
	min-height: ${(props) => (props.isExpanded === true ? "95vh" : "47rem")};
	font-size: 3rem;
	position: absolute;
	top: ${(props) => (props.isExpanded === true ? "0" : "10rem")};
	left: ${(props) => (props.isExpanded === true ? "0" : "20rem")};
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem;
	background-color: #050071;
	color: #ffffff;
`;

const Body = styled.div`
	background-color: #b0b2b1;
	padding: 2rem;
	height: ${(props) => props.isExpanded === true && "87.45vh"};
`;

const Image = styled.img`
	width: 1.5rem;
`;

const List = styled.ul`
	display: flex;
	list-style-type: none;
	align-items: center;
	width: 100%;
`;

const ListItem = styled.li`
	font-size: 2rem;
`;

const ListButton = styled.button`
	margin-left: 1rem;
`;

const Window = ({ windowForName, windowForIcon, id }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const { dispatch } = useContext(AppContext);
	return (
		<Draggable>
			<WindowWrapper isExpanded={isExpanded}>
				<Header>
					<List style={{ display: "flex" }}>
						<ListItem style={{ marginRight: "auto", display: "flex" }}>
							<Image src={windowForIcon} alt={windowForName} />
							<span style={{ display: "inline-block", marginLeft: "1rem" }}>
								{windowForName}
							</span>
						</ListItem>
						<ListButton
							onClick={() =>
								dispatch({ type: MINIMIZE_WINDOW_BOX, payload: id })
							}>
							<ListItem>
								<Image src={icons.minimize} alt='' />
							</ListItem>
						</ListButton>
						<ListButton onClick={() => setIsExpanded((prev) => !prev)}>
							<ListItem>
								<Image src={icons.expand} alt='' />
							</ListItem>
						</ListButton>
						<ListButton
							onClick={() => dispatch({ type: CLOSE_WINDOW_BOX, payload: id })}>
							<ListItem>
								<Image src={icons.close} alt='' />
							</ListItem>
						</ListButton>
					</List>
				</Header>
				<Body isExpanded={isExpanded}>Demo Body</Body>
			</WindowWrapper>
		</Draggable>
	);
};

export default Window;
