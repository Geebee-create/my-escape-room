class Threat {
  constructor(){
    this.text = 'Crawling into a tunnel isnt safe!' 
  }
}

export class Collapse extends Threat {
  constructor(text) {
super(text)
this.deathText='You see an object placed at the end of the tunnel. You hear a loud rumble and dust particles fall from above but you cant resist reaching for the object at the end of the tunnel. Squish. The tunnel collapses on you and its too late.'
this.aliveText='You see an object placed at the end of the tunnel. You hear a loud rumble and dust particles fall from above. You manage to grab the object just in time and make it back out of the tunnel before it collapses. You realise that the object you have found is the most incredible and sought after ancient scroll of all time.'
  }
}
  // collapseNum() {
    // return Math.floor(Math.random(2))
  // }
// }
