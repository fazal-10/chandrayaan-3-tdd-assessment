class LunarCraft {
    constructor() {
        // Initialize the spacecraft's initial position and direction
        this.position = { x: 0, y: 0, z: 0 };
        //creating the boundary
        this.positiveBoundary = { x: 5, y: 5, z: 5 };
        this.negativeBoundary = { x: -5, y: -5, z: -5 };
        // Start facing North (0 index in directions array)
        this.currentDirection = "N";

        //"originalHorizontalDirection" is required bcoz when we change spacecraft direction to Up or Down ,we need to store previous direction bcoz after doing Up or Down,if we needed to change spacecraft position to its left or right we need this horizontal direction ,so based on that we decide final direction of spacecraft.
        this.originalHorizontalDirection = "N";
    }

    //boundary check for coorinate value (increment case) 
    boundaryCheckInc(coordinate) {
        if (this.position[coordinate] >= this.negativeBoundary[coordinate] && this.position[coordinate] < this.positiveBoundary[coordinate])
            return true;
        else return false;
    }
    //boundary check for coorinate value (decrement case) 
    boundaryCheckDec(coordinate) {
        if (this.position[coordinate] > this.negativeBoundary[coordinate] && this.position[coordinate] <= this.positiveBoundary[coordinate])
            return true;
        else return false;
    }


    executeCommands(commands) {
        for (const command of commands) {
            switch (command) {
                case "f":
                    this.moveForward();
                    break;
                case "b":
                    this.moveBackward();
                    break;
                case "r":
                    this.turnRight();
                    break;
                case "l":
                    this.turnLeft();
                    break;
                case "u":
                    this.turnUp();
                    break;
                case "d":
                    this.turnDown();
                    break;
                default:
                    console.log("Invalid command:", command);
                    break;
            }
        }
    }

    // Move the spacecraft forward based on its current direction
    moveForward() {
        switch (this.currentDirection) {
            case "N":
                if (this.boundaryCheckInc("y"))
                    this.position.y += 1;
                break;
            case "E":
                if (this.boundaryCheckInc("x"))
                    this.position.x += 1;
                break;
            case "S":
                if (this.boundaryCheckDec("y"))
                    this.position.y -= 1;
                break;
            case "W":
                if (this.boundaryCheckDec("x"))
                    this.position.x -= 1;
                break;
            case "Up":
                if (this.boundaryCheckInc("z"))
                    this.position.z += 1;
                break;
            case "Down":
                if (this.boundaryCheckDec("z"))
                    this.position.z -= 1;
                break;
        }
    }

    // Move the spacecraft backward based on its current direction
    moveBackward() {
        switch (this.currentDirection) {
            case "N":
                if (this.boundaryCheckDec("y"))
                    this.position.y -= 1;
                break;
            case "E":
                if (this.boundaryCheckDec("x"))
                    this.position.x -= 1;
                break;
            case "S":
                if (this.boundaryCheckInc("y"))
                    this.position.y += 1;
                break;
            case "W":
                if (this.boundaryCheckInc("x"))
                    this.position.x += 1;
                break;
            case "Up":
                if (this.boundaryCheckDec("y"))
                    this.position.z -= 1;
                break;
            case "Down":
                if (this.boundaryCheckInc("z"))
                    this.position.z += 1;
                break;
        }
    }

    // Rotates the spacecraft 90 degree to the right by its current direction
    turnRight() {
        switch (this.currentDirection) {
            case "N":
                this.currentDirection = "E";
                this.originalHorizontalDirection = "E";
                break;
            case "E":
                this.currentDirection = "S";
                this.originalHorizontalDirection = "S";
                break;
            case "S":
                this.currentDirection = "W";
                this.originalHorizontalDirection = "W";
                break;
            case "W":
                this.currentDirection = "N";
                this.originalHorizontalDirection = "N";
                break;

            //for Up & Down cases, we need to do same thing,that's why if-else ladder will execute for both cases
            case "Up":
            case "Down":
                if (this.originalHorizontalDirection == "N") {
                    this.currentDirection = "E";
                    this.originalHorizontalDirection = "E";
                }
                else if (this.originalHorizontalDirection == "E") {
                    this.currentDirection = "S";
                    this.originalHorizontalDirection = "S";
                }
                else if (this.originalHorizontalDirection == "S") {
                    this.currentDirection = "W";
                    this.originalHorizontalDirection = "W";
                }
                else {
                    this.currentDirection = "N";
                    this.originalHorizontalDirection = "N";
                }
                break;
        }
    }

    // Rotates the spacecraft 90 degree to the left by its current direction
    turnLeft() {
        switch (this.currentDirection) {
            case "N":
                this.currentDirection = "W";
                this.originalHorizontalDirection = "W";
                break;
            case "E":
                this.currentDirection = "N";
                this.originalHorizontalDirection = "N";
                break;
            case "S":
                this.currentDirection = "E";
                this.originalHorizontalDirection = "E";
                break;
            case "W":
                this.currentDirection = "S";
                this.originalHorizontalDirection = "S";
                break;

            //for Up & Down cases, we need to do same thing,that's why if-else ladder will execute for both cases
            case "Up":
            case "Down":
                if (this.originalHorizontalDirection == "N") {
                    this.currentDirection = "W";
                    this.originalHorizontalDirection = "W";
                }
                else if (this.originalHorizontalDirection == "E") {
                    this.currentDirection = "N";
                    this.originalHorizontalDirection = "N";
                }
                else if (this.originalHorizontalDirection == "S") {
                    this.currentDirection = "E";
                    this.originalHorizontalDirection = "E";
                }
                else {
                    this.currentDirection = "S";
                    this.originalHorizontalDirection = "S";
                }
                break;
        }
    }

    // Changing angle of the spacecraft by rotating Upwards
    turnUp() {
        this.currentDirection = "Up";
    }

    // Changing angle of the spacecraft by rotating Downwards
    turnDown() {
        this.currentDirection = "Down";
    }

    // Get the current position of the spacecraft
    getPosition() {
        return this.position;
    }

    // Get the current direction the spacecraft is facing
    getDirection() {
        return this.currentDirection;
    }

}

const craft = new LunarCraft();
// const commands = ["f", "l", "u", "b", "r"];
// const commands = ["f", "f", "f", "f", "f", "f"];
const commands = ["b", "b", "b", "b", "b", "b"];
craft.executeCommands(commands);
console.log("Final Position:", craft.getPosition());
console.log("Final Direction:", craft.getDirection());

module.exports = LunarCraft;