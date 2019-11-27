import React from 'react';
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import LiveHackCatalogEnum from "../../../Enums/LiveHackCatalogEnum";
import LiveHackType from "../../../Types/LiveHackType";
import CatalogType from "../../../Types/CatalogType";
import Catalogs from "../../../Data/Catalogs";
import {Div} from "@vkontakte/vkui";

type MyProps = {
    go: any;
}

function CatalogRender(props: MyProps) {
    console.log("CatalogRender",Catalogs);
    return (
        <Div>
            {
                Catalogs.map((catalog: CatalogType, i) => {
                    return (
                        <Button size="xl" level="2" onClick={props.go} data-to={catalog.id} before={<catalog.icon/>}>
                            {catalog.name}
                        </Button>
                    );
                })
            }
        </Div>
    );
}

export default CatalogRender;
