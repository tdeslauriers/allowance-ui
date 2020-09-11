export const allowanceApiUrl = ALLOWANCE_API_URL;

export function httpGet(path) {
    return req(path)
}

export function httpPut(path, data){
    return req(path, 'PUT', data)
}

export function httpPost(path, data) {
    return req(path, 'POST', data)
}

async function req(path, method = 'GET', data) {
    const res = await fetch(allowanceApiUrl + path, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data && JSON.stringify(data)
    })
    const json = await res.json()
    return { ok: res.ok, data: json}
}