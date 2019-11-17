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

const Persik5 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Прослушка
		</PanelHeader>
		<Group title='Описание лайфхака:'>
		<Div>
		<h>Очень простой и доступный способ установить прослушку на смартфон.</h>
		</Div>
		</Group>
		<Group title='Примечание'>
		<Div>
		<h>Смартфон версии андроид 4.0.0 и выше</h>
		</Div>
		</Group>
		<Group title='Ход выполнения'>
		<Div>
		<h>Включи на телефоне функцию автоматического принятия звонка и оставь его там, где это необходимо. В нужное время просто нажми на вызов, и твоя разведка в действии! Речь не идет о серьезных операциях, но такие шпионские штучки вполне могут заменить радионяню.</h>
		
		</Div>
		</Group>
    </Panel>
);

Persik5.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik5;
