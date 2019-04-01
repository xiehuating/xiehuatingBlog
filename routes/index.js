module.exports = function (app) {
	app.get('/', function (req, res) {
	res.redirect('/projects')
	});
	app.use('/index', require('./projects'));
	// app.use('/signup', require('./signup'));
	// app.use('/signin', require('./signin'));
	// app.use('/signout', require('./signout'));
	app.use('/projects', require('./projects'));
	app.use('/blogs', require('./blogs'));
	// app.use('/comments', require('./comments'));
};