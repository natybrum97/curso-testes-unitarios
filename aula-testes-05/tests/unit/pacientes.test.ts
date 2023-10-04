import { generateProtocolForPacient } from "protocols-generator";

jest.mock('uuid', () => ({ v4: () => 'Protocol gerado pelo mock'}))


describe("protocol tests", () => {
  it("deve retornar o protocolo do paciente no formato correto", async () => {
    const protocol = generateProtocolForPacient("Thor", "Moura", false);
    expect(protocol).toEqual({
    priority: false,
    date: new Date(),
    pacient: "Thor Moura",
    protocol: "Protocol gerado pelo mock"
    });
  });
});