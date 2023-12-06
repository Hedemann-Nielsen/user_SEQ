import User from "../models/user.model.js";

class UserController {
	constructor() {}
	//hent alle sange
	list = async (req, res) => {
		const result = await User.findAll({
			limit: 2,
			order: ["lastname", "firstname"],
		});
		res.json(result);
	};
	//hent sang detaljer
	get = async (req, res) => {
		const result = await User.findAll({
			where: { id: req.params.id },
		});
		res.json(...result);
	};
	// opret en sang
	create = async (req, res) => {
		const {
			firstname,
			lastname,
			username,
			password,
			email,
			phonenumber,
			gender,
			streetname,
			zipcode,
			country,
		} = req.body; //destructuring

		if (
			firstname &&
			lastname &&
			username &&
			password &&
			email &&
			phonenumber &&
			gender &&
			streetname &&
			zipcode &&
			country
		) {
			const restult = await User.create(req.body);
			res.status(200).send({
				messeage: "User created successfully",
				newid: restult.id,
			});
		} else {
			res.status(403).send({
				messeage: "wrong parameter values",
			});
		}
	};

	//Opdater sang
	update = async (req, res) => {
		try {
			const {
				firstname,
				lastname,
				username,
				password,
				email,
				phonenumber,
				gender,
				streetname,
				zipcode,
				country,
				id,
			} = req.body; //destructuring

			if (
				firstname &&
				lastname &&
				username &&
				password &&
				email &&
				phonenumber &&
				gender &&
				streetname &&
				zipcode &&
				country &&
				id
			) {
				const model = await User.update(req.body, { where: { id: id } });
				return res.json({ status: true });
			} else {
				res.status(418).send({
					messeage: "ikke opdateret",
				});
			}
		} catch (error) {
			console.log(error);
			res.status(500).send({
				messeage: "error",
			});
		}
	};

	delete = async (req, res) => {
		try {
			await User.destroy({ where: { id: req.params.id } });
			res.sendStatus(200);
		} catch (error) {
			res.send(error);
		}
	};
}

export default UserController;
