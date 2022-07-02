import { ConteinerInput } from "./styled";

interface InputInterface {
  name: string;
  label: string;
}

const Input = ({ label, name }: InputInterface) => {
  return (
    <ConteinerInput>
      <label htmlFor={name}>{label}</label>
      <input name={name} type="text" />
    </ConteinerInput>
  );
};

export { Input };
