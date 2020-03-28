import { parse } from "@babel/parser";
import generate from "@babel/generator";
import traverse from "@babel/traverse";

const compile = code => {
  const ast = parse(code);
  traverse(ast, {
    Identifier: path => {
      console.log("Visiting: " + path.node.name);
    }
  });
  const output = generate(ast, {}, code);
  return output.code;
};

const code = `
const up = value => {
  return value += 1
};
`;

console.log(compile(code));
