Ext.define('OdClient.kr.ImageButton', {
    extend: 'Ext.Button',
    xtype: 'imgbtn',

    config: {
        image: null,
        textOverlay: null
    },

    applyImage(image) {
        this._image = image;
        if (this._textOverlay) {
            this.updatebtnFace();
        }        
        this.updatebtnFace();
    },

    applyTextOverlay(text) {
        this._textOverlay = text;
        if (this._image) {
            this.updatebtnFace();
        }
        this.updatebtnFace();
        
    },

    updatebtnFace() {

        this.setHtml(`<div style="background-image: url(${this._image});color: white;height: 100px;cursor:pointer;"><div class="after">${this._textOverlay}</div></div>`);

        //this.setHtml(
        //    `<div class="image-container">
        //        <img src="${this._image}" />
        //        <div class="after">${this._textOverlay}</div>
        //    </div>`);
    }
});


Ext.define('OdClient.kr.Toolbar', {
    extend: 'Ext.Container',
    xtype: 'navibar',

    docked: 'top',
    layout: 'hbox',
    style: 'background: black',
    shadow: true,

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
