const Children = ({ children }) => {
  return (
    <>
      <div>
        <p>O contéudo abaixo estpa sendo recebido através de "children"</p>
        {children}
      </div>
    </>
  );
};
export default Children;
