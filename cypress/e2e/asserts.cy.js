//Assertivas de igualdades
it("Igualdade", () => {
  const a = 1;

  expect(a).equal(1);
  expect(a, "Deveria ser 1").equal(1);
  expect(a).to.be.equal(1);
  expect("a").not.to.be.equal("b");
});

it("Truthy", () => {
  const a = true;
  const b = null;
  let c;

  expect(a).to.be.true;
  expect(true).to.be.true;
  expect(b).to.be.null;
  expect(a).to.be.not.null;
  expect(c).to.be.undefined;
});

it("Object Equality", () => {
  const obj = {
    a: 1,
    b: 2,
  };

  expect(obj).equal(obj);
  expect(obj).equals(obj);
  expect(obj).eq(obj);
  expect(obj).to.be.equal(obj);

  //'deep' ou 'eql' compara as propriedas não a referência
  expect(obj).to.be.deep.equal({ a: 1, b: 2 });
  expect(obj).eql({ a: 1, b: 2 });

  expect(obj).include({ a: 1 });
  expect(obj).to.have.property("a");
  expect(obj).to.have.property("b", 2);
  expect(obj).to.not.be.empty;
  expect({}).to.be.empty;
});

it("Arrays", () => {
  const arr = [1, 2, 3];

  expect(arr).to.have.members([1, 2, 3]);
  expect(arr).to.include.members([1, 2, 3]);
  expect(arr).to.not.be.empty;
  expect([]).to.be.empty;
});

it("Types", () => {
  const num = 1;
  const str = "String";

  expect(num).to.be.a("number");
  expect(str).to.be.a("string");
  expect({}).to.be.a("object");
  expect({}).to.be.an("object");
  expect([]).to.be.an("array");
});

it("String", () => {
  const str = "String de teste";

  expect(str).to.equal("String de teste");
  expect(str).to.have.length(15);
  expect(str).to.contains("de");
  //match para comparacoes com regex
  expect(str).to.match(/de/);
  expect(str).to.match(/^String/); //começa com String
  expect(str).to.match(/teste$/); //termina com teste
  expect(str).to.match(/.{15}/); //tamanho 15
  expect(str).to.match(/\w+/); // tem somente letras
  expect(str).to.match(/\D+/); // não contém números
});

it("Numbers", () => {
  const number = 4;
  const floatNumber = 5.2123;

  expect(number).to.be.equal(4);
  expect(number).to.be.above(3); //acima
  expect(number).to.be.below(7); //acima
  expect(floatNumber).to.be.equal(5.2123);
  expect(floatNumber).to.be.closeTo(5.2, 0.1); //próximo de 5.2 com a precisão de 0.1
  expect(floatNumber).to.be.above(5);
});
