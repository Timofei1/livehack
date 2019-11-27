import React from 'react';
import {Panel, PanelHeader, HeaderButton, Group, Div, IOS, platform} from "@vkontakte/vkui";
// @ts-ignore
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
// @ts-ignore
import Icon24Back from '@vkontakte/icons/dist/24/back';
import LiveHackType from "../../../Types/LiveHackType";

const osName = platform();

type MyProps = {
    liveHack: LiveHackType;
    go: any;
    id: string;
}
 function LiveHack(props: MyProps) {
    console.log("LiveHack",props);
     return (
         <Panel id={props.liveHack.id}>
             <PanelHeader
                 left={<HeaderButton onClick={props.go} data-to={props.liveHack.id}>
                     {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                 </HeaderButton>}
             >
                 {props.liveHack.title}
             </PanelHeader>
             <Group title='Описание лайфхака:'>
                 <Div className="unselectable">
                     {props.liveHack.title}
                 </Div>
             </Group>
             <Group title='Примечание'>
                 <Div className="unselectable">
                     {props.liveHack.description}
                 </Div>
             </Group>
             <Group title='Ход выполнения'>
                 <Div className="unselectable">
                     {props.liveHack.progress}
                 </Div>
             </Group>
             {props.liveHack.commentsLink &&
             <Group>
                 <Div className="unselectable center">
                         <a href={props.liveHack.commentsLink}>Открыть комментарии</a>
                 </Div>
             </Group>
             }
         </Panel>
     );
 }

export default LiveHack;
