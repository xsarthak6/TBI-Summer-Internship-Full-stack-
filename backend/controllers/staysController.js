const stays = require("../data/stays");

exports.getAllStays = (req, res) => {
  res.status(200).json(stays);
};

exports.getStayById = (req, res) => {
  const stay = stays.find(
    (s) => s.id === parseInt(req.params.id)
  );

  if (!stay) {
    return res.status(404).json({
      message: "Stay not found",
    });
  }

  res.status(200).json(stay);
};

exports.createStay = (req, res) => {
  const newStay = {
    id: stays.length + 1,
    ...req.body,
  };

  stays.push(newStay);

  res.status(201).json(newStay);
};

exports.updateStay = (req, res) => {
  const stay = stays.find(
    (s) => s.id === parseInt(req.params.id)
  );

  if (!stay) {
    return res.status(404).json({
      message: "Stay not found",
    });
  }

  Object.assign(stay, req.body);

  res.status(200).json(stay);
};

exports.deleteStay = (req, res) => {
  const index = stays.findIndex(
    (s) => s.id === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Stay not found",
    });
  }

  stays.splice(index, 1);

  res.status(204).send();
};

exports.searchStays = (req, res) => {
  const q = req.query.q?.toLowerCase() || "";

  const results = stays.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.location.toLowerCase().includes(q)
  );

  res.status(200).json(results);
};