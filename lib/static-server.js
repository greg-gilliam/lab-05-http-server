const staticRoutes = {
  async get(req, res) {
    const [url] = req.url.split('/');
    const index = `${url}/`;

    if (index) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/html');
      res.end(JSON.stringify(index));
    } else {
      res.statusCode = 404; 
      res.end('404');
    }
  },
};

export default staticRoutes;
