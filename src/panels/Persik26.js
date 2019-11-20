import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import { platform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';

const osName = platform();

const Persik26 = ({ id, go, fetchedUser }) => (
	
		<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Лайфхаки для сна
		</PanelHeader>
		<body bgcolor="#FFFFFF">
		<Group title="Выбор лайфхака">
			<Div>
			    <Button size="xl" level="2" onClick={go} data-to="persik1">
					Мелкие советы 1
				</Button>
			<br/>
			    <Button size="xl" level="2" onClick={go} data-to="persik3">
					Мелкие советы 2
				</Button>
			<br/>
			    <Button size="xl" level="2" onClick={go} data-to="persik17">
					Мелкие советы 3
				</Button>
			<br/>
			    <Button size="xl" level="2" onClick={go} data-to="persik18">
					Мелкие советы 4
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik2">
					Телефон в специальном режиме
				</Button>
			<br/>   
			    <Button size="xl" level="2" onClick={go} data-to="persik">
					Два часа и выспаться
				</Button>
			<br/>   
			    <Button size="xl" level="2" onClick={go} data-to="persik19">
					Пусто
				</Button>
			<br/>   
			    <Button size="xl" level="2" onClick={go} data-to="persik20">
					Пусто
				</Button>
			<br/>   
			    <Button size="xl" level="2" onClick={go} data-to="persik21">
					Пусто
				</Button>
			<br/>   
			    <Button size="xl" level="2" onClick={go} data-to="persik22">
					Пусто
				</Button>
			<br/>   
			    <Button size="xl" level="2" onClick={go} data-to="persik23">
					Пусто
				</Button>
			</Div>
		
		
				


		</Group>
       </body>
	</Panel>
	
);

Persik26.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
}

export default Persik26;