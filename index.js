class LunarCraft {
    constructor() {
        this.position = { x: 0, y: 0, z: 0 };
        this.directions = ["N", "E", "S", "W", "Up", "Down"];
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

    turnRight() {
        this.currentDirectionIndex = (this.currentDirectionIndex + 1) % this.directions.length;
    }

    turnLeft() {
        this.currentDirectionIndex = (this.currentDirectionIndex - 1 + this.directions.length) % this.directions.length;
    }

    turnUp() {
        if (this.directions[this.currentDirectionIndex] === "N" || this.directions[this.currentDirectionIndex] === "S") {
            this.directions[this.currentDirectionIndex] = "Up";
        }
    }

    turnDown() {
        if (this.directions[this.currentDirectionIndex] === "N" || this.directions[this.currentDirectionIndex] === "S") {
            this.directions[this.currentDirectionIndex] = "Down";
        }
    }

    getPosition() {
        return this.position;
    }

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