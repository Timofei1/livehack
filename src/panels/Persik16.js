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

const Persik16 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Перед контрольной
		</PanelHeader>
		<Group title='Описание лайфхака:'>
		<Div>
		<h>Как выполнять домашнее задание перед контрольной</h>
		</Div>
		</Group>
		<Group title='Примечания'>
		<Div>
		<h>Примечания отсутствуют</h>
		</Div>
		</Group>
		<Group title='Ход выполнения'>
		<Div>
		<h>Сейчас обращаюсь к любителям ГДЗ: перед контрольной лучше сделать домашку самостоятельно, чтоб лучше усвоить материал. Вернемся к теме, учить определения лучше перед сном, т.к. это будет ваше последнее запоминание в мозге, и когда вы проснетесь сразу вспомните.</h>
		
		</Div>
		</Group>
    </Panel>
);

Persik16.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik16;
