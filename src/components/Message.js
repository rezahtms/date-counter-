const Message = ({ count }) => {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <p>
      {count < 0 ? Math.abs(count) : count === 0 ? null : count}
      {count === 0
        ? " today is "
        : count > 0
        ? " days from today is "
        : " days ago was "}
      {date.toDateString()}
    </p>
  );
};

export default Message;
