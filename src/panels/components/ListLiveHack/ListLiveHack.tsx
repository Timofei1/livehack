import React from 'react';
import LiveHackType from "../../../Types/LiveHackType";
import {IOS, Panel, PanelHeader, platform, HeaderButton, Div, Button, Group} from "@vkontakte/vkui";
// @ts-ignore
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
// @ts-ignore
import Icon24Back from '@vkontakte/icons/dist/24/back';
import CatalogType from "../../../Types/CatalogType";
import PanelEnum from "../../../Enums/PanelEnum";

const osName = platform();


type MyProps = {
    go: any;
    catalogs: CatalogType[];
}

function LiveHackButtonRender(go: any, liveHacks: LiveHackType[]) {
    console.log("LiveHackButtonRender",liveHacks);
    return liveHacks.map(liveHack => {
        return (
            <Button size="xl" level="2" onClick={go} data-to={PanelEnum.LiveHack}>
                {liveHack.name}
            </Button>
        );
    });
}

function ListLiveHackRender(props: MyProps) {
    console.log(props);
    return props.catalogs.map(catalog => {
        return ListLiveHack({catalog, go: props.go});
    });
}

type MyPropsOnly = {
    go: any;
    catalog: CatalogType;
}

export function ListLiveHack(props: MyPropsOnly) {
    console.log("ListLiveHack", props);
    return (
            <Panel id={PanelEnum.ListLiveHacks}>
                <PanelHeader
                    left={<HeaderButton onClick={props.go} data-to={PanelEnum.Home}>
                        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </HeaderButton>}
                >
                    {props.catalog.name}
                </PanelHeader>
                <Group title="Выбор лайфхака">
                    <Div>
                        {LiveHackButtonRender(props.go, props.catalog.liveHacks)}
                    </Div>
                </Group>
            </Panel>
    );
}

export default ListLiveHackRender;
