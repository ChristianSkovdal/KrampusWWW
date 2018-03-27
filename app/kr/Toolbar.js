Ext.define('OdClient.kr.Toolbar', {
    extend: 'Ext.Container',
    xtype: 'navibar',

    docked: 'top',
    layout: 'hbox',
    style: 'background: black',
    shadow: true,

    requires: [
        'Shared.ImageButton'
    ],

    defaults: {
        width: 100,
        height: 100,
        margin: 0,
        padding: 0,
        xtype: 'button',
        handler: 'onChangePage',
    },

    items: [
        {
            bind: {
                text: '{currentLocaleName}',
            },
            handler: 'changeLanguage'
        },
        {
            xtype: 'imgbtn',
            handler: 'onGoHome',
            image: '/assets/kr/bil.jpg',

            bind: {
                textOverlay: '{language.homeBtnText}'
            }
        },
        {
            pageIndex: 0,
            html: '<img src="/assets/kr/tulips.jpg"/>',
        },
        {
            pageIndex: 1,
            html: '<img src="/assets/kr/jellyfish.jpg"/>',
        },
        {
            pageIndex: 2,
            html: '<img src="/assets/kr/lighthouse.jpg"/>',
        },
        {
            pageIndex: 3,
            html: '<img src="/assets/kr/Desert.jpg"/>',
        },
    ]

});
