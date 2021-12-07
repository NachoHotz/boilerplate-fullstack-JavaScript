import basicService from '../services/basicService.service';

export const basicController = (req, res) => {
  const response = basicService();
  res.status(200).send(response);
}
