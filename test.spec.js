const LunarCraft = require('./index'); // Adjust the path accordingly

describe('LunarCraft', () => {
    test('example test case', () => {
        const craft = new LunarCraft();
        const commands = ["f"];
        craft.executeCommands(commands);
        expect(craft.getPosition()).toEqual({ x: 0, y: 1, z: 0 });
        expect(craft.getDirection()).toEqual("N");
    });

    // Add more test cases as needed
});