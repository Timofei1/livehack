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

const Persik8 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="persik27">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Заляпанный экран
		</PanelHeader>
		<Group title='Описание лайфхака:'>
		<Div>
		<h>Многие жалуются на то, что экран постоянно заляпан следами от пальцев, что существенно сказывается на качестве изображений.</h>
		</Div>
		</Group>
		<Group title='Примечания'>
		<Div>
		<h>Примечания отсутствуют</h>
		</Div>
		</Group>
		<Group title='Ход выполнения'>
		<Div>
		<h>Справиться с этой проблемой очень просто: возьмите ватный диск, смочите его в перекиси и протрите экран. После этого вторым диском удалите остатки жидкости. Перекись не только сделает экран чистым, но и не даст больше ему заляпаться.</h>
		
		</Div>
		</Group>
    </Panel>
);

Persik8.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik8;
