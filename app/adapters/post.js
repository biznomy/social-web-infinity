import DS from 'ember-data';
export default DS.RESTAdapter.extend({
        url: "http://192.168.1.5:3000",
        headers: { 
           'contentType': 'application/json',
           'idToken': SOCIAL_LOGIN.authTokenz
        },
        ajax: function (url, type, hash) {
            hash.url = url;
            hash.type = type;
            hash.dataType = 'jsonp';
            hash.contentType = 'application/json';
            hash.context = this;

            if (hash.data && type !== 'GET') {
                hash.data = JSON.stringify(hash.data);
            }

            jQuery.ajax(hash);
        },
    });