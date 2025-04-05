const express = require("express");
const router = express.Router();

const CardRepositoryImpl = require("../../infrastructure/database/mongoose/CardRepositoryImpl");
const CreateCard = require("../../application/use-cases/CreateCard");
const CardController = require("../controllers/CardController");

const cardRepository = new CardRepositoryImpl();
const createCardUseCase = new CreateCard(cardRepository);
const cardController = new CardController(createCardUseCase);

router.post("/", cardController.createCard);

module.exports = router;
