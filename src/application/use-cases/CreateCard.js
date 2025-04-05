module.exports = class CreateCard {
  constructor(cardRepository) {
    this.cardRepository = cardRepository;
  }

  async execute(cardData) {
    return await this.cardRepository.save(cardData);
  }
};
