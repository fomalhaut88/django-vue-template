export default class Api {
  constructor(resource) {
    this.users = resource('users{/id}', {}, {
      login: {method: 'POST', url: 'users/login'},
      logout: {method: 'GET', url: 'users/logout'},
      info: {method: 'GET', url: 'users/info'},
    })
    this.notes = resource('notes{/id}')
  }
}
