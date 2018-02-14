Ext.define('OdClient.kr.FlipTile', {
    extend: 'Ext.Container',
    xtype: 'fliptile',

    style: 'cursor: pointer;',

    listeners: {
        initialize: function (cmp) {
            cmp.el.on('click', function (e) {
                this.fireEvent('tileclick', cmp.getParent());
            }, cmp);
        }
    },


});