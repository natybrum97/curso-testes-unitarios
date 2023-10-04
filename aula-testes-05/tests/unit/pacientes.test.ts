import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "protocols-generator";

jest.mock('uuid', () => ({ v4: () => 'Protocol gerado pelo mock'}))


describe("protocol tests", () => {
  it("deve retornar o protocolo do paciente no formato correto", async () => {

    const firstName = faker.person.firstName();
    const lastName =faker.person.lastName();
    const boolean = faker.datatype.boolean();
    const protocol = generateProtocolForPacient(firstName, lastName, boolean);
    expect(protocol).toEqual({
    priority: boolean,
    date: expect.any(Date),
    pacient: `${firstName} ${lastName}`,
    protocol: "Protocol gerado pelo mock"
    });
  });
});