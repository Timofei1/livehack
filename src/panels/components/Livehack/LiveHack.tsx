import React from 'react';
import {Panel, PanelHeader, HeaderButton, Group, Div, IOS, platform} from "@vkontakte/vkui";
// @ts-ignore
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
// @ts-ignore
import Icon24Back from '@vkontakte/icons/dist/24/back';
import LiveHackType from "../../../Types/LiveHackType";
import PanelEnum from "../../../Enums/PanelEnum";

const osName = platform();

type MyProps = {
    currentLiveHack: LiveHackType;
    go: any;
    id: string;
}
 function LiveHack(props: MyProps) {
    console.log("LiveHack",props);
     return (
         <Panel id={PanelEnum.LiveHack}>
             <PanelHeader
                 left={<HeaderButton onClick={props.go} data-to={PanelEnum.ListLiveHacks}>
                     {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                 </HeaderButton>}
             >
                 {props.currentLiveHack.title}
             </PanelHeader>
             <Group title='Описание лайфхака:'>
                 <Div className="unselectable">
                     {props.currentLiveHack.title}
                 </Div>
             </Group>
             <Group title='Примечание'>
                 <Div className="unselectable">
                     {props.currentLiveHack.description}
                 </Div>
             </Group>
             <Group title='Ход выполнения'>
                 <Div className="unselectable">
                     {props.currentLiveHack.progress}
                 </Div>
             </Group>
             { props.currentLiveHack.commentsLink &&
                 <Group>
                     <Div className="unselectable center">
                         <a href={props.currentLiveHack.commentsLink}>Открыть комментарии</a>
                     </Div>
                 </Group>
             }
         </Panel>
     );
 }

// @ts-ignore
export default LiveHack;
