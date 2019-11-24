import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Group from '@vkontakte/vkui/dist/components/Group/Group';

import persik from '../img/persik.png';
import './Persik.css';

const osName = platform();

const Persik1 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="persik26">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Мелкие советы 1
		</PanelHeader>
		<Group title='Описание лайфхака:'>
		<Div>
		<h>Советы.</h>
		</Div>
		</Group>
		<Group title='Примечания'>
		<Div>
		<h>Примечания отсутствуют</h>
		</Div>
		</Group>
		<Group title='Ход выполнения'>
		<Div>
		<h>1. Не можете заснуть? Не ворочайтесь с бока на бок, словно юла. Лучше встаньте с постели и займитесь какой-нибудь спокойной деятельностью. Например, почитайте или послушайте лаунж.<br/> </h>
		<h><br/>2. Многие любят спать вместе с любимым котиком или собачкой. Но, с точки зрения здорового сна, это плохая идея. Можете засыпать в обнимку с Барсиком, но потом его лучше прогнать на свое место.<br/></h>
		<h><br/>3. Короткий послеобеденный сон – очень полезен для здоровья. Но только короткий – не более 30 минут. Если дремать дольше, организм впадет в глубокие стадии сна – будет трудно проснуться и вернуться к делам.<br/></h>
		<h><br/>4. Многие держат будильник на прикроватной тумбочке (а если его роль выполняет телефон, то прямо под подушкой), что на самом деле является ошибкой. Постоянно следить за временем, значит быть на взводе. А стресс, как вы помните, равно плохой сон.<br/></h>
		
	    
		</Div>
		</Group>
    </Panel>
);

Persik1.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik1;
