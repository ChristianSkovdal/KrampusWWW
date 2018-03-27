Ext.define('OdClient.bh.Main', {
    extend: 'Ext.Container',
    xtype: 'bhmain',

    requires: [
        'Ext.MessageBox',
        'OdClient.bh.*',
        'OdClient.bh.MainController'
    ],

    controller: 'bhmain',
    viewModel: 'bhmain',

    layout: 'fit',
    plugins: 'responsive',

    cls: 'main',

    items: [
        {
            xtype: 'toolbar',
            cls: 'topbar landscape-hidden',
            items: [
                '->',
                {
                    xtype: 'button',
                    cls: 'logotop',
                    width: 80,
                    href: '#home'
                },
                '->',
            ]
        },
        {
            xtype: 'toolbar',
            plugins: 'responsive',
            shadow: false,

            responsiveConfig: {
                wide: {
                    docked: 'left',
                    cls: 'navibar topalign'

                },
                tall: {
                    docked: 'bottom',
                    cls: 'navibar'
                }
            },

            items: [
                {
                    xtype: 'button',
                    cls: 'logo landscape-visible',
                    href: '#home',
                },
                '->',
                {
                    vertical: false,
                    xtype: 'segmentedbutton',
                    plugins: 'responsive',

                    responsiveConfig: {
                        wide: {
                            vertical: true,
                        },
                        tall: {
                            vertical: false,
                        }
                    },

                    defaults: {
                        cls: 'navibtn navibtn-big',
                        textAlign: 'bottom'
                    },

                    items: [
                        {
                            text: 'Option 1',
                            pressed: true,
                            userCls: 'i1'
                        },
                        {
                            text: 'Option 2',
                            userCls: 'i2',
                        },
                        {
                            text: 'Option 3',
                            userCls: 'i3'
                        },
                    ]
                },
                '->'

            ]
        }

        // {
        //     xtype: 'bhnavi',
        //     docked: 'left',
        //     cls: 'navibar',
        //     layout: 'vbox',
        //     defaults: {
        //         xtype: 'imgbtn',
        //         handler: 'naviClick'
        //     },

        //     responsiveConfig: {
        //         wide: {
        //             hidden: false
        //         },
        //         tall: {
        //             hidden: true

        //         }
        //     },
        // },        
        // {
        //     xtype: 'bhnavi',
        //     docked: 'bottom',
        //     layout: 'hbox',
        //     defaults: {
        //         xtype: 'imgbtn',
        //         flex: 1,
        //         handler: 'naviClick'
        //     },

        //     responsiveConfig: {
        //         wide: {
        //             hidden: true
        //         },
        //         tall: {
        //             hidden: false

        //         }
        //     },

        // },

    ]
});
