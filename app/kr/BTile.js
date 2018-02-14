//Ext.define('OdClient.kr.BItemTile', {
//    //extend: 'OdClient.kr.FlipTile',
//    extend: 'Shared.TemplateContainer',
//    xtype: 'bitemtile',
//});


Ext.define('OdClient.kr.BTile', {
    extend: 'Ext.Container',
    xtype: 'btile',

    margin: 20,
    width: 200,
    height: 200,
    shadow: true,

    config: {
        frontTpl: null
    },

    layout: {
        type: 'card',
        animation: {
            type: 'flip',
        }
    },

    applyData(data) {
        _data = data;
        this.down('#front').updateData(data);
        this.down('#back').updateData(data);
    },
    
    initialize() {
        this.down('#front').on('tileclick', () => this.setActiveItem(1));
    },

    items: [
        {
            xtype: 'fliptile',
            itemId: 'front',
            tpl: `
            <div class="image-container">
                <img src="/assets/kr/{img}" style="width:100%;" />
                <div style="text-align:center;color:black;">{name}</div>
            </div>`
        },
        {
            xtype: 'container',
            itemId: 'back',
            tpl: `<div style="url(/assets/kr/{img}"><div>{name}</div></div>`
        }
    ]

});
