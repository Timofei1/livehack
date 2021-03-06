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

import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Icon28Messages from '@vkontakte/icons/dist/28/messages';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28More from '@vkontakte/icons/dist/28/more';
// import Tabbar from "@vkontakte/vkui/src/components/Tabbar/Tabbar";
// import Epic from "@vkontakte/vkui/src/components/Epic/Epic";
// import TabbarItem from "@vkontakte/vkui/src/components/TabbarItem/TabbarItem";
const App = (props) => {
	console.log("App",props);
	const [activePanel, setActivePanel] = useState(PanelEnum.Home);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);
	// const [activeStory, setActiveStory] = useState("more");
	const go = (e) => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	// const onStoryChange = (e) => {
	// 		setActiveStory(e.currentTarget.dataset.story);
	// };
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
				<ListLiveHack id={PanelEnum.ListLiveHacks} go={props.go}  currentCatalog={props.currentCatalog}/>
				<LiveHack id={PanelEnum.LiveHack} go={props.go}  currentLiveHack={props.currentLiveHack}/>
				<Developers id={PanelEnum.Developers}/>
			</View>
	);
};
function mapStateToProps(state) {
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

// {/*<Epic activeStory={activeStory} tabbar={*/}
// {/*	<Tabbar>*/}
// {/*		<TabbarItem*/}
// {/*			onClick={onStoryChange}*/}
// {/*			selected={activeStory === 'feed'}*/}
// {/*			data-story="feed"*/}
// {/*			text="Новости"*/}
// {/*		><Icon28Newsfeed /></TabbarItem>*/}
// {/*		<TabbarItem*/}
// {/*			onClick={onStoryChange}*/}
// {/*			selected={activeStory === 'discover'}*/}
// {/*			data-story="discover"*/}
// {/*			text="Поиск"*/}
// {/*		><Icon28Search /></TabbarItem>*/}
// {/*		<TabbarItem*/}
// {/*			onClick={onStoryChange}*/}
// {/*			selected={activeStory === 'messages'}*/}
// {/*			data-story="messages"*/}
// {/*			label="12"*/}
// {/*			text="Сообщения"*/}
// {/*		><Icon28Messages /></TabbarItem>*/}
// {/*		<TabbarItem*/}
// {/*			onClick={onStoryChange}*/}
// {/*			selected={activeStory === 'notifications'}*/}
// {/*			data-story="notifications"*/}
// {/*			text="Уведомлен."*/}
// {/*		><Icon28Notifications /></TabbarItem>*/}
// {/*		<TabbarItem*/}
// {/*			onClick={onStoryChange}*/}
// {/*			selected={activeStory === 'more'}*/}
// {/*			data-story="more"*/}
// {/*			text="Ещё"*/}
// {/*		><Icon28More /></TabbarItem>*/}
// {/*	</Tabbar>*/}
// {/*}>*/}

