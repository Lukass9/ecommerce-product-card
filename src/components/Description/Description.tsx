import "./description.scss";

export const Description = ({
  name,
  title,
  description,
}: {
  name: string;
  title: string;
  description: string;
}) => {
  return (
    <div className='descriptioin-wrapp'>
      <h5 className='name'>{title}</h5>
      <h1 className='title'>{name}</h1>
      <p className='description'>{description}</p>
    </div>
  );
};
