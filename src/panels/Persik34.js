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

const Persik34 = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="persik26">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Мелкие советы 3
        </PanelHeader>
        <Group title='Описание лайфхака:'>
            <Div>
                <h>Советы.</h>
            </Div>
        </Group>
        <Group title='Примечание:'>
            <Div>
                <h>Примечания отсутствуют</h>
            </Div>
        </Group>
        <Group title='Ход выполнения:'>
            <Div>
                <h>
                    <h><br/>1. 16-24ºС – такой должна быть температура в спальне. В душном и слишком жарком помещении
                        человек часто просыпается и хуже засыпает.<br/></h>
                    <h><br/>2. Спорт улучшает качество сна, однако заканчивать тренировку следует минимум за 2 часа до
                        отбоя. Ведь физические упражнения насыщают организм не только кислородом, но и адреналином, а он
                        плохое «снотворное».<br/></h>
                    <h><br/>3. Перед сном лучше провести, так называемую, мышечную релаксацию. Она заключается в том,
                        чтобы поочередно напрягать и расслаблять различные группы мышц. Напрягли мышцы ног, досчитали до
                        пяти, расслабились; напрягли пресс, один-два-три-четыре-пять, выдох и т.д. Эту процедуру можно
                        проделывать прямо лежа в кровати. Кроме того, подготовить тело ко сну помогает медитация.<br/>
                    </h>
                </h>
            </Div>
        </Group>
    </Panel>
);

Persik34.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Persik34;
