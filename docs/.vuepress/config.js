module.exports = {
	title: '达摩猿',
	description: '等风来',
	base: '/top/',
	host: '0.0.0.0',
	port: '8851',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/', target: '_self'},
			{ text: '开源', 
			  items: [
			  {text:'前端',link:'/'},
			  {text:'app',link:'/'},
			  {text:'其他',link:'/'}
			  ]
			},
			{
				text:'我的', link:'/'
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
}