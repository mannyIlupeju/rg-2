import { FaEye, FaEyeSlash } from 'react-icons/fa'

const PasswordInput = ({ id, label, value, onChange, hidePassword, toggleVisibility }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-gray-800">{label}</label>
    <div className="relative">
      <input
        type={hidePassword ? 'password' : 'text'}
        name={id}
        id={id}
        className="p-2 formInput text-gray-800"
        value={value}
        onChange={onChange}
        required
      />
      {hidePassword ? (
        <FaEyeSlash className="absolute top-3 left-60 text-zinc-800" onClick={toggleVisibility} />
      ) : (
        <FaEye className="absolute top-3 left-60 text-zinc-800" onClick={toggleVisibility} />
      )}
    </div>
  </div>
);

export default PasswordInput