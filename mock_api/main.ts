const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router("mock_api/db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/echo", (req: any, res: any) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req: any, res: any, next: any) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

router.render = (req: any, res: any) => {
  const headers = res.getHeaders();

  const total = headers["x-total-count"];
  if (total) {
    res.jsonp({
      data: res.locals.data,
      pagination: {
        total: total,
      },
    });
  }

  res.jsonp({ data: res.locals.data });
};

// Use default router
server.use("/api", router);
server.listen(8082, () => {
  console.log("JSON Server is running");
});
