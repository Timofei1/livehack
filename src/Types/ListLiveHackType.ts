import LiveHackType from "./LiveHackType";

type ListLiveHackType = {
 id: string; // dataTo панели
 name: string; // Название списка
 liveHacks: LiveHackType[]; //Список лайфхаков
};

export default ListLiveHackType;