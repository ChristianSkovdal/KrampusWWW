Ext.define('OdClient.kr.MenuTile', {
    extend: 'Ext.Container',
    xtype: 'menutile',

    layout: 'vbox',

    defaults: {
        xtype: 'button',
        handler: 'menuButtonClick',
        flex:1
    },

    items: [
        {
            bind: {
                text: '{language.btn1}'
            }
        },
        {
            bind: {
                text: '{language.btn2}'
            }
        },
        {
            bind: {
                text: '{language.btn3}'
            }
        },
        {
            bind: {
                text: '{language.btn4}'
            }
        },
    ]

});
