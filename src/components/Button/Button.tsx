import "./button.scss";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className='btn'>{children}</button>;
};
