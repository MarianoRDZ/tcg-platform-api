class CardController {
  constructor(createCardUseCase) {
    this.createCardUseCase = createCardUseCase;
  }

  createCard = async (req, res) => {
    try {
      const cardData = req.body;
      const card = await this.createCardUseCase.execute(cardData);
      res.status(201).json(card);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}

module.exports = CardController;
