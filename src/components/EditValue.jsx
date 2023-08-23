const EditValue = ({ value, setValue }) => {
  return (
    <form
      className="flex items-center w-fit  justify-center  "
      onSubmit={(e) => e.preventDefault()}
      action=""
    >
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        className="focus:ring-2  rounded focus:ring-sky-500 text-center w-[158px] text-xl w bg-inherit outline-none"
      />
    </form>
  );
};
export default EditValue;
