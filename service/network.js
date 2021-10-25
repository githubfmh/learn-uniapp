export default function(options) {
	return new Primise((resolve, reject) => {
		wx.request({
			url: options.url,
			method: options.method || 'get',
			data: options.data || {},
			success: resolve,
			fail: reject
		})
	})
}