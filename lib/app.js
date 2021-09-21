import { readFile } from 'fs/promises';
import path from 'path';

const getStatic = async (req) => {
  const url = req.url === '/' ? 'index.html' : req.url;
  const joinedPath = path.join(__dirname, './public', url);
  try {
    return readFile(joinedPath, 'utf-8');
  } catch (error) {
    return null;
  }
};

const app = async (req, res) => {
  const file = await getStatic(req);
  if (file) {
    res.statusCode = 200;
    res.end(file); 
    return; 
  }

};

export default app; 
