function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Ext.application({
    extend: 'Ext.app.Application',
    name: 'OdClient',

    launch: function () {

        // Ext.fireEvent('orientationchange', screen);
        // window.addEventListener("orientationchange", function() {
        //     Ext.fireEvent('orientationchange', screen);
        // }, false);
    },

    requires: [
        'OdClient.kr.Main',
        'OdClient.bh.Main'
    ],

    mainView: Ext.mainView
});
