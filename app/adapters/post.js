import DS from 'ember-data';
export default DS.RESTAdapter.extend({

        host: "http://52.57.141.10:3737",
        //host: "http://192.168.1.4:3000",
        headers: { 
           'Content-Type': 'application/json',
           'id-token': SOCIAL_LOGIN.authTokenz
        }
        // ajax: function (url, type, hash) {
            // hash.url = url;
            // hash.type = type;
            // hash.dataType = 'jsonp';
            // hash.contentType = 'application/json';
            // hash.context = this;

            // if (hash.data && type !== 'GET') {
            //     hash.data = JSON.stringify(hash.data);
            // }

            // jQuery.ajax(hash);
        // },

    });