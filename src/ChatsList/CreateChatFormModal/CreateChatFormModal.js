import React, {useState} from 'react'
import BaseModal from '../../UI/BaseModal/BaseModal';
import BaseButton from '../../UI/BaseButton/BaseButton';
import BaseInput from '../../UI/BaseInput/BaseInput';
import './CreateChatFormModal.scss';

const CreateChatFormModal = ({ createNewChat, closeModal }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [infAge, setInfAge] = useState('');
  const [error, setError] = useState();

  const createChat = e => {
    e.preventDefault();
    if (!(name && age && infAge)) {
      setError('Заполните все поля!');
      return;
    }

    if (name.trim().search(/^[A-Za-zА-Яа-я]/g)) {
      setError('Имя может состоять только из русских и английских букв');
      return;
    }

    if ( age > 120 || age < 8 || infAge > 120 || infAge < 8) {
      setError('Возраст должен быть в переделах от 8 до 120 лет');
      return;
    }

    createNewChat(name, age, infAge);
    closeModal();
  }

  return (
    <BaseModal closeModal={ closeModal }>
      <div className="create-chat">
        <h3>Создать новый чат</h3>
        <form>
          <BaseInput
            type="text"
            value={ name }
            onFocus={ () => setError() }
            onInput={ e => setName(e.target.value) }
            placeholder="Введите ваше имя"
          />
          <BaseInput
            type="number"
            value={ age }
            onFocus={ () => setError() }
            onInput={ e => setAge(e.target.value) }
            placeholder="Введите возраст инфа"
          />
          <BaseInput
            type="number"
            value={ infAge }
            onFocus={ () => setError() }
            onInput={ e => setInfAge(e.target.value) }
            placeholder="Введите ваш возраст"
          />
          <div className="error">
            { error && <span className="error-text">{ error }</span> }
          </div>
          <BaseButton onClick={ createChat }>Создать</BaseButton>
        </form>
      </div>
    </BaseModal>
  )
}

export default CreateChatFormModal
