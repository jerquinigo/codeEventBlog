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

getThreadsByUserId = (req,res,next) => {
	let userId = parseInt(req.params.id)
	db.any("SELECT threads.id, threads.threads_code, threads.threads_comment, users.email, users.username, users.profile_pic FROM threads JOIN users on threads.id=users.id WHERE user_id=$1", userId)
	.then(threads => {
		res.status(200).json({
			status: "success",
			threads: threads,
			message: "got all threads from userId"
		})
	})
	.catch(err => {
		console.log(err)
		return next(err)
	})
}


deleteThread = (req,res,next) => {
	let threadId = parseInt(req.params.id)
	console.log(threadId)
	db.none("DELETE from threads WHERE id=$1", threadId)
	.then(result => {
		res.status(200).json({
			status: "success",
			message: "successfully deleted thread",
			result: result
		})
	})
	.catch(err => {
		console.log(err)
		return next(err)
	})
}

createThreadById = (req,res,next) => {
	// let threadId = parseInt(req.params.id)
	console.log(threadId)
	db.none("INSERT INTO threads (user_id, threads_code, threads_comment) VALUES(${user_id}, ${threads_code}, ${threads_comment}) RETURNING id", {
		user_id: req.body.user_id,
		threads_code: req.body.threads_code,
		threads_comment: req.body.threads_comment
	})
	.then(threads => {
		res.status(200).json({
			status: "success",
			threads: threads,
			message: "got threads by id"
		})
	})
	.catch(err => {
		console.log(err);
		return next(err)
	})
} 




module.exports = {getAllThreads, getThreadsByUserId, deleteThread, createThreadById}
