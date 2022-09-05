export const restoreSession = async() => {
    let res = await csrfFetch('/api/session');
    let token = res.headers.get('X-CSRF-Token');
    if (token) sessionStorage.setItem("X-CSRF-Token", token);
    let data = await res.json();
   
    let currentUser = data.user;
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
}


const csrfFetch = async (url, options={}) => {
    options.method ||= "GET";
    options.headers ||= {};

    switch(options.method.toUpperCase()) {
        case 'POST':
            options.headers['Content-Type'] = 'application/json';
            options.headers['Accept'] = 'application/json';
            options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
            break;
        case 'DELETE':
            options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
            break;
        case 'PATCH':
            options.headers['Content-Type'] = 'application/json';
            options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
            break;
    }
    const res = await fetch(url, options);
    if (res.status >= 400) throw res;
    return res;
};

export default csrfFetch;