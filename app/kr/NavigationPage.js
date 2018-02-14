Ext.define('OdClient.kr.NavigationPage', {
    extend: 'Ext.Container',
    xtype: 'navipage',

    requires: [
        'OdClient.kr.BCntr',
        'OdClient.kr.Toolbar',
        'Shared.HtmlContainer'
    ],

    cls: 'navi-bk',
    reference: 'navipage',
    layout: 'card',

    items: [
        {
            xtype: 'navibar'
        },
        {
            xtype: 'bcntr',
            bind: {
                url: '/assets/kr/html/{currentLocaleCode}/b.json',
            }
        },
        {
            xtype: 'htmlcntr',            
            padding: 20,
            bind: {
                url: '/assets/kr/html/{currentLocaleCode}/a.html',
            }
        },
        {
            xtype: 'container',
            shadow: true,
            margin: 10,
            items: [
                {
                    xtype: 'htmlcntr',
                    bind: {
                        url: '/assets/kr/html/{currentLocaleCode}/b.html',
                    }
                }
            ]
        }
    ]

});
