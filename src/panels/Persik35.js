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

const Persik35 = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="persik26">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Мелкие советы 4
        </PanelHeader>
        <Group title='Описание лайфхака:'>
            <Div>
                <h>Советы.</h>
            </Div>
        </Group>
        <Group title='Примечание:'>
            <Div>
                <h>Примечания отсутствуют.</h>
            </Div>
        </Group>
        <Group title='Ход выполнения:'>
            <Div>
                <h>
                    <h><br/>1. Как вы уже знаете, снаружи должно быть прохладно, а внутри, напротив, – тепло. Выпейте
                        перед сном стакан теплого молока, какао или чая, и вам тот час же захочется спать.<br/></h>
                    <h><br/>2. Спать до обеда на выходных – это быстрый способ нарушить расписание сна на неделю. Вы
                        можете себе позволить понежиться в постели, но не более чем часом больше от вашего привычного
                        подъема. Если вы работаете эту привычку, то уже через неделю-две у вас исчезнут проблемы с сном.
                    </h>
                </h>
            </Div>
        </Group>
    </Panel>
);

Persik35.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Persik35;
