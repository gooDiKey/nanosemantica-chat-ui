import React from 'react'
import BaseModal from '../../UI/BaseModal/BaseModal'
import BaseButton from '../../UI/BaseButton/BaseButton'
import './ResetChatAlertModal.scss';

const ResetChatAlertModal = ({ clearHistory, closeModal }) => {
  return (
    <BaseModal closeModal={ closeModal }>
      <div className="reset-chat-alert-modal">
        <h3>Внимание!</h3>
        <span>
          Вы собираетесь очистить историю чата. Все данные будут удалены без возможности восстановления!
        </span>
        <div className="alert-buttons">
          <BaseButton additionalClass="confirm" onClick={ clearHistory }>Все равно удалить</BaseButton>
          <BaseButton additionalClass="cancel" onClick={ closeModal }>Отменить удаление</BaseButton>
        </div>
      </div>
    </BaseModal>
  )
}

export default ResetChatAlertModal
