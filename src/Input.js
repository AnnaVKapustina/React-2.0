import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Input = (props) => {
  const { onSubmit, label = 'Сообщение', helperText = 'Чтобы добавить сообщение в чат, введите текст и нажмите кнопку "Отправить"' } = props

  const [inputValue, setInputValue] = React.useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(inputValue)
      setInputValue('')
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        required
        autoFocus
        type="text"
        value={inputValue}
        onChange={handleChange}
        id="standard-helperText"
        variant="filled"
        label={label}
        helperText={helperText}
      />
      <Button type="submit" variant="contained" color="primary">Отправить</Button>
    </form>
  )
}
export default Input