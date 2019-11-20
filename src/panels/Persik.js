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

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="persik26">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Два часа и выспаться
		</PanelHeader>
		<Group title='Описание лайфхака:'>
		<Div>
		<h>После выполнения данного лайфхака, вы уснете и проснетесь через 2 часа уже в бодром состоянии.</h>
		</Div>
		</Group>
		<Group title='Примечание'>
		<Div>
		<h>Лайфхак стоит выполнять в сонном состоянии</h>
		</Div>
		</Group>
		<Group title='Ход выполнения'>
		<Div>
		<h>Выпить чашку кофе перед тем как лечь спать. Вы проснетесь через 2-3 часа уже в бодром состоянии.</h>

		</Div>
		</Group>
    </Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
