import LiveHackCatalogEnum from "../Enums/LiveHackCatalogEnum";
import CatalogType from "../Types/CatalogType";
// @ts-ignore
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import LiveHacks from "./LiveHacks";

let idCount = 0;
function getId() {
    idCount++;
    return `Catalog${idCount}`;
}

function getLiveHacks(type: LiveHackCatalogEnum) {
    return LiveHacks.filter(x => x.type == type);
}

function getCatalog(type: LiveHackCatalogEnum, name: string, icon: any): CatalogType {
    return {id: getId(), type, name, icon, liveHacks: getLiveHacks(type)};
}

const Catalogs: CatalogType[] = [
        getCatalog(LiveHackCatalogEnum.ЛайфхакиДляСна, "Лайфхаки для сна", Icon24CommentOutline)
];

export default Catalogs;