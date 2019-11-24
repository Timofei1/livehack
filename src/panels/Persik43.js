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
import Button from '@vkontakte/vkui/dist/components/Button/Button';

import persik from '../img/persik.png';
import './Persik.css';

const osName = platform();

const Persik43 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Разработчики
		</PanelHeader>
		<Group title="">

		<Div>
		<h align="left"><Button size="xl" level="3" before=
		<img src="https://sun9-40.userapi.com/c856524/v856524554/5ca85/9QIJPLEnCdc.jpg" data-post-id="288498260_706" data-post-click-type="post_owner_img" width="50" height="50" class="post_img" /> > Тимофей Рулонов 
		<div class="Cell__description">Основатель</div>
		</Button></h>
		</Div>
        
		
        
        <Div>
        <Button size="xl" level="3" before=
		<img src="https://sun9-5.userapi.com/c857528/v857528583/fbdd9/ANBlOxOVvNE.jpg" data-post-id="288498260_706" data-post-click-type="post_owner_img" width="50" height="50" class="post_img" /> > Кириллл Малыгин 
		<div class="Cell__description">Гл. модератор</div>
		</Button>
        </Div>
        </Group>
        
        <Group>
        <center>
        
        
        
        <br/>
        <h>Вы можете помочь приложению </h><a href="https://vk.com/topic-189105798_40593021">предложив свои лайфхаки</a>
        <br/>
        <br/>
        </center>
        </Group>
    </Panel>
);

Persik43.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik43;
