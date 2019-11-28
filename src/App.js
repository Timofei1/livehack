import React, { useState, useEffect } from 'react';
import vkConnect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import ListLiveHack from "./panels/components/ListLiveHack/ListLiveHack";
import LiveHack from "./panels/components/Livehack/LiveHack";
import Developers from "./panels/Developments";
import PanelEnum from "./Enums/PanelEnum";
import {setCurrentLiveHack, setGo} from "./store/actions/app";
import {connect} from "react-redux";
const App = (props) => {
	console.log("App",props);
	const [activePanel, setActivePanel] = useState(PanelEnum.Home);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);
	const go = (e) => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	useEffect(() => {
		props.setGo(go);
		vkConnect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await vkConnect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData().then();
	}, []);



	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id={PanelEnum.Home} fetchedUser={fetchedUser} />
			<ListLiveHack go={props.go} id={PanelEnum.ListLiveHacks} currentCatalog={props.currentCatalog}/>
			<LiveHack go={props.go} id={PanelEnum.LiveHack} currentLiveHack={props.currentLiveHack}/>
			<Developers id={PanelEnum.Developers}/>
		</View>
	);
};
function mapStateToProps(state) {
	console.log("mapStateToProps",state);
	return {
		currentLiveHack: state.app.liveHack,
		currentCatalog: state.app.catalog,
		go: state.app.go
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setGo: (go) => dispatch(setGo(go))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

