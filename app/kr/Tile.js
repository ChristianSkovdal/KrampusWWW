Ext.define('OdClient.kr.FrontTile', {
    extend: 'Ext.Container',
    xtype: 'fronttile',
    style: 'background: transparent;',

    style:'cursor:pointer;background-color:transparent;',
    listeners: {
        initialize: function () {
            this.el.on('click', function (e) {
                this.up('frontpage').flipAll();
            }, this);
        }

    }
});

Ext.define('OdClient.kr.BackTile', {
    extend: 'OdClient.kr.FlipTile',
    xtype: 'backtile',
    style: 'background-image: url(/assets/kr/tst.jpg);cursor: pointer;',
});

Ext.define('OdClient.kr.Tile', {
    extend: 'Ext.Container',
    xtype: 'tile',

    flex: 1,

    requires: [
        'OdClient.kr.MenuTile',
        'OdClient.kr.InfoTile'
    ],

    layout: {
        type: 'card',
        animation: {
            type: 'flip',
        }
    },


    //listeners: {
    //    initialize: function (cmp) {
    //        //Ext.defer(() => cmp.setActiveItem(1), getRandomInt(100, 500));
    //        //let fronttiles = document.querySelector("fronttile");
    //        //fronttiles.addEventListener("click",() => Ext.defer(() => cmp.setActiveItem(1), getRandomInt(100, 500)) , false);
    //    }
    //},

    items: [
        {
            xtype: 'fronttile'
        },
        {
            xtype: 'backtile',
        }
    ]
});
