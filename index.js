require("./app/app.js");

app.get("/users", function(req, res, next){
User.find(function(err, users){
   if (err) { return next(err); }
   // ваша логіка
   });
});
app.use(function(err, req, res, next) {
   res.status(err.status || 500);
   res.render('error', {
      message: err.message,
      error: err
   });
});

