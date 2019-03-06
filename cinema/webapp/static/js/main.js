let url = 'http://localhost:8000/api/v1/movies/';

fetch(
    url,
    {
        method: 'GET',
    }
).then(
    response => {
        return response.json();
    }
).then(json => {
    console.log(json);
    return json;
});

let body = JSON.stringify({
    name: 'Awesome Movie',
    release_date: '2018-10-20',
    category_ids: [3, 4]
});
let headers = new Headers({
    'Content-Type': 'application/json',
    'Content-Length': body.length
});

fetch(
    url,
    {
        method: 'POST',
        body: body,
        headers: headers,
    }
).then(
    response => {
        return response.json()
    }
).then(
    json => {
        console.log(json);
        return json;
    }
).catch(error => {
    console.log(error);
});