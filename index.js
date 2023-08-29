class LunarCraft {
    constructor() {
        // Initialize the spacecraft's initial position and direction
        this.position = { x: 0, y: 0, z: 0 };
        this.directions = ["N", "E", "S", "W", "Up", "Down"];
        // Initially spacecraft is facing North (0 index in directions array)
        this.currentDirectionIndex = 0;
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
            }
        }
    }

    // Move the spacecraft forward based on its current direction
    moveForward() {
        switch (this.directions[this.currentDirectionIndex]) {
            case "N":
                this.position.y += 1;
                break;
            case "E":
                this.position.x += 1;
                break;
            case "S":
                this.position.y -= 1;
                break;
            case "W":
                this.position.x -= 1;
                break;
            case "Up":
                this.position.z += 1;
                break;
            case "Down":
                this.position.z -= 1;
                break;
        }
    }

    // Move the spacecraft backward based on its current direction
    moveBackward() {
        switch (this.directions[this.currentDirectionIndex]) {
            case "N":
                this.position.y -= 1;
                break;
            case "E":
                this.position.x -= 1;
                break;
            case "S":
                this.position.y += 1;
                break;
            case "W":
                this.position.x += 1;
                break;
            case "Up":
                this.position.z -= 1;
                break;
            case "Down":
                this.position.z += 1;
                break;
        }
    }

    // Rotates the spacecraft 90 degree to the right by its current direction
    turnRight() {
        this.currentDirectionIndex = (this.currentDirectionIndex + 1) % this.directions.length;
    }

    // Rotates the spacecraft 90 degree to the left by its current direction
    turnLeft() {
        this.currentDirectionIndex = (this.currentDirectionIndex - 1 + this.directions.length) % this.directions.length;
    }

    // Changing angle of the spacecraft by rotating upwards
    turnUp() {
        if (this.directions[this.currentDirectionIndex] === "N" || this.directions[this.currentDirectionIndex] === "S") {
            this.directions[this.currentDirectionIndex] = "Up";
        }
    }

    // Changing angle of the spacecraft by rotating downwards
    turnDown() {
        if (this.directions[this.currentDirectionIndex] === "N" || this.directions[this.currentDirectionIndex] === "S") {
            this.directions[this.currentDirectionIndex] = "Down";
        }
    }

    // Get the current position of the spacecraft
    getPosition() {
        return this.position;
    }

    // Get the current direction the spacecraft is facing
    getDirection() {
        return this.directions[this.currentDirectionIndex];
    }
}

// Example usage
const craft = new LunarCraft();
const commands = ["f", "r", "u", "b", "l"];
craft.executeCommands(commands);
console.log("Final Position:", craft.getPosition());
console.log("Final Direction:", craft.getDirection());