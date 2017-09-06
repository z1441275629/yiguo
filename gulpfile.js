var gulp = require("gulp");
/*
gulp.task("copyfile",function(){
	gulp.src("index.html").pipe(gulp.dest("dist"));
});

gulp.task("copywww",function(){
	gulp.src("index.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\yiguo11"));
});
*/
gulp.task("copywww",function(){
	//gulp.src(["*/**/*","/**/*","!package.json","!node_modules","!gulpfile.js"]).pipe(gulp.dest("D:\\phpStudy\\WWW\\yiguo11"));
	//gulp.src("img").pipe(gulp.dest("D:\\phpStudy\\WWW\\yiguo11"));
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\yiguo11\\img"));
	//gulp.src("html/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\yiguo11"));
	gulp.src("html/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\yiguo11\\html"));
	//gulp.src("css").pipe(gulp.dest("D:\\phpStudy\\WWW\\yiguo11"));
	gulp.src("css/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\yiguo11\\css"));
	//gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\yiguo11"));
	gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\yiguo11\\js"));
	//gulp.src("json/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\yiguo11"));
	gulp.src("json/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\yiguo11\\json"));
	gulp.src(["*.php","*.html"]).pipe(gulp.dest("D:\\phpStudy\\WWW\\yiguo11"));
	
});

//自动监视

gulp.task("watchAll",function(){
	gulp.watch("*/**/*","copywww");
});
