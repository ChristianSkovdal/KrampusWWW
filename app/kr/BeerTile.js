//Ext.define('OdClient.kr.BItemTile', {
//    //extend: 'OdClient.kr.FlipTile',
//    extend: 'Shared.TemplateContainer',
//    xtype: 'bitemtile',
//});


Ext.define('OdClient.kr.BeerTile', {
    extend: 'Ext.Container',
    xtype: 'beertile',

    margin: 20,
    width: 400,
    height: 400,
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
            </div>
            <div class="beertile-title">{name}</div>
            `
        },
        {
            xtype: 'container',
            itemId: 'back',
            tpl: `
            <div class="image-container">
            <div class="beertile-back">{name}</div>
            <div class="beertile-description">{description}</div>
            </div>`
        }
    ]

});
