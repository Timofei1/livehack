import React from 'react';
import PropTypes from 'prop-types';
import {platform, IOS} from '@vkontakte/vkui';
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

const Persik10 = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="persik28">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Пусто
        </PanelHeader>
        <Group title='Описание лайфхака:'>
            <Div>
                <h>Как удобно сидеть вк с ноутбука/пк</h>
            </Div>
        </Group>
        <Group title='Примечание:'>
            <Div>
                <h>Windows, MacOS, Linux</h>
            </Div>
        </Group>
        <Group title='Ход выполнения:'>
            <Div>
                <h>Любите посидеть вк с ноутбука или компьютера? Этот лайфхак для вас! Не стоит каждый раз открывать
                    браузер, ведь есть классное приложение под названием Vk Massenger! В приложении можно делать все,
                    что есть в десктопной версии, а главное оно бесплатное!!! Переходите по
                </h>
                <a href="https://vk.cc/messenger">ссылке и скачивайте </a>. А так же подписывайтесь на их <a
                href="https://vk.com/desktop_app">сообщество</a>
            </Div>
        </Group>
    </Panel>
);

Persik10.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Persik10;
