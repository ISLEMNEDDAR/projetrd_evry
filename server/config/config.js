import { Gitlab } from 'gitlab';



const gitlab = new Gitlab({
    host: 'http://localhost:80',
    token: '6CsvtKbUdDAVtcspAdbH',
});

export const config = {
    gitlab
}