import server from './ServerSocket';

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
