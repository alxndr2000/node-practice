const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "dockerthing-db-1",
      user: "root",
      password: "mauFJcuf5dhRMQrjj",
      database: "dev",
    },
    listPerPage: 10,
  };
  module.exports = config;