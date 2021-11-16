module.exports = {
  basicController: (req, res, next) => {
    res.status(200).send('hello world!');
  }
}
