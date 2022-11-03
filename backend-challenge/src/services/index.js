const fs = require('fs');

module.exports.getPosts = async (req, res) => {
  try {
    const file = fs.readFileSync(`${__dirname}/public/data.json`);
    const json = JSON.parse(file);

    res.status(200).json({ data: json.splice(0, 5), message: 'add event'});
  } catch (e) {
    res.status(500).json({message: `Something wrong --> ${e.message}`});
  }
}

module.exports.addPost = async (req, res) => {
  try {
    const file = fs.readFileSync(`${__dirname}/public/data.json`);

    const json = JSON.parse(file);
    json.push(req.body)

    fs.writeFileSync(`${__dirname}/public/data.json`, JSON.stringify(json));

    res.status(201).json({message: 'done'});
  } catch (e) {
    res.status(500).json({message: `Something wrong --> ${e.message}`});
  }
}
