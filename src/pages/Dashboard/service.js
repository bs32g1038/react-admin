import axios from '../../utils/axios';

export async function queryProjectNotice() {
    return axios.get('/api/project/notice');
}

export async function queryActivities() {
    return axios.get('/api/activities');
}

export async function fakeChartData() {
    return axios.get('/api/fake_chart_data');
}

export async function queryCurrent() {
    return axios.get('/api/currentUser');
}
