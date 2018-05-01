export default ({ label, children, ...props }) => (
  <div className="control">
    {label}:&nbsp;
    <div className="select is-small is-black">
      <select {...props}>{children}</select>
    </div>
  </div>
)
