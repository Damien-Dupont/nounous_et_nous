const models = require("../models");

class UserController {
  static browse = (req, res) => {
    models.user
      .findAll()
      .then(([rows]) => {
        console.log("browse:: findAll: rows", rows);
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.user
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          log("read:: find: rows", rows);
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const user = req.body;
    user.id = parseInt(req.params.id, 10);

    // TODO validations (length, format...)

    models.user
      .update(user)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).send("user:: error on update");
        } else {
          res.status(204).send("user:: update ok");
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("user:: server error");
      });
  };

  static add = (req, res) => {
    const user = req.body;

    // TODO validations (length, format...)

    models.user
      .insert(user)
      .then(([result]) => {
        res.status(201).send({ ...user, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  // static add = async (req, res) => {
  //   try {
  //     const hash = await passwordHash(req.body.password);

  //     const request = await models.user.insert(req.body.email, hash);

  //     const profile = await models.profile.insert(
  //       req.body,
  //       request[0].insertId
  //     );
  //     await Promise.all(
  //       req.diplome.map((dip) =>
  //         models.diplome.insert(dip, profile[0].insertId)
  //       )
  //     );
  //     await Promise.all(
  //       req.master.map((mast) =>
  //         models.master.insert(mast, profile[0].insertId)
  //       )
  //     );
  //     res.status(200).json({
  //       msg: "Votre compte a été créé avec succès, en attente de validation",
  //     });
  //   } catch (error) {
  //     res.status(500).send("Serveur en échec");
  //   }
  // };

  // static login = (req, res) => {
  //   models.user
  //     .findByMail(req.body.email)
  //     .then(async (rows) => {
  //       if (rows[0] === null) {
  //         return res.status(401).send({
  //           error: "Mot de passe ou email erroné",
  //         });
  //       }

  //       if (rows[0].is_valid) {
  //         if (await passwordVerify(rows[0].password, req.body.password)) {
  //           const profile = await models.profile.findMyProfile(rows[0].id);
  //           const token = jwtSign(
  //             { email: rows[0].email, role: rows[0].role },
  //             { expiresIn: "1h" }
  //           );
  //           delete rows[0].password;

  //           return res
  //             .cookie("access_token", token, {
  //               httpOnly: true,
  //               expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  //             })
  //             .status(200)
  //             .json({ ...rows[0], ...profile[0] });
  //         }
  //         return res.status(401).send({
  //           error: "Mot de passe ou email erroné",
  //         });
  //       }
  //       return res.status(401).send({
  //         error: "Votre compte est en cours de validation",
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       return res.status(500).send({
  //         error: err.message,
  //       });
  //     });
  // };

  static delete = (req, res) => {
    models.user
      .delete(req.params.id)
      .then(() => {
        log("delete:: delete: user", req.params.id);
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserController;