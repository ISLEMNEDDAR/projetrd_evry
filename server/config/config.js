import { Gitlab } from 'gitlab';

const gitlab = new Gitlab({
    host: 'http://localhost:80',
    token: '6CsvtKbUdDAVtcspAdbH',
});

const sonarqubetoken = "Basic YWRtaW46YWRtaW4=" //+ Buffer.from("admin : admin").toString("base64")

export const config = {
    gitlab,sonarqubetoken
}


