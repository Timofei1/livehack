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

const Persik4 = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="persik27">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Заблокировать устройство
        </PanelHeader>
        <Group title='Описание лайфхака:'>
            <Div>
                <h>Согласись, без своих функций телефон превращается в кучку стекла, металла и пластика. Крайне важно не
                    растеряться и принять необходимую меру: заблокировать свой телефон.
                </h>
            </Div>
        </Group>
        <Group title='Примечание'>
            <Div>
                <h>Использовать ТОЛЬКО во время потери/кражи</h>
            </Div>
        </Group>
        <Group title='Ход выполнения'>
            <Div>
                <h> Это можно сделать, связавшись с оператором с другого мобильного устройства. Нужно только
                    продиктовать серийный код своего телефона. Не знаешь код? Поспеши его записать, набрав простую
                    комбинацию: *#06#. Если кража уже произошла, код все еще можно узнать, если у тебя сохранилась
                    упаковка! Для этого отыщи под штрих-кодом обозначение IMEI — там и будет указан номер.
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

Persik4.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Persik4;
