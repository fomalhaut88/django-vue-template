export default class Api {
  constructor(resource) {
    this.notes = resource('notes{/id}', {}, {
      dropall: {method: 'POST', url: '/dropall'},
    })
  }
}
