import fetch from "./fetch";


class rq {
    static fetchGet(url, params = {}) {
        return new Promise((resolve, reject) => {
            fetch({
                url,
                method: "get",
                params
            }).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    }
}
export default rq
