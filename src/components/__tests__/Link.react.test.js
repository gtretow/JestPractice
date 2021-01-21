import React from "react";
import renderer from "react-test-renderer";
import Link from "../Link.react";

// Caso de teste atualizado com um Link para um endereço diferente
it("renderiza corretamente", () => {
  const tree = renderer
    .create(<Link page="http://www.instagram.com">Instagram</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* it("will fail every time", () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: "LeBron James",
  };

  expect(user).toMatchSnapshot();
});

// Snapshot
exports[`will fail every time 1`] = `
  Object {
    "createdAt": 2018-05-19T23:36:09.816Z,
    "id": 3,
    "name": "LeBron James",
  }
  `; */

/* it("will check the matchers and pass", () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: "LeBron James",
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
  });
}); */

// Snapshot
/* exports[`will check the matchers and pass 1`] = `
  Object {
    "createdAt": Any<Date>,
    "id": Any<Number>,
    "name": "LeBron James",
  }
  `; */
//detalhes sobre tests com snapshot

/* Por exemplo, se você tem um componente Clock que usa Date.now(), o snapshot gerado a partir deste componente será diferente cada vez que o caso de teste é executado. Neste caso podemos simular o método Date.now() para retornar um valor consistente toda vez que o teste é executado:

Date.now = jest.fn(() => 1482363367071);

Agora, toda vez que o caso de teste de snapshot é executado, Date.now() retornará consistentemente 1482363367071. Isso resultará no mesmo snapshot sendo gerado para este componente independentemente de quando o teste é executado. */
