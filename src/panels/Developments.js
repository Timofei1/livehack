import React from 'react';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import PanelEnum from "../Enums/PanelEnum";
import {connect} from "react-redux";

const osName = platform();

const Developments = props => (
	<Panel id={props.id}>
		<PanelHeader
			left = {
				<HeaderButton onClick={props.go} data-to={PanelEnum.Home}>
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</HeaderButton>
			}>
			Разработчики
		</PanelHeader>
		<Group title="">
			<Div>
				<a href="https://vk.com/rulon4ik_official">
					<h align="left">
						<Button size="xl" level="3" before={
							<img src="https://sun9-38.userapi.com/c857528/v857528209/100a1b/DzjzNpcJ2wg.jpg"
								 data-post-id="288498260_706"
								 data-post-click-type="post_owner_img"
								 width="50"
								 height="50"
								 className="post_img"/>
						}>
							Тимофей Рулонов
							<div className="Cell__description">
							Основатель
							</div>
						</Button>
					</h>
				</a>
			</Div>
		<Div>
			<a href="https://vk.com/vladimir_vladimirowich_putin">
				<Button size="xl" level="3" before={
					<img
						src="https://sun9-5.userapi.com/c857528/v857528583/fbdd9/ANBlOxOVvNE.jpg"
						data-post-id="288498260_706"
						data-post-click-type="post_owner_img"
						width="50"
						height="50"
						className="post_img"/>
				}>
					Кириллл Малыгин
					<div className="Cell__description">Гл. модератор</div>
				</Button>
		</a>
	</Div>
	</Group>
        <Group>
			<center>
				<br/>
				<h>Вы можете помочь приложению </h>
				<a href="https://vk.com/topic-189105798_40593021">предложив свои лайфхаки</a>
				<br/>
				<br/>
			</center>
        </Group>
    </Panel>
);
function mapStateToProps(state) {
	return {
		go: state.app.go
	}
}
export default connect(mapStateToProps)(Developments);
