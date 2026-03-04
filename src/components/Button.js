export const PrimaryButton = ({ children, className = "" }) => (
  <button className={`primary-btn text-white font-semibold py-4 px-8 rounded-lg text-lg shadow-lg ${className}`}>
    {children}
  </button>
);