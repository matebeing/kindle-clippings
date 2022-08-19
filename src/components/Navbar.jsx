import styled, { css } from 'styled-components';

const Nav = styled.nav`
	color: #555555;
	padding: 1rem 0 1rem 2rem;
	border-bottom: 1px solid #A5A5A5;
	font-size: 1.5rem;
`;


function Navbar() {
	return (
		<Nav>
			<div>
				<span role="heading"><strong>Kindle</strong> Clippings</span>
			</div>
		</Nav>
	)
}


export default Navbar;