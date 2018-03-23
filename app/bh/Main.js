Ext.define('OdClient.bh.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    requires: [
        'Ext.MessageBox',
        'OdClient.bh.*'
    ],

    controller: 'main',
    viewModel: 'main',

    //layout: 'card',

    html: 'Start...',

    items: [        

    ]
});
