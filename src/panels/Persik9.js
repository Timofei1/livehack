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

const Persik9 = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="persik28">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            VPN
        </PanelHeader>
        <Group title='Описание лайфхака:'>
            <Div>
                <h>Лайфхак поможет попать на заблокированный в стране ресурс или скачать приложение недоступное жителяем
                    вашей страны. Так же VPN может пригодится для скрытия вашего местоположения.
                </h>
            </Div>
        </Group>
        <Group title='Примечание:'>
            <Div>
                <h>Android, IOS, Linux(И ему подобные), Windows</h>
            </Div>
        </Group>
        <Group title='Ход выполнения:'>
            <Div>
                <h>Скачать любой впн, в нашем случае это бесплатный впн Windscribe(Windows, Linux) или Thunder
                    VPN(Android, IOS) и выбрать страну и город под которыми мы будем числиться в сети интернет.
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

Persik9.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Persik9;
