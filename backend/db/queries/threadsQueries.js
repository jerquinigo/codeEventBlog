const { db } = require("../index.js");

getAllThreads = (req, res, next) => {
	db.any("SELECT user_id, threads_code,threads_comment FROM threads")
		.then(threads => {
			res.status(200).json({
				status: "success",
				threads: threads,
				message: "got all the threads"
			});
		})
		.catch(err => {
			console.log(err);
			return next(err);
		});
};


module.exports = {getAllThreads}
