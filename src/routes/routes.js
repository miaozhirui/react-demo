//路由配置
export default {
	path: '/',
	component: require('../components/App/App.js').default,
	indexRoute: {component: require('../components/first-page/first-page').default},

	childRoutes: [
		{
			path: 'firstPage',
			getComponent: (location,cb) => {

				require.ensure([], (require) => {

					cb(null, require('../components/first-page/first-page').default);
				})
			}
		},
		{
			path: 'secondPage',
			getComponent: (location, cb) => {

				require.ensure([], (require) => {

					cb(null, require('../components/second-page/second-page').default);
				})
			}
		},
		{
			path: 'thirdPage',
			getComponent: (location, cb) => {

				require.ensure([], (require) => {

					cb(null, require('../components/third-page/third-page').default);
				})
			}
		},
		{
			path: 'fourPage',
			getComponent: (location, cb) => {

				require.ensure([], (require) => {

					cb(null, require('../components/four-page/four-page').default);
				})
			}
		}
	]
}