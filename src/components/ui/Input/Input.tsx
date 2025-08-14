import styles from "./Input.module.css";

interface PropType {
  label?: string;
  name: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const Input = (props: PropType) => {
  const {
    label,
    name,
    id,
    type = "text",
    placeholder,
    required = false,
    className,
  } = props;

  return (
    <label htmlFor={id} className={styles.label}>
      {label}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        className={`${styles.input} ${className}`}
      />
    </label>
  );
};

export default Input;
