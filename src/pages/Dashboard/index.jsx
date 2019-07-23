import React from 'react';
import { connect } from 'react-redux';
import PageHeaderWrapper from '../../components/PageHeaderWrapper';
import { Avatar, Card, Col, List, Skeleton, Row, Statistic } from 'antd';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';
import EditableLinkGroup from './components/EditableLinkGroup';
import Radar from './components/Radar';
import * as api from './service';

const links = [
    {
        title: '操作一',
        href: '',
    },
    {
        title: '操作二',
        href: '',
    },
    {
        title: '操作三',
        href: '',
    },
    {
        title: '操作四',
        href: '',
    },
    {
        title: '操作五',
        href: '',
    },
    {
        title: '操作六',
        href: '',
    },
];

const PageHeaderContent = ({ currentUser }) => {
    const loading = currentUser && Object.keys(currentUser).length;
    if (!loading) {
        return <Skeleton avatar paragraph={{ rows: 1 }} active />;
    }
    return (
        <div className={styles.pageHeaderContent}>
            <div className={styles.avatar}>
                <Avatar size="large" src={currentUser.avatar} />
            </div>
            <div className={styles.content}>
                <div className={styles.contentTitle}>
                    早安，
                    {currentUser.name}
                    ，祝你开心每一天！
                </div>
                <div>
                    {currentUser.title} | {currentUser.group}
                </div>
            </div>
        </div>
    );
};

const ExtraContent = () => (
    <div className={styles.extraContent}>
        <div className={styles.statItem}>
            <Statistic title="项目数" value={56} />
        </div>
        <div className={styles.statItem}>
            <Statistic title="团队内排名" value={8} suffix="/ 24" />
        </div>
        <div className={styles.statItem}>
            <Statistic title="项目访问" value={2223} />
        </div>
    </div>
);

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectLoading: false,
            projectNotice: [],
            activitiesLoading: false,
            activities: [],
            radarData: [],
        };
    }

    renderActivities = item => {
        const events = item.template.split(/@\{([^{}]*)\}/gi).map(key => {
            if (item[key]) {
                return (
                    <a href={item[key].link} key={item[key].name}>
                        {item[key].name}
                    </a>
                );
            }
            return key;
        });
        return (
            <List.Item key={item.id}>
                <List.Item.Meta
                    avatar={<Avatar src={item.user.avatar} />}
                    title={
                        <span>
                            <a className={styles.username}>{item.user.name}</a>
                            &nbsp;
                            <span className={styles.event}>{events}</span>
                        </span>
                    }
                    description={
                        <span className={styles.datetime} title={item.updatedAt}>
                            {moment(item.updatedAt).fromNow()}
                        </span>
                    }
                />
            </List.Item>
        );
    };

    componentDidMount() {
        this.setState(() => ({
            activitiesLoading: true,
            projectLoading: true,
        }));
        api.fakeChartData().then(res => {
            this.setState(() => ({
                radarData: res.data.radarData,
            }));
        });
        api.queryProjectNotice().then(res => {
            this.setState(() => ({
                projectNotice: res.data,
                projectLoading: false,
            }));
        });
        api.queryActivities().then(res => {
            this.setState(() => ({
                activities: res.data,
                activitiesLoading: false,
            }));
        });
    }

    render() {
        return (
            <PageHeaderWrapper
                title="工作台"
                content={
                    <PageHeaderContent
                        currentUser={{
                            avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                            name: 'Jason Li',
                            title: '交互专家',
                            group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
                        }}
                    />
                }
                extraContent={<ExtraContent />}
            >
                <Row gutter={24}>
                    <Col xl={16} lg={24} md={24} sm={24} xs={24}>
                        <Card
                            className={styles.projectList}
                            style={{ marginBottom: 24 }}
                            title="进行中的项目"
                            bordered={false}
                            extra={<Link to="/">全部项目</Link>}
                            loading={this.state.projectLoading}
                            bodyStyle={{ padding: 0 }}
                        >
                            {this.state.projectNotice.map(item => (
                                <Card.Grid className={styles.projectGrid} key={item.id}>
                                    <Card bodyStyle={{ padding: 0 }} bordered={false}>
                                        <Card.Meta
                                            title={
                                                <div className={styles.cardTitle}>
                                                    <Avatar size="small" src={item.logo} />
                                                    <Link to={item.href}>{item.title}</Link>
                                                </div>
                                            }
                                            description={item.description}
                                        />
                                        <div className={styles.projectItemContent}>
                                            <Link to={item.memberLink}>{item.member || ''}</Link>
                                            {item.updatedAt && (
                                                <span className={styles.datetime} title={item.updatedAt}>
                                                    {moment(item.updatedAt).fromNow()}
                                                </span>
                                            )}
                                        </div>
                                    </Card>
                                </Card.Grid>
                            ))}
                        </Card>
                        <Card
                            bodyStyle={{ padding: 0 }}
                            bordered={false}
                            className={styles.activeCard}
                            title="动态"
                            loading={this.state.activitiesLoading}
                        >
                            <List
                                loading={this.state.activitiesLoading}
                                renderItem={item => this.renderActivities(item)}
                                dataSource={this.state.activities}
                                className={styles.activitiesList}
                                size="large"
                            />
                        </Card>
                    </Col>
                    <Col xl={8} lg={24} md={24} sm={24} xs={24}>
                        <Card
                            style={{ marginBottom: 24 }}
                            title="快速开始 / 便捷导航"
                            bordered={false}
                            bodyStyle={{ padding: 0 }}
                        >
                            <EditableLinkGroup onAdd={() => {}} links={links} linkElement={Link} />
                        </Card>
                        <Card
                            style={{ marginBottom: 24 }}
                            bordered={false}
                            title="XX 指数"
                            loading={this.state.radarData.length === 0}
                        >
                            <div className={styles.chart}>
                                <Radar hasLegend height={343} data={this.state.radarData} />
                            </div>
                        </Card>
                        <Card
                            bodyStyle={{ paddingTop: 12, paddingBottom: 12 }}
                            bordered={false}
                            title="团队"
                            loading={this.state.projectLoading}
                        >
                            <div className={styles.members}>
                                <Row gutter={48}>
                                    {this.state.projectNotice.map(item => (
                                        <Col span={12} key={`members-item-${item.id}`}>
                                            <Link to={item.href}>
                                                <Avatar src={item.logo} size="small" />
                                                <span className={styles.member}>{item.member}</span>
                                            </Link>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </PageHeaderWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        dashboard: state.dashboard,
    };
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
