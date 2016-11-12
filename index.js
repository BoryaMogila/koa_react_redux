require("./app/app.js");

app.use(function(ctx, next){
	try{
		   await next();
      } catch (error){
		   ctx.status = 500;
		   await ctx.render(“error”, {error});
      }
})

