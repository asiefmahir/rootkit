import { useState, useContext } from "react";
import styled from "styled-components";

import { CREATE_WINDOW_BOX } from "../actions";
import { AppContext } from "../context";
import BottomMenu from "./bottom-menu";

const BottomNavWrapper = styled.div`
	font-size: 3rem;
	height: 5vh;
	background-color: lightgrey;
	display: flex;
	align-items: center;
	positon: relative;
`;

const ButtonWrapper = styled.div`
	positon: relative;
`;
const Button = styled.button`
	margin-left: 2rem;
	padding: 0.5rem 2rem;
	border: 1px solid darkgrey;
	box-shadow: ${(props) =>
		props.active === false
			? "1px 1px 5px #000000"
			: "1px 1px 5px #000000 inset"};
	outline: none;
`;
const ListHolder = styled.ul`
	list-style-type: none;
	display: flex;
`;

const BottomNav = () => {
	const [active, setActive] = useState(false);
	const { state, dispatch } = useContext(AppContext);
	return (
		<BottomNavWrapper>
			<ButtonWrapper>
				<Button active={active} onClick={() => setActive((prev) => !prev)}>
					Start
				</Button>
			</ButtonWrapper>
			{active && <BottomMenu />}
			<ListHolder>
				{state.openWindows.map((item) => (
					<Button
						style={{
							boxShadow: state.activeWindows.includes(item)
								? "1px 1px 5px #000000 inset"
								: "1px 1px 5px #000000",
							marginLeft: "2rem",
						}}
						onClick={() => dispatch({ type: CREATE_WINDOW_BOX, payload: item })}
						key={item.id}>
						{item.name}
					</Button>
				))}
			</ListHolder>
		</BottomNavWrapper>
	);
};
export default BottomNav;
