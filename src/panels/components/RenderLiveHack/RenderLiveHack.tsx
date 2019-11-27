import React from 'react';
import LiveHackType from "../../../Types/LiveHackType";
import LiveHack from "../Livehack/LiveHack";
import {Div} from "@vkontakte/vkui";

type MyProps = {
    liveHacks: LiveHackType[],
    go: any
}

function RenderLiveHack(props: MyProps) {
    console.log("RenderLiveHack",props);
    return(
        <Div>
            {props.liveHacks.map((liveHack) => {
                return <LiveHack key={liveHack.id}  id={liveHack.id} liveHack={liveHack} go={props.go}/>
            })}
        </Div>
    );
}

export default RenderLiveHack;