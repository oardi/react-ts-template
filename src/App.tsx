import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { withTranslation, useTranslation } from "react-i18next";
import { Menu } from './components';
import { Home, About, FormsSimple, FormsService, FormsGeneric } from './pages';

export const App = () => {
	const [name] = useState('React Starter Template');

	const { t, i18n } = useTranslation();

	const changeLanguage = lng => {
		i18n.changeLanguage(lng);
	};

	return (
		<div>
			<Menu title={name} />

			<div className="p-2">
				<div>
					<h1>{t("welcomeMsg")}</h1>
					<button className="btn btn-secondary" onClick={() => changeLanguage("de")}>de</button>
					<button className="btn btn-secondary" onClick={() => changeLanguage("en")}>en</button>
				</div>

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/forms-simple">
						<FormsSimple />
					</Route>
					<Route exact path="/forms-service">
						<FormsService />
					</Route>
					<Route exact path="/forms-generic">
						<FormsGeneric />
					</Route>

					<Route render={() => <div>404 - Missing!</div>} />
				</Switch>
			</div>
		</div>
	);
};

export default withTranslation()(App);
