Ext.define('OdClient.bh.NavigationBar', {
    extend: 'Ext.Container',
    xtype: 'bhnavi',

    plugins: 'responsive',
    //style: 'background-color: yellow;',
    scrollable: 'y',
    layout: 'float',
    cls: 'navibar',


    items: [
        {
            text: 'Test1',
            image: 'i1',
            pressed: true
        },
        {
            text: 'Test2',
            image: 'i2'
        },
        {
            text: 'Test3',
            image: 'i3'
        },
        {
            text: 'Test3',
            image: 'i4'
        },
    ]
});
