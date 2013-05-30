module.exports = function(app) {

  app.set("view options", {
    layout: "layout/layout-skills"
  });


  // Frontier
  app.get('/frontier', function(req, res){
    res.render("frontier/home");
  });
  app.get('/frontier/home', function(req, res){
    res.render("frontier/home");
  });
  app.get('/frontier/angular', function(req, res){
    res.render("frontier/angular");
  });
  app.get('/frontier/async', function(req, res){
    res.render("frontier/async");
  });
  app.get('/frontier/experiments', function(req, res){
    res.render("frontier/experiments");
  });


  // H5C3
  app.get('/h5c3', function(req, res){
    res.render("h5c3/home");
  });
  app.get('/h5c3/home', function(req, res){
    res.render("h5c3/home");
  });
  app.get('/h5c3/responsive', function(req, res){
    res.render("h5c3/responsive");
  });
  app.get('/h5c3/form', function(req, res){
    res.render("h5c3/form");
  });
  app.get('/h5c3/selectors', function(req, res){
    res.render("h5c3/selectors");
  });
  app.get('/h5c3/styling', function(req, res){
    res.render("h5c3/styling");
  });
  app.get('/h5c3/HTML5', function(req, res){
    res.render("h5c3/HTML5");
  });


  // JavaScript
  app.get('/javascript', function(req, res){
    res.render("javascript/home");
  });
  app.get('/javascript/home', function(req, res){
    res.render("javascript/home");
  });
  app.get('/javascript/ajax', function(req, res){
    res.render("javascript/ajax");
  });
  app.get('/javascript/basics', function(req, res){
    res.render("javascript/basics");
  });
  app.get('/javascript/websockets', function(req, res){
    res.render("javascript/websockets");
  });
  app.get('/javascript/webworkers', function(req, res){
    res.render("javascript/webworkers");
  });
  

  // QA
  app.get('/qa', function(req, res){
    res.render("qa/home");
  });
  app.get('/qa/home', function(req, res){
    res.render("qa/home");
  });


  // Default routes
  app.get('/:page', function(req, res){
    res.render(req.params.page);
  });
  
  app.get('/', function(req, res){
    res.render("frontier/home");
  });
}