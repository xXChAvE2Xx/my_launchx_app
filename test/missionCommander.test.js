const MissionCommander = require("./../app/missionCommander");


describe("Esto es una prueba para missionCommander", () =>{
    test("1) Creando un objeto de missionCommander", ()=>{
        const missionCommander = new MissionCommander("Woopa");
        expect(missionCommander.name).toBe("Woopa");
    })
})