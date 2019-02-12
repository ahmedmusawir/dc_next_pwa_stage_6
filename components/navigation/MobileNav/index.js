import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import { H6, A, Img, Box, Div, Small, Button } from 'components/general';

const MainNavbar = styled(Navbar)`
	background: white;
	
	.navbar-collapse {
		height: 100vh;
		width: 100vw;
	}

	.navbar-toggler {
			border: 2px solid dodgerblue;
			background: dodgerblue;
			padding: 0.5rem;
			outline: none;
		}
	}

	.nav-item {
		border-bottom: 1px solid grey;
		padding: 1.5rem;
		font-size: 1rem;
		text-align: center;

		a {
			color: grey !important;
		}
	}

	.dropdown-item {
		padding: 1.25rem 1.5rem;
	}

	.mobile-nav-contact-box {
		.active {
			color: dodgerblue !important;
		}
		
		.lang-links {
			margin-top: 0.5rem;

			a {
				padding-right: 1rem;
			}
		}
		.text {
			margin-top: 1rem;

			.address {
				margin-top: .5rem;
			}
		}
		.buttons {
			margin-top: .5rem;
			.btn {
				margin-right: .5rem;
				background-color: transparent;
				color: #A8A8A8;
				font-weight: 300;
				border-radius: 0;
			}
			.btn.active {
				border: 1px solid dodgerblue;
			}
		}
	}
`;
const DCLogo = styled.div`
	margin-top: 5px;
	img {
		width: 95% !important;
		margin-top: -5px;
	}
`;
export class MobileNav extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<div className="d-block d-lg-none">
				<MainNavbar dark className="fixed-top">
					<NavbarToggler
						aria-label="mobile navigation toggle button"
						onClick={this.toggle}
						className=""
					/>
					<Link prefetch href="/" passHref>
						<NavbarBrand>
							<DCLogo>
								<Img
									src="/static/images/deepcast-logo.png"
									alt=""
									className="img-fluid pull-right"
								/>
							</DCLogo>
						</NavbarBrand>
					</Link>

					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
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
							</NavItem>
							<NavItem>
								<Link prefetch href="/test" passHref>
									<NavLink>Test Page</NavLink>
								</Link>
							</NavItem> */}
						</Nav>
						<Box className="mobile-nav-contact-box">
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
								<Link prefetch href="/" passHref>
									<Button className="btn">Login</Button>
								</Link>
							</Div>
						</Box>
					</Collapse>
				</MainNavbar>
			</div>
		);
	}
}

export default MobileNav;
