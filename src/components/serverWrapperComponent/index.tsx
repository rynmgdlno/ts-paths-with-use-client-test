import { UseClientWrapperComponent, LeafComponent } from "@components";

export const ServerWrapperComponent = () => {
  return (
    <div>
      <UseClientWrapperComponent />
      <h1>ServerWrapperComponent</h1>
    </div>
  );
};