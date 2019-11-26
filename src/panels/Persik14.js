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

const Persik14 = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="persik29">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Как быстро выучить стих
        </PanelHeader>
        <Group title='Описание лайфхака:'>
            <Div>
                <h>Тренируем память: как быстро выучить стихотворение</h>
            </Div>
        </Group>
        <Group title='Примечания'>
            <Div>
                <h>Примечания отсутствуют</h>
            </Div>
        </Group>
        <Group title='Ход выполнения'>
            <Div>
                <h>1. Прочитайте стихотворение несколько раз и попробуйте записать то, что запомнили. Так вам сразу
                    станет понятно, в каких местах у вас возникают трудности и что нужно перечитать ещё раз. Кроме того,
                    работа руками подключает двигательную память.<br/></h>
                <h><br/>2. Пение помогает запоминать большие стихи. Попробуйте положить стихотворение на мелодию,
                    которая вам нравится. Или проверьте, не сделал ли это кто-то уже до вас.<br/></h>
                <h><br/>3. Делайте перерывы и повторите стихотворение перед сном. Это поможет вам расслабиться и
                    разложить новую информацию по полочкам.<br/></h>
                <h><br/>4. Попросите помочь другого человека. Прочитайте ему выученное стихотворение. Можно
                    воспользоваться методом эха: человек говорит вам строку, вы повторяете, а затем пробуете
                    воспроизвести весь отрывок. Или он говорит первую строку — вы вторую, он третью — вы четвёртую. А
                    потом наоборот.
                </h>
            </Div>
        </Group>
    </Panel>
);

Persik14.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Persik14;
