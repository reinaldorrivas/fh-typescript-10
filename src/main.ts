import { decoratorsIntro } from "./decorators/decoratorsIntro";
import { decoratorUseCaseExample } from "./decorators/decoratorUseCaseExample";
import { factoryDecorators } from "./decorators/factoryDecorators";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
  <div>
    <h1>TypeScript Generics</h1>
  </div>
`;

decoratorsIntro();
factoryDecorators();
decoratorUseCaseExample();
