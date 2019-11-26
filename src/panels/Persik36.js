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

const Persik36 = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="persik30">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Украина ВКонтакте
        </PanelHeader>
        <Group title='Описание лайфхака:'>
            <Div>
                <h>Гайд по получению стикеров "Украина ВКонтакте"</h>
            </Div>
        </Group>
        <Group title='Примечание:'>
            <Div>
                <h>Примечания отсутствуют</h>
            </Div>
        </Group>
        <Group title='Ход выполнения:'>
            <Div>
                <h>Чтобы получить стикеры, необходимо указать Украину в качестве страны проживания, место проживания —
                    любой город в стране, или выбрать украинскую версию интерфейса. После чего перейти в магазин
                    стикеров - бесплатные - получить набор. После выполненных действий можно изменять все обратно,
                    стикеры останутся.
                </h>
            </Div>
        </Group>

    </Panel>
);

Persik36.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Persik36;
