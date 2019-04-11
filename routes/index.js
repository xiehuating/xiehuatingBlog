module.exports = function (app) {
	app.get('/', function (req, res) {
	res.redirect('/projects')
	});
	
	app.use('/projects', require('./projects'));
	app.use('/blogs', require('./blogs'));
	app.use('/about', require('./about'));
	app.use('/demos', require('./demos'));
	
	// app.use('/signup', require('./signup'));
	// app.use('/signin', require('./signin'));
	// app.use('/signout', require('./signout'));
	// app.use('/comments', require('./comments'));
};