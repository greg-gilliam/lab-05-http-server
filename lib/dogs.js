import shortid from 'shortid';


export const dogs = [
  { name: 'mabel', age: 5, weight: '52 lbs' },
  { name: 'zelda', age: 6, weight: '65 lbs' },
  { name: 'evie', age: 1, weight: '35 lbs' },
];

const dogRoutes = {
  async get(req, res) {
    const [, , id] = req.url.split('/');
    const response = id 
      ? dogs.find((dog) => dog.id === id)
      : dogs;

    if (response) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(response));
    } else {
      res.statusCode = 404;
      res.end('404: Dog Not Found');
    }
  }, 
  async post(req, res) {
    let requestData = '';

    req.on('data', (chunk) => {
      requestData += chunk;
    });

    req.on('end', () => {
      const requestObject = JSON.parse(requestData);
      const dog = {
        ...requestObject,
        id: shortid.generate(), 
      };
      res.statusCode = 201;

      res.setHeader('Content-Type', 'application/json');

      res.end(JSON.stringify(dog));
    });
  },
};

export default dogRoutes; 
