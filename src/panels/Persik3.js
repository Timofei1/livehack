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

const Persik3 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="persik26">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Мелкие советы 2
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
		<h>1. Следует избегать любых жидкостей за час до того, как вы собираетесь ложиться спать. Это касается не только воды, но и чая и соков. Кофе стоит пить не менее чем за 6-7 часов до сна, а вот алкоголя перед сном стоит вообще избегать, если хотите быстро заснуть и выспаться.<br/></h>
		<h><br/>2. Еще один секрет хорошего сна – вечерние прогулки. Даже если на улице не очень тепло и вам лень собираться, преодолейте себя. Вы удивитесь, насколько лучше вы будете спать ночью, если пройдетесь полчасика перед сном.<br/></h>
	    <h><br/>3. Помимо ванны, очень успокаивающе на организм влияет музыка. Классика, фолк или джаз – у каждого свои дарящие гармонию мелодии. Найдите ту музыку, которая приносит вам умиротворение, и слушайте ее перед сном.<br/></h>
	    
		</Div>
		</Group>
    </Panel>
);

Persik3.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik3;
