import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "./styles/Header.module.css";

const MainNavigation = () => {
	return (
		<>
			<Header />
			<div className={styles.main}>
				<Outlet />
			</div>
		</>
	);
};

export default MainNavigation;
