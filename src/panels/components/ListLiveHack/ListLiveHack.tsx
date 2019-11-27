import React from 'react';
import LiveHackCatalogEnum from "../../../Enums/LiveHackCatalogEnum";
import LiveHackType from "../../../Types/LiveHackType";
import {IOS, Panel, PanelHeader, platform, HeaderButton, Div, Button, Group} from "@vkontakte/vkui";
// @ts-ignore
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
// @ts-ignore
import Icon24Back from '@vkontakte/icons/dist/24/back';
import ListLiveHackType from "../../../Types/ListLiveHackType";

const osName = platform();


type MyProps = {
    go: any;
    listLiveHack: ListLiveHackType[];
}

function LiveHackButtonRender(go: any, liveHacks: LiveHackType[]) {
    console.log("LiveHackButtonRender",liveHacks);
    return liveHacks.map(liveHack => {
        return (
            <Button size="xl" level="2" onClick={go} data-to={liveHack.id}>
                {liveHack.name}
            </Button>
        );
    });
}

function ListLiveHack(props: MyProps) {
    console.log(props);
    return props.listLiveHack.map(listLiveHack => {
        return (
            <Panel id={listLiveHack.id}>
                <PanelHeader
                    left={<HeaderButton onClick={props.go} data-to="home">
                        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </HeaderButton>}
                >
                    {listLiveHack.name}
                </PanelHeader>
                <Group title="Выбор лайфхака">
                    <Div>
                        {LiveHackButtonRender(props.go, listLiveHack.liveHacks)}
                    </Div>
                </Group>
            </Panel>
        );
    });
}

export default ListLiveHack;
