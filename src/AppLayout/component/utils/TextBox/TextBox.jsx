function textBox({ name, type, validdate, register ,errors , label}) {
  return (
    <div>
      <input type={type} {...register(name,validdate)} placeholder={label}/>
      {errors[name] && <div style={{ color: 'red'}}>{errors[name].message}</div>}
    </div>
  )
}

export default textBox;