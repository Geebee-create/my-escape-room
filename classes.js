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
      this.multiplier = 1.5;
  }
}

export class Difficult extends Difficulty {
  constructor() {
      super('Difficult');
      this.multiplier = 2.0;
  }
}