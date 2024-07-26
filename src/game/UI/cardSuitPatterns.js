
export function drawPatternOfA(ctx, x, y, suit, color) {
  ctx.save(); // Save current state
  ctx.font = '70px "Dancing Script"'; // Set font size and family
  ctx.fillStyle = color; // Set fill color for the text

  // Draw the suit symbol
  ctx.fillText(suit, x + 28, y + 88); // Adjust as needed

  // Draw the second set with transformation
  ctx.translate(x + 75, y + 115); // Move to the starting point
  ctx.rotate(Math.PI); // Rotate by 180 degrees

  ctx.restore(); // Restore the state after transformations
}



export function drawPatternOf2(ctx, x, y, suit, color) {
  ctx.save(); // Save current state
  ctx.font = '27px "Dancing Script"'; // Set font size and family
  ctx.fillStyle = color;
  ctx.fillText(suit, x + 37, y + 30); // Adjust as needed

  // Draw the second set
  ctx.translate(x + 75, y + 115); // Move to the starting point
  ctx.rotate(Math.PI); // Rotate by 180 degrees
  ctx.fillText(suit, 23, 15); // Adjust as needed

  ctx.restore(); // Restore the state after transformations
}



export function drawPatternOf3(ctx, x, y, suit, color) {
  ctx.save(); // Save current state
  ctx.font = '27px "Dancing Script"'; // Set font size and family
  ctx.fillStyle = color; // Set fill color for the text

  // Draw the first set of suits
  ctx.fillText(suit, x + 37, y + 30); // Draw first suit
  ctx.fillText(suit, x + 37, y + 70); // Draw second suit

  // Draw the second set with transformation
  ctx.translate(x + 75, y + 115); // Move to the starting point
  ctx.rotate(Math.PI); // Rotate by 180 degrees
  ctx.fillText(suit,  23,  15); // Draw suit considering the rotation

  ctx.restore(); // Restore the state after transformations
}



export function drawPatternOf4(ctx, x, y, suit, color) {
  ctx.save(); // Save current state
  ctx.font = '27px "Dancing Script"'; // Set font size and family
  ctx.fillStyle = color; // Set fill color for the text

  // Draw the first set of suits
  ctx.fillText(suit, x + 23, y + 30); // Draw first suit
  ctx.fillText(suit, x + 53, y + 30); // Draw second suit

  // Draw the second set with transformation
  ctx.translate(x + 75, y + 115); // Move to the starting point
  ctx.rotate(Math.PI); // Rotate by 180 degrees
  ctx.fillText(suit, 7, 15); // Draw suit considering rotation
  ctx.fillText(suit, 37, 15); // Draw another suit considering rotation

  ctx.restore(); // Restore the state after transformations
}



export function drawPatternOf5(ctx, x, y, suit, color) {
  ctx.save(); // Save current state
  ctx.font = '27px "Dancing Script"'; // Set font size and family
  ctx.fillStyle = color; // Set fill color for the text

  // Draw the first set of suits
  ctx.fillText(suit, x + 23, y + 30); // Draw first suit
  ctx.fillText(suit, x + 55, y + 30); // Draw second suit
  ctx.fillText(suit, x + 40, y + 70); // Draw third suit

  // Draw the second set with transformation
  ctx.translate(x + 75, y + 115); // Move to the starting point
  ctx.rotate(Math.PI); // Rotate by 180 degrees
  ctx.fillText(suit, 5, 15); // Draw suit considering rotation
  ctx.fillText(suit, 37, 15); // Draw another suit considering rotation

  ctx.restore(); // Restore the state after transformations
}



export function drawPatternOf6(ctx, x, y, suit, color) {
  ctx.save(); // Save current state
  ctx.font = '27px "Dancing Script"'; // Set font size and family
  ctx.fillStyle = color; // Set fill color for the text

  // Draw the first set of suits
  ctx.fillText(suit, x + 23, y + 30); // Draw first suit
  ctx.fillText(suit, x + 55, y + 30); // Draw second suit
  ctx.fillText(suit, x + 23, y + 70); // Draw third suit
  ctx.fillText(suit, x + 55, y + 70); // Draw fourth suit

  // Draw the second set with transformation
  ctx.translate(x + 75, y + 115); // Move to the starting point
  ctx.rotate(Math.PI); // Rotate by 180 degrees
  ctx.fillText(suit, 5, 15); // Draw suit considering rotation
  ctx.fillText(suit, 37, 15); // Draw another suit considering rotation

  ctx.restore(); // Restore the state after transformations
}



export function drawPatternOf7(ctx, x, y, suit, color) {
  ctx.save(); // Save current state
  ctx.font = '27px "Dancing Script"'; // Set font size and family
  ctx.fillStyle = color; // Set fill color for the text

  // Draw the first set of suits
  ctx.fillText(suit, x + 23, y + 30); // Draw first suit
  ctx.fillText(suit, x + 39, y + 50); // Draw second suit
  ctx.fillText(suit, x + 55, y + 30); // Draw third suit
  ctx.fillText(suit, x + 23, y + 70); // Draw fourth suit
  ctx.fillText(suit, x + 55, y + 70); // Draw fifth suit

  // Draw the second set with transformation
  ctx.translate(x + 75, y + 115); // Move to the starting point
  ctx.rotate(Math.PI); // Rotate by 180 degrees
  ctx.fillText(suit, 5, 15); // Draw suit considering rotation
  ctx.fillText(suit, 37, 15); // Draw another suit considering rotation

  ctx.restore(); // Restore the state after transformations
}



