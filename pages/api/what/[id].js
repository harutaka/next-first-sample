export default (req, res) => {
  let data = {
    id: req.query.id,
  }

  res.json(data);
}
