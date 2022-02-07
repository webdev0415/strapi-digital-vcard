const SHA256 = require("crypto-js/sha256");

module.exports = {
  beforeUpdate(event) {
    function hashCode(s) {
      let h=0;
      for(let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
      return h;
    }

    const { data, where, select, populate } = event.params;
    event.params.data['slug'] = `${event.params.data['lastName']}${event.params.data['firstName']}${event.params.data['birthday']}`
    event.params.data['slug'] = SHA256(event.params.data['slug'])
  },
  beforeCreate(event) {
    function hashCode(s) {
      let h=0;
      for(let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
      return h;
    }

    const { data, where, select, populate } = event.params;
    event.params.data['slug'] = `${event.params.data['lastName']}${event.params.data['firstName']}${event.params.data['birthday']}`
    event.params.data['slug'] = SHA256(event.params.data['slug'])
  },
};
