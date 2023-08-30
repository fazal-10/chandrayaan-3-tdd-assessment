const LunarCraft = require('./index'); // Adjust the path accordingly

describe('LunarCraft', () => {

    // test('Executing ["f"] command should move spacecraft forward', () => {
    //     const craft = new LunarCraft();
    //     const commands = ["f"];
    //     craft.executeCommands(commands);
    //     expect(craft.getPosition()).toEqual({ x: 0, y: 1, z: 0 });
    //     expect(craft.getDirection()).toBe("N");
    // });
    
    test('Executing ["r"] command should turn spacecraft right', () => {
        const craft = new LunarCraft();
        const commands = ["r"];
        craft.executeCommands(commands);
        expect(craft.getPosition()).toEqual({ x: 0, y: 0, z: 0 });
        expect(craft.getDirection()).toBe("E");
    });


    test('Executing ["b"] command should move spacecraft backward', () => {
        const craft = new LunarCraft();
        const commands = ["b"];
        craft.executeCommands(commands);
        expect(craft.getPosition()).toEqual({ x: 0, y: -1, z: 0 });
        expect(craft.getDirection()).toBe("N");
    });

    test('Executing ["l"] command should turn spacecraft left', () => {
        const craft = new LunarCraft();
        const commands = ["l"];
        craft.executeCommands(commands);
        expect(craft.getPosition()).toEqual({ x: 0, y: 0, z: 0 });
        expect(craft.getDirection()).toBe("W");
    });

    
});