export class Difficulty {
  constructor(level) {
    this.level = level;
  }

  getDescription() {
    return `Difficulty: ${this.level}`;
  }
}

export class Easy extends Difficulty {
  constructor() {
    super('Easy');
  }
}

export class Difficult extends Difficulty {
  constructor() {
    super('Difficult');

  }
}