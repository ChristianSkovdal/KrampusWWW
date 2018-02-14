function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Ext.application({    
    extend: 'Ext.app.Application',
    name: 'OdClient',

    launch: function () {

    },

    requires: [
        'OdClient.kr.Main'
    ],

    mainView: Ext.mainView
});
