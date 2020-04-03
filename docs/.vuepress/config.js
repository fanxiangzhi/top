module.exports = {
	title: '达摩猿',
	description: '等风来',
	base: '/distb/',
	host: '0.0.0.0',
	port: '8851',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/', target: '_self'},
			{ text: '开源', 
			  items: [
			  {text:'前端',link:'/nav/font/'},
			  {text:'app',link:'/nav/app/'},
			  {text:'杂项', items:[
                  {text:'杂项一',link:'/nav/other/othera/'},
                  {text:'杂项二',link:'/nav/other/otherb/'}
			  ]
              },
			  {text:'工具', items: [
			  	{text:'git',link:'/nav/tools/git/'}, {text:'jdk',link:'/nav/tools/jdk/'}
			  	]
			  }
			  ]
			},
			{
				text:'我的', items: [
                {text:'简介',link:'/nav/my/'}
				]
			}
		],
		sidebar: [
			['/', '首页'],
			['/page-a/', '在线.md编辑说明'],
			['/page-b/', '由感而发'],
		]
	},
	search: true,
	searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    "devDependencies": {
        "vuepress": "^0.14.8"
    }
}