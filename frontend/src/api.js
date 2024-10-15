class Resource {
  constructor(url, axios, root, actions) {
    this.axios = axios
    this.url = url
    this.root = root
    this.actions = actions

    if (actions) {
      for (const [action, args] of Object.entries(actions)) {
        const path = args.path ? args.path : action
        this[action] = async (params, data) => 
          await this._action(args.method, path, params, data)
      }
    }
  }

  async get(params) {
    return await this._action('GET', '', params, null)
  }

  async save(data) {
    return await this._action('POST', '', null, data)
  }

  async update(params, data) {
    return await this._action('PUT', '', params, data)
  }

  async delete(params) {
    return await this._action('DELETE', '', params, null)
  }

  async _action(method, path, params, data) {
    const url = this._prepareURL(path, params)
    return await this.axios({method, url, data, validateStatus: () => true})
  }

  _prepareURL(path, params) {
    let url = this.root + '/' + this.url + '/' + path
    if (params) {
      url += '/' + params.id
    }
    url = url.replace(/\/+/g, '\/')
    if (url[url.length - 1] == '/') {
      url = url.substring(0, url.length - 1)
    }
    return url
  }
}


export default class Api {
  constructor(axios, root = '/') {
    this.users = new Resource('users', axios, root, {
      info: {method: 'GET'},
      login: {method: 'POST'},
      logout: {method: 'GET'},
    })
    this.notes = new Resource('notes', axios, root)
  }
}
