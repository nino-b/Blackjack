import * as patterns from "./cardSuitPatterns";


class Card {
  static rankPatterns = {
    A: patterns.drawPatternOfA,
    2: patterns.drawPatternOf2,
    3: patterns.drawPatternOf3,
    4: patterns.drawPatternOf4,
    5: patterns.drawPatternOf5,
    6: patterns.drawPatternOf6,
    7: patterns.drawPatternOf7,
    8: patterns.drawPatternOf8,
    9: patterns.drawPatternOf9,
    10: patterns.drawPatternOf10,
    J: patterns.drawPatternOfJ,
    Q: patterns.drawPatternOfKQ,
    K: patterns.drawPatternOfKQ
  }
  static handPositions = {
    1: [x, y],
    2: [x, y], // needs positions
    3: [x, y],
    dealer: [x, y]
  }
  constructor(suit, rank, x, y, ctx) {
    this.suit = suit;
    this.rank = rank;
    this.color = null;
    this.x = x;
    this.y = y;

    this.vx = 2; // Velocity in x direction
    this.vy = 2; // Velocity in y direction
    this.ctx = ctx;

    if (this.suit === ('spades' || 'clubs')) {
      this.color = 'black';
    } else {
      this.color = 'red';
    }
  }
  animate() {
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    // Update card position
    this.x += this.vx;
    this.y += this.vy;

    // Draw the card at the new position
    this.createCard();

    // Request the next frame
    requestAnimationFrame(() => this.animate());
  }
  createCard() {
    this.#drawRect();
    this.#addValues();
    Card.rankPatterns[this.rank];
  }
  #drawRect() {
    this.ctx.save();
    this.ctx.lineWidth = 0.001;
    
    // Draw outer rectangle
    const outerGradient = this.ctx.createLinearGradient(this.x, this.y + 67.5, this.x + 90, this.y + 67.5);
    outerGradient.addColorStop(0, "#e6e7e8");
    outerGradient.addColorStop(1, "#f1f2f2");
    this.ctx.fillStyle = outerGradient;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 8.37, this.y + 0);
    this.ctx.lineTo(this.x + 81.63, this.y + 0);
    this.ctx.bezierCurveTo(this.x + 86.25, this.y + 0, this.x + 90, this.y + 3.75, this.x + 90, this.y + 8.37);
    this.ctx.lineTo(this.x + 90, this.y + 126.63);
    this.ctx.bezierCurveTo(this.x + 90, this.y + 131.25, this.x + 86.25, this.y + 135, this.x + 81.63, this.y + 135);
    this.ctx.lineTo(this.x + 8.37, this.y + 135);
    this.ctx.bezierCurveTo(this.x + 3.75, this.y + 135, this.x + 0, this.y + 131.25, this.x + 0, this.y + 126.63);
    this.ctx.lineTo(this.x + 0, this.y + 8.37);
    this.ctx.bezierCurveTo(this.x + 0, this.y + 3.75, this.x + 3.75, this.y + 0, this.x + 8.37, this.y + 0);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();
    
    // Draw inner rectangle
    const innerGradient = this.ctx.createLinearGradient(this.x + 3.83, this.y + 67.88, this.x + 86.83, this.y + 67.88);
    innerGradient.addColorStop(0, "#fff");
    innerGradient.addColorStop(1, "#e6e7e8");
    this.ctx.fillStyle = innerGradient;
    this.ctx.strokeStyle = "#d1d3d4";
    this.ctx.lineWidth = 0.25;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 11.77, this.y + 4.38);
    this.ctx.lineTo(this.x + 78.89, this.y + 4.38);
    this.ctx.bezierCurveTo(this.x + 83.28, this.y + 4.38, this.x + 86.83, this.y + 7.93, this.x + 86.83, this.y + 12.32);
    this.ctx.lineTo(this.x + 86.83, this.y + 123.44);
    this.ctx.bezierCurveTo(this.x + 86.83, this.y + 127.83, this.x + 83.28, this.y + 131.38, this.x + 78.89, this.y + 131.38);
    this.ctx.lineTo(this.x + 11.77, this.y + 131.38);
    this.ctx.bezierCurveTo(this.x + 7.38, this.y + 131.38, this.x + 3.83, this.y + 127.83, this.x + 3.83, this.y + 123.44);
    this.ctx.lineTo(this.x + 3.83, this.y + 12.32);
    this.ctx.bezierCurveTo(this.x + 3.83, this.y + 7.93, this.x + 7.38, this.y + 4.38, this.x + 11.77, this.y + 4.38);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();
    
    // Restore context state
    this.ctx.restore();
  }
  #addValues() {
    // Draw the first set of text (no rotation)
    this.ctx.save();
    this.ctx.font = '12px "Dancing Script"';
    this.ctx.fillStyle = this.color;
    this.ctx.textBaseline = 'top';
    this.ctx.textAlign = 'left';
    
    this.ctx.fillText(this.value, this.x + 9, this.y + 10);
    this.ctx.fillText(this.suit, this.x + 9, this.y + 20);
    
    // Draw the second set
    this.ctx.translate(this.x + 75, this.y + 115);
    this.ctx.rotate(Math.PI);
    
    this.ctx.textAlign = 'right';
    this.ctx.textBaseline = 'bottom';
    
    this.ctx.fillText(this.value, 0, 0);
    this.ctx.fillText(this.suit, 0, 10);
    
    this.ctx.restore();
  }
}




const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initial call to set up canvas

function resizeCanvas() {
  // Get device pixel ratio
  const dpr = window.devicePixelRatio || 1;
  
  // Calculate new canvas width and height
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  
  // Set CSS size to match the new canvas size
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  
  // Scale the canvas context to account for the device pixel ratio
  ctx.scale(dpr, dpr);
  
  // Redraw content
  drawContent();
}

function drawContent() {
  drawRect();
  addValues();
  drawSuits0(ctx, 0, 0, '♠️', 'black');
}
