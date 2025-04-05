const CardRepository = require("../../../domain/repositories/CardRepository");
const CardModel = require("./CardModel");

class CardRepositoryImpl extends CardRepository {
  async save(cardData) {
    const card = new CardModel(cardData);
    return await card.save();
  }

  async findAll() {
    return await CardModel.find().populate("owner");
  }

  async findById(id) {
    return await CardModel.findById(id).populate("owner");
  }

  async findByFilters(filters) {
    return await CardModel.find(filters).populate("owner");
  }
}

module.exports = CardRepositoryImpl;
