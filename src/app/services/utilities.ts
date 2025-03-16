
/**
   * Determines if a point @param px @param py is within the area of the points
   * given in the parameters. Area for calculating if a point is in bound is
   * given by
   * @param top 
   * @param left 
   * @param bottom 
   * @param right 
   * @param px The x point of interest in the cartesian plane
   * @param py The y point of interest in the cartesian plane
   * @returns 
   */
export function isInbound(top:number, left:number, bottom:number, right:number, px:number, py:number){
    let p1: Point = { x: left, y: top }
    let p2: Point = { x: right, y: top }
    let p3: Point = { x: right, y: bottom }
    let p4: Point = { x: left, y: bottom }

    // p1---------------p2
    // |                |
    // |                |
    // |                |
    // p4---------------p3
    return (px >= p1.x && px <= p2.x && px <= p3.x && px >= p4.x) &&
            (py >= p1.y && py >= p2.y && py <= p3.y && py <= p4.y)
}


interface Point{
  x: number
  y: number
}