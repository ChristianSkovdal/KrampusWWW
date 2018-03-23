Ext.define('Shared.decals.DecalMain', {
    extend: 'Ext.Panel',
    xtype: 'decalmain',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        'Shared.decals.DecalMainController'
    ],

    title: 'Decals',
    controller: 'decalmain',
    viewModel: 'decalmain',

    layout: 'fit',
    //bodyStyle: 'background:lightgray;',
    cls: 'main',

    listeners: {
        painted: 'onThumbsPainted'
     },

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Print',
                    handler: 'printDecals',                    
                    height: 40
                },
                {
                    label: 'Size',
                    xtype: 'sliderfield',
                    flex: 1,
                    maxValue: 200,
                    minValue: 40,
                    label: 'Size',
                    labelWidth: 150,
                    labelAlign: 'left',
                    bind: {
                        value: '{decalsize}',
                    },
                    increment: 1
                },
                {
                    xtype: 'spinnerfield',
                    bind: {
                        value: '{decalsize}'
                    },
                    labelAlign: 'right',
                    label: ' mm',
                    maxValue: 200,
                    minValue: 40,
                    increment: 1
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'hbox',
            style: 'background:transparent;',

            items: [

                {
                    xtype: 'container',
                    scrollable: 'y',
                    flex: 1,
                    items: [
                        {
                            xtype: 'container',
                            cls: 'doc',
                            reference: 'doc',
                            layout: 'float',
                            shadow: true,
                            margin: 20,
                            width: 420,
                            height: 594,
                            padding: 10,
                        }
                    ]
                },
                {
                    flex: 1,
                    margin: 10,
                    xtype: 'container',
                    layout: 'float',
                    reference: 'thumbs',

                }
            ]
        }
    ]
});


