import Mock from 'mockjs';
import dashboard from '../pages/Dashboard/_mock';
Mock.setup({
    timeout: 800, // setter delay time
});
const loadMock = () => {
    Object.keys(dashboard).map(key => {
        const [method, path] = key.split('  ');
        console.log(new RegExp(path.replace(/\//g, '\\/')));
        return Mock.mock(new RegExp(path.replace(/\//g, '\\/')), method.toLocaleLowerCase(), dashboard[key]);
    });
};
loadMock();

console.log('mock mounted');