export function drawPatternOf8(ctx, x, y, suit, color) {
  ctx.save(); // Save current state
  ctx.font = '27px "Dancing Script"'; // Set font size and family
  ctx.fillStyle = color; // Set fill color for the text

  // Draw the first set of suits
  ctx.fillText(suit, x + 23, y + 30); // Draw first suit
  ctx.fillText(suit, x + 39, y + 50); // Draw second suit
  ctx.fillText(suit, x + 55, y + 30); // Draw third suit
  ctx.fillText(suit, x + 23, y + 70); // Draw fourth suit
  ctx.fillText(suit, x + 55, y + 70); // Draw fifth suit

  // Draw the second set with transformation
  ctx.translate(x + 75, y + 115); // Move to the starting point
  ctx.rotate(Math.PI); // Rotate by 180 degrees
  ctx.fillText(suit, 5, 15); // Draw suit considering rotation
  ctx.fillText(suit, 21, 35); // Draw another suit considering rotation
  ctx.fillText(suit, 37, 15); // Draw yet another suit considering rotation

  ctx.restore(); // Restore the state after transformations
}



export function drawPatternOf9(ctx, x, y, suit, color) {
  ctx.save(); // Save current state
  ctx.font = '27px "Dancing Script"'; // Set font size and family
  ctx.fillStyle = color; // Set fill color for the text

  // Draw the first set of suits
  ctx.fillText(suit, x + 23, y + 30); // Draw first suit
  ctx.fillText(suit, x + 55, y + 30); // Draw second suit
  ctx.fillText(suit, x + 23, y + 58); // Draw third suit
  ctx.fillText(suit, x + 55, y + 58); // Draw fourth suit
  ctx.fillText(suit, x + 39, y + 71); // Draw fifth suit

  // Draw the second set with transformation
  ctx.translate(x + 75, y + 115); // Move to the starting point
  ctx.rotate(Math.PI); // Rotate by 180 degrees
  ctx.fillText(suit, 5, 15); // Draw suit considering rotation
  ctx.fillText(suit, 5, 42); // Draw another suit considering rotation
  ctx.fillText(suit, 37, 42); // Draw another suit considering rotation
  ctx.fillText(suit, 37, 15); // Draw yet another suit considering rotation

  ctx.restore(); // Restore the state after transformations
}



export function drawPatternOf10(ctx, x, y, suit, color) {
  ctx.save(); // Save current state
  ctx.font = '27px "Dancing Script"'; // Set font size and family
  ctx.fillStyle = color; // Set fill color for the text

  // Draw the first set of suits
  ctx.fillText(suit, x + 23, y + 30); // Draw first suit
  ctx.fillText(suit, x + 55, y + 30); // Draw second suit
  ctx.fillText(suit, x + 23, y + 58); // Draw third suit
  ctx.fillText(suit, x + 55, y + 58); // Draw fourth suit
  ctx.fillText(suit, x + 39, y + 45); // Draw fifth suit

  // Draw the second set with transformation
  ctx.translate(x + 75, y + 115); // Move to the starting point
  ctx.rotate(Math.PI); // Rotate by 180 degrees
  ctx.fillText(suit, 21, 28); // Draw suit considering rotation
  ctx.fillText(suit, 5, 15); // Draw another suit considering rotation
  ctx.fillText(suit, 5, 15); // Draw yet another suit considering rotation
  ctx.fillText(suit, 5, 42); // Draw another suit considering rotation
  ctx.fillText(suit, 37, 42); // Draw another suit considering rotation
  ctx.fillText(suit, 37, 15); // Draw another suit considering rotation

  ctx.restore(); // Restore the state after transformations
}




export function drawPatternOfKQ(ctx, x, y, suit, color, rank) {
  ctx.save(); // Save current state
  ctx.font = '45px "Dancing Script"'; // Set font size and family
  ctx.fillStyle = color; // Set fill color for the text

  // Draw the first set of suits and text
  ctx.fillText(suit, x + 58, y + 38); // Draw suit
  ctx.fillText(rank, x + 30, y + 80); // Draw rank

  // Draw the second set with transformation
  ctx.translate(x + 75, y + 115); // Move to the starting point
  ctx.rotate(Math.PI); // Rotate by 180 degrees
  ctx.fillText(suit, 42, 18); // Draw suit considering rotation

  ctx.restore(); // Restore the state after transformations
}



export function drawPatternOfJ(ctx, x, y, suit, color) {
  ctx.save(); // Save current state
  ctx.font = '45px "Dancing Script"'; // Set font size and family
  ctx.fillStyle = color; // Set fill color for the text

  // Draw the first set of suits and text
  ctx.fillText(suit, x + 58, y + 38); // Draw suit
  ctx.fillText('J', x + 38, y + 85); // Draw 'J'

  // Draw the second set with transformation
  ctx.translate(x + 75, y + 115); // Move to the starting point
  ctx.rotate(Math.PI); // Rotate by 180 degrees
  ctx.fillText(suit, 42, 18); // Draw suit considering rotation

  ctx.restore(); // Restore the state after transformations
}


