import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon24CommentOutline from '@vkontakte/icons/dist/24/comment_outline';
import Icon16Spinner from '@vkontakte/icons/dist/16/spinner';
import Icon20EducationOutline from '@vkontakte/icons/dist/20/education_outline';
import Icon20GiftOutline from '@vkontakte/icons/dist/20/gift_outline';
import Icon12OnlineMobile from '@vkontakte/icons/dist/12/online_mobile';
import Icon16Users from '@vkontakte/icons/dist/16/users';
import './Persik.css';
import CatalogRender from "./components/CatalogRender/CatalogRender";
import View from "@vkontakte/vkui/dist/components/View/View";
import PanelEnum from "../Enums/PanelEnum";
import {setCurrentLiveHack, setCurrentCatalog} from "../store/actions/app";
import {connect} from "react-redux";

const Home = ({go}) => {
    if (go == null) return <Div>Пусто</Div>;
    return (
        <Panel id={PanelEnum.Home}>

            <PanelHeader>Лайфхакер</PanelHeader>

            <Group>
                <br/>
                <center>
                    <h>
                        <i>Как иcпользовать? Выберите нужную вам категорию, а в категории название нужного вам
                            лайфхака.</i>
                    </h>
                </center>
                <br/>
            </Group>
            <Group title="Выбор категории">
                <Div>
                    <CatalogRender/>
                    {/*<Button size="xl" level="2" onClick={go} data-to="persik26" before={<Icon24CommentOutline/>}>*/}
                    {/*    Лайфхаки для сна*/}
                    {/*</Button>*/}

                    {/*<br/>*/}

                    {/*<Button size="xl" level="2" onClick={go} data-to="persik27"*/}
                    {/*        before={<Icon12OnlineMobile width={20} height={20}/>}>*/}
                    {/*    Лайфхаки для телефона*/}
                    {/*</Button>*/}
                    {/*<br/>*/}
                    {/*<Button size="xl" level="2" onClick={go} data-to="persik28" before={<Icon16Spinner/>}>*/}
                    {/*    Лайфхаки в интернете*/}
                    {/*</Button>*/}
                    {/*<br/>*/}
                    {/*<Button size="xl" level="2" onClick={go} data-to="persik29" before={<Icon20EducationOutline/>}>*/}
                    {/*    Лайфхаки для домашки*/}
                    {/*</Button>*/}
                    {/*<br/>*/}
                    {/*<Button size="xl" level="2" onClick={go} data-to="persik30" before={<Icon20GiftOutline/>}>*/}
                    {/*    Бесплатные стикеры*/}
                    {/*</Button>*/}
                </Div>
            </Group>

            <Group title="Обратная связь">
                <Div>
                    <Button size="xl" level="2" onClick={go} data-to={PanelEnum.Developers}
                            before={<Icon16Users width={20} height={20}/>}>
                        Разработчики
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
};

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};
function mapStateToProps(state) {
    return {
        go: state.app.go
    }
}

export default connect(mapStateToProps)(Home);

