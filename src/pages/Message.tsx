//PascalCasing
function Message() {
  const name = "Filip";
  if (name)
    return (
      <div>
        <h1>Hello {name}</h1>
      </div>
    );
  return <h1>Hello World</h1>;
}

export default Message;
