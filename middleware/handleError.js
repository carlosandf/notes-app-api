// eslint-disable-next-line no-unused-vars
module.exports = (error, _request, response, _next ) => {
  console.error(error.name);

  if (error.name === 'CastError') {
    response.status(400).send({
      error: 'No se encontro esta dirección :('
    });
  } else {
    response.status(500).end();
  }
};

