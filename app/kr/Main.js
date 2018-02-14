Ext.define('OdClient.kr.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    requires: [
        'Ext.MessageBox',
        'OdClient.kr.*'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'card',

    items: [        
        {
            xtype: 'frontpage'
        },
        {
            xtype: 'navipage'
        },
 


    ]
});
