Ext.define('Shared.ImageButton', {
    extend: 'Ext.Button',
    xtype: 'imgbtn',

    config: {
        image: null,
        //pressed: false,
    },

    applyImage(image) {
        this._image = image;
        if (this._text) {
            this.updatebtnFace();
        }        
        this.updatebtnFace();
    },

    applytext(text) {
        this._text = text;
        if (this._image) {
            this.updatebtnFace();
        }
        this.updatebtnFace();
        
    },

    //enableToggle: true,

    // applyPressed(value) {
    //     this.removeCls(value ? 'imgbtn-normal' : 'imgbtn-pressed');
    //     this.addCls(value ? 'imgbtn-pressed' : 'imgbtn-normal');
    // },

    updatebtnFace() {
        this.setHtml(`<div class="imgbtn big ${this._image}" style="cursor:pointer;">
                      <div class="row"><div class="inner">${this._text}</div></div></div>`);
    },

    // listeners: {
    //     click: (btn) => {
    //         debugger;
    //         this.fireEvent('click', arguments);
    //     }
    //     // painted: function (c) {
    //     //     c.el.on('click', function (e) {
    //     //         debugger;
    //     //     }, c);
    //     // }
    // }
});