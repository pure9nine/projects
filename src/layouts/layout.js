	import React, { Component } from 'react';
	import PropTypes from 'prop-types';
	import Helmet from 'react-helmet';
	import { StaticQuery, graphql } from 'gatsby';

	import HeaderContainer from '../header/HeaderContainer';

	import '../../static/css/normalize.css';
	import '../../static/scss/site.scss';

	const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
					{ name: 'description', content: 'Sample' },
					{ name: 'keywords', content: 'sample, something' },
				]}>
					<html lang="en" />
				</Helmet>
				<div className="app">
					<HeaderContainer />
					{children}
				</div>
			</>
		)}
	/>
	)

	Layout.propTypes = {
		children: PropTypes.node.isRequired,
	}

	export default Layout
