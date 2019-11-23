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
import Icon28Game from '@vkontakte/icons/dist/28/game';

import persik from '../img/persik.png';
import './Persik.css';



const Home = ({ id, go, fetchedUser }) => (
  
	<Panel id={id}>
	
		<PanelHeader>Лайфхакер</PanelHeader>
        
        <Group>
        <br/>
        <center><h><i>Как изпользовать? Выберите нужную вам категорию, а в категории название нужного вам лайфхака.</i></h>
        </center>
        <br/>
        </Group>
       <Group title="Выбор категории">
			<Div>
			   
				<Button size="xl" level="2" onClick={go} data-to="persik26">
				<img src="http://s1.iconbird.com/ico/2014/1/633/w256h2561390856895alarmclock256.png" width="15" height="15"></img>	Лайфхаки для сна
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
            <br/>
            <br/>
            <center><h>Так же вы можите </h><a href="https://vk.com/vkpay#action=transfer-to-user&user_id=288498260">поддержать проект.</a></center>
            <br/>
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

