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

const Persik27 = ({ id, go, fetchedUser }) => (
	
		<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Лайфхаки для телефона
		</PanelHeader>
		
		<Group title="Выбор лайфхака">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik4">
					Заблокировать устройство
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik5">
					Прослушка
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik6">
					Стилус в домашних условиях
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik7">
					Действия, при попадании влаги
				</Button>
			<br/>   
				<Button size="xl" level="2" onClick={go} data-to="persik8">
					Заляпанный экран
				</Button>
				<br/>   
				<Button size="xl" level="2" onClick={go} data-to="persik8">
					Пусто
				</Button>
				<br/>   
				<Button size="xl" level="2" onClick={go} data-to="persik8">
					Пусто
				</Button>
				<br/>   
				<Button size="xl" level="2" onClick={go} data-to="persik8">
					Пусто
				</Button>
				<br/>   
				<Button size="xl" level="2" onClick={go} data-to="persik8">
					Пусто
				</Button>
				<br/>   
				<Button size="xl" level="2" onClick={go} data-to="persik8">
					Пусто
				</Button>
				<br/>   
				<Button size="xl" level="2" onClick={go} data-to="persik8">
					Пусто
				</Button>
				<br/>   
				<Button size="xl" level="2" onClick={go} data-to="persik8">
					Пусто
				</Button>
				

			</Div>
		
				


		</Group>

	</Panel>
	
);

Persik27.propTypes = {
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

export default Persik27;