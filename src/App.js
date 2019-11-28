import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import LiveHacks from "./Data/LiveHacks";
import {ListLiveHack} from "./panels/components/ListLiveHack/ListLiveHack";
import Catalogs from "./Data/Catalogs";
import LiveHack from "./panels/components/Livehack/LiveHack";
import Developers from "./panels/Developments";
import PanelEnum from "./Enums/PanelEnum";
const App = () => {
	const [activePanel, setActivePanel] = useState(PanelEnum.Home);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = (e) => {
		setActivePanel(e.currentTarget.dataset.to);
		
	};


	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id={PanelEnum.Home} fetchedUser={fetchedUser} go={go} />
			<ListLiveHack id={PanelEnum.ListLiveHacks} go={go} catalog={Catalogs[0]}/>
			<LiveHack id={PanelEnum.LiveHack} liveHack={LiveHacks[0]} go={go} />
			<Developers id={PanelEnum.Developers} go={go}/>
		</View>
	);
};


export default App;

