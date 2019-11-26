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

const Persik2 = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="persik26">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Телефон в специальном режиме
        </PanelHeader>
        <Group title='Описание лайфхака:'>
            <Div>
                <h>Для тех, кто сидит с телефоном перед сном.</h>
            </Div>
        </Group>
        <Group title='Примечания'>
            <Div>
                <h>Примечания отсутствуют</h>
            </Div>
        </Group>
        <Group title='Ход выполнения'>
            <Div>
                <h>Все знают, что не нужно брать телефон в постель из-за синего излучения, которое мешает спать, но все
                    равно берут. Если уж брать телефон, то с включенной темной темой или со специальным "режимом для
                    чтения".
                </h>
            </Div>
        </Group>
        <Group>
            <Div>
                <center>
                <a href="https://vk.com/topic-189105798_40599476">Открыть комментарии</a>
                </center>
            </Div>
        </Group>
    </Panel>
);

Persik2.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Persik2;
