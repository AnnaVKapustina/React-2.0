import React, { useCallback } from 'react';
import { toggleShowName } from './action/profile';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from './action/profile';
import Input from './Input';
import { profileSelector } from './selectors/profile_selectors';

export default function Profile() {
    const { showName, name } = useSelector(profileSelector)
    const dispatch = useDispatch()

    const setShowName = useCallback(() => {
        dispatch(toggleShowName)
    }, [dispatch])

    const handleNameSubmit = (newName) => {
        dispatch(changeName(newName))
    }
    return (
        <div className="profile">
            <h2>Profile</h2>

            <label for="chek_name"><input
                id="chek_name"
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            /> Show name</label>
            {showName && <div>{name}</div>}
            <Input
                autoFocus
                label="Ваше имя"
                helperText = 'Чтобы добавить свое имя на страницу профиля, введите его в поле и нажмите кнопку "Отправить"'
                onSubmit={handleNameSubmit} />
        </div>

    )
}