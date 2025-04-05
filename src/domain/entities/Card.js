class Card {
  constructor({
    id,
    name,
    game,
    edition,
    rarity,
    condition,
    language,
    price,
    imageUrl,
    owner,
    createdAt,
  }) {
    this.id = id;
    this.name = name;
    this.game = game;
    this.edition = edition;
    this.rarity = rarity;
    this.condition = condition;
    this.language = language;
    this.price = price;
    this.imageUrl = imageUrl;
    this.owner = owner;
    this.createdAt = createdAt || new Date();
  }
}

module.exports = Card;
