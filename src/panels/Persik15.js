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

const Persik15 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Последовательность выполнения
		</PanelHeader>
		<Group title='Описание лайфхака:'>
		<Div>
		<h>Научим, как правильно выполнять домашнее задание.</h>
		</Div>
		</Group>
		<Group title='Примечания'>
		<Div>
		<h>Примечания отсутствуют.</h>
		</Div>
		</Group>
		<Group title='Ход выполнения'>
		<Div>
		<h>Приступить к выполнению домашнего задания лучше сразу после прихода домой, т.к. мозг уже привык к нагрузке. Стоит начать с самых сложных предметов(алгебра, геометрия, физика, русский язык), и постепенно перейти на легкие, чтоб не учить например, алгебру в час ночи(согласитесь не приятно). После каждого сделанного урока необходимо делать перерывы по 5 минут.</h>
		</Div>
		</Group>
    </Panel>
);

Persik15.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik15;
