import { FormInputLabel,Input,Group } from "./form-input.styles"

const FormInput = ({ label, ...restProps }) => {
  return (
    <Group>
      <Input {...restProps} />
      {label && (
        <FormInputLabel
        shrink = {restProps.value.length}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
