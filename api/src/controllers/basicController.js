import basicService from '../services/basicService';

const basicController = (req, res) => {
  const response = basicService();
  res.status(200).send(response);
}

export default basicController;
