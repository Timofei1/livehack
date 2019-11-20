import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Persik1 from './panels/Persik1';
import Persik2 from './panels/Persik2';
import Persik3 from './panels/Persik3';
import Persik4 from './panels/Persik4';
import Persik5 from './panels/Persik5';
import Persik6 from './panels/Persik6';
import Persik7 from './panels/Persik7';
import Persik8 from './panels/Persik8';
import Persik9 from './panels/Persik9';
import Persik10 from './panels/Persik10';
import Persik11 from './panels/Persik11';
import Persik12 from './panels/Persik12';
import Persik13 from './panels/Persik13';
import Persik14 from './panels/Persik14';
import Persik15 from './panels/Persik15';
import Persik16 from './panels/Persik16';
import Persik17 from './panels/Persik17';
import Persik18 from './panels/Persik18';
import Persik19 from './panels/Persik19';
import Persik20 from './panels/Persik20';
import Persik21 from './panels/Persik21';
import Persik22 from './panels/Persik22';
import Persik23 from './panels/Persik23';
import Persik24 from './panels/Persik24';
import Persik25 from './panels/Persik25';
import Persik26 from './panels/Persik26';
import Persik27 from './panels/Persik27';
import Persik28 from './panels/Persik28';
import Persik29 from './panels/Persik29';
import Persik30 from './panels/Persik30';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
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
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
			<Persik1 id='persik1' go={go} />
			<Persik2 id='persik2' go={go} />
			<Persik3 id='persik3' go={go} />
			<Persik4 id='persik4' go={go} />
			<Persik5 id='persik5' go={go} />
			<Persik6 id='persik6' go={go} />
			<Persik7 id='persik7' go={go} />
			<Persik8 id='persik8' go={go} />
			<Persik9 id='persik9' go={go} />
			<Persik10 id='persik10' go={go} />
			<Persik11 id='persik11' go={go} />
			<Persik12 id='persik12' go={go} />
			<Persik13 id='persik13' go={go} />
			<Persik14 id='persik14' go={go} />
			<Persik15 id='persik15' go={go} />
			<Persik16 id='persik16' go={go} />
			<Persik17 id='persik17' go={go} />
			<Persik18 id='persik18' go={go} />
			<Persik19 id='persik19' go={go} />
			<Persik20 id='persik20' go={go} />
			<Persik21 id='persik21' go={go} />
			<Persik22 id='persik22' go={go} />
			<Persik23 id='persik23' go={go} />
			<Persik24 id='persik24' go={go} />
			<Persik25 id='persik25' go={go} />
			<Persik26 id='persik26' go={go} />
			<Persik27 id='persik27' go={go} />
			<Persik28 id='persik28' go={go} />
			<Persik29 id='persik29' go={go} />
			<Persik30 id='persik30' go={go} />

		</View>
	);
}

export default App;

