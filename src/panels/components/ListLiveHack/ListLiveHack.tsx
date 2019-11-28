import React from 'react';
import LiveHackType from "../../../Types/LiveHackType";
import {IOS, Panel, PanelHeader, platform, HeaderButton, Div, Button, Group} from "@vkontakte/vkui";
// @ts-ignore
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
// @ts-ignore
import Icon24Back from '@vkontakte/icons/dist/24/back';
import CatalogType from "../../../Types/CatalogType";
import PanelEnum from "../../../Enums/PanelEnum";
import {setCurrentLiveHack} from "../../../store/actions/app";
import {connect} from "react-redux";

const osName = platform();

function setCurrentLiveHackAndGo(props: any, liveHack: LiveHackType, e: any) {
    console.log("Тута", props, e, liveHack);
    props.setCurrentLiveHack(liveHack);
    props.go(e);
}


function LiveHackButtonRender(props: MyProps) {
    console.log("LiveHackButtonRender",props);
    return props.currentCatalog.liveHacks.map(liveHack => {
        return (
            <Div>
                <Button size="xl" level="2" onClick={(e) => setCurrentLiveHackAndGo(props, liveHack, e)} data-to={PanelEnum.LiveHack}>
                    {liveHack.name}
                </Button>
            </Div>
        );
    });
}

type MyProps = {
    go: any;
    currentCatalog: CatalogType;
    setCurrentLiveHack: any;
}

export function ListLiveHack(props: MyProps) {
    return (
            <Panel id={PanelEnum.ListLiveHacks}>
                <PanelHeader
                    left={
                        <HeaderButton onClick={props.go} data-to={PanelEnum.Home}>
                            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                        </HeaderButton>
                    }
                >
                    {props.currentCatalog.name}
                </PanelHeader>
                <Group title="Выбор лайфхака">
                    <Div>
                        {LiveHackButtonRender(props)}
                    </Div>
                </Group>
            </Panel>
    );
}

function mapDispatchToProps(dispatch: any) {
    return {
        setCurrentLiveHack: (liveHack: LiveHackType) => dispatch(setCurrentLiveHack(liveHack)),
    }
}

// @ts-ignore
export default connect(null, mapDispatchToProps)(ListLiveHack);
