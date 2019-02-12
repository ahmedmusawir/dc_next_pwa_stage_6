import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import { A, H6, Img, Box, Small, Div, Button } from 'components/general';

const MainNavbar = styled(Navbar)`
	.navbar-nav {
		flex-direction: column;
		padding-left: 1.5rem !important;
		padding-right: 1rem;
	}
	.nav-item {
		padding-top: 1.5rem;
		padding-bottom: 0.5rem;
		font-size: 1rem;
		text-align: left;
	}
	.dropdown-item {
		position: relative;
		padding: 1.25rem 1.5rem;
		z-index: 1;
	}
`;
const DCLogo = styled.div`
	padding-top: 4rem;
	padding-bottom: 2.5rem;
`;

export class MainNav extends React.Component {
	render() {
		return (
			<div className="d-none d-lg-block" id="main-navigation">
				<MainNavbar color="" light className="navbar-expand-lg">
					<Nav className="ml-auto" navbar>
						<Link prefetch href="/" passHref>
							<NavbarBrand>
								<DCLogo>
									<Img
										src="/static/images/deepcast-logo.png"
										alt=""
										className=""
									/>
								</DCLogo>
							</NavbarBrand>
						</Link>

						<NavItem>
							<Link prefetch href="/" passHref>
								<NavLink>Home</NavLink>
							</Link>
						</NavItem>

						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Product
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									<Link prefetch href="/product/data-integration" passHref>
										<NavLink>Data Integration</NavLink>
									</Link>
								</DropdownItem>
								<DropdownItem>
									<Link prefetch href="/product/field-evaluation" passHref>
										<NavLink>Field Evaluation</NavLink>
									</Link>
								</DropdownItem>
								<DropdownItem>
									<Link prefetch href="/product/field-development" passHref>
										<NavLink>Field Development</NavLink>
									</Link>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>

						<NavItem>
							<Link prefetch href="/media" passHref>
								<NavLink>Media</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link prefetch href="/about" passHref>
								<NavLink>About</NavLink>
							</Link>
						</NavItem>

						{/* <NavItem>
							<Link prefetch href="/sendgrid" passHref>
								<NavLink>SendGrid</NavLink>
							</Link>
						</NavItem> */}
						{/* <NavItem>
							<Link prefetch href="/test" passHref>
								<NavLink>Test Page</NavLink>
							</Link>
						</NavItem> */}
						{/* <NavItem>
							<Link prefetch href="/solutions" passHref>
								<NavLink>Solutions</NavLink>
							</Link>
						</NavItem> */}
						{/* <NavItem>
							<Link prefetch href="/product" passHref>
								<NavLink>Product</NavLink>
							</Link>
						</NavItem> */}
					</Nav>
				</MainNavbar>

				<Div className="desktop-nav-divider">
					<hr />
				</Div>

				<Box className="nav-contact-box">
					<Div className="lang-links">
						<Link prefetch href="/" passHref>
							<A className="active">EN</A>
						</Link>
						<Link prefetch href="/" passHref>
							<A className="">ES</A>
						</Link>
					</Div>
					<Div className="text">
						<H6 fontWeight="400">
							<Small>CONTACT</Small>
						</H6>
						<H6>
							<Small>*info@deepcast.ai</Small>
							<br />
							<Small>*(832)431-3292</Small>
						</H6>

						<H6 className="address">
							<Small>
								800 Town and Country Blvd #300, <br />
								Houston, TX 77024
							</Small>
						</H6>
					</Div>
					<Div className="buttons">
						<Link prefetch href="/" passHref>
							<Button className="btn active">Request Demo</Button>
						</Link>
						<br />
						<Link prefetch href="/" passHref>
							<Button className="btn">Login</Button>
						</Link>
					</Div>
				</Box>
			</div>
		);
	}
}

export default MainNav;
