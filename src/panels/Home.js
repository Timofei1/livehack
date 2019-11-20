import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import url from 'url';

import persik from '../img/persik.png';
import './Persik.css';



const Home = ({ id, go, fetchedUser }) => (
  
	<Panel id={id}>
	
		<PanelHeader>Лайфхакер</PanelHeader>
        <body bgcolor="#FFFFFF">
       <Group title="Выбор категории">
			<Div>
			   
				<Button size="xl" level="2" onClick={go} data-to="persik26">
					Лайфхаки для сна
				</Button>
				
			<br/>
			
				<Button size="xl" level="2" onClick={go} data-to="persik27">
					Лайфхаки для телефона
				</Button>
			<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik28">
					Лайфхаки в интернете
				</Button>
			<br/>   
				<Button size="xl" level="2" onClick={go} data-to="persik29">
					Лайфхаки для домашки
				</Button>
			<br/>
			     <Button size="xl" level="2" onClick={go} data-to="persik30">
					Бесплатные стикеры
				</Button>
			</Div>
          </Group>
        </body>
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

