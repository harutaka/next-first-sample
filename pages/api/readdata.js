let fs = require('fs');

export default (req, res) => {
  let data = JSON.parse(fs.readFileSync("static/data.json", 'utf-8'));
  res.status(200).json(data);
}