import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Лайфхакер</PanelHeader>
		<Group title="Лайфхаки для сна">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Два часа и выспаться
				</Button>
			<br/>
			
				<Button size="xl" level="2" onClick={go} data-to="persik1">
					Мелкие советы 1
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik2">
					Телефон в специальном режиме
				</Button>
			<br/>   
				<Button size="xl" level="2" onClick={go} data-to="persik3">
					Мелкие советы 2
				</Button>
			</Div>
		</Group>
		<Group title="Лайфхаки для телефона">
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
			</Div>
		</Group>
		<Group title="Лайфхаки в интернете">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik9">
					Пусто
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik10">
					Пусто
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik11">
					Пусто
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik12">
					Пусто
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik13">
					Пусто
				</Button>
			</Div>
		</Group>
		<Group title="Лайфхаки для домашки">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik14">
					Как быстро выучить стих
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik15">
					Последовательность выполнения
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik16">
					Перед контрольной
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik17">
					Пусто
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik18">
					Пусто
				</Button>
				</Div>
				


		</Group>

	</Panel>
);

Home.propTypes = {
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

export default Home;

