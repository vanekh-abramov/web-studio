import style from "./FeedbackForm.module.scss";
import { Btn } from "../btn/Btn";
import { SocialNetwork } from "../socialNetwork/SocialNetwork";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export const FeedbackForm = ({ onClose }) => {
  const handleShadowClick = (event) => {
    event.stopPropagation();
    if (event.target.classList.contains(style.shadow)) {
      onClose();
    }
  };

  return (
    <div className={style.feedback}>
      <div className={style.shadow} onClick={handleShadowClick}>
        <div className={style.content}>
          <div className={style.img}>
            <img src='/img/feedback.jpeg' alt='img' />
          </div>
          <div className={style.form}>
            <div className={style.inputsGroup}>
              <label>
                <input
                  className={style.input}
                  placeholder='Телефон'
                  type='text'
                />
              </label>
              <label>
                <input className={style.input} placeholder='Имя' type='text' />
              </label>
              <label>
                <input
                  className={style.input}
                  placeholder='Email'
                  type='text'
                />
              </label>
              <label>
                <input
                  className={style.input}
                  placeholder='Тип сайта'
                  type='text'
                />
              </label>
            </div>
            <span className={style.contactUs}>Свяжитесь с нами</span>
            <SocialNetwork />
            <Btn txt='Заказать консультацию' />
          </div>
          <IconButton
            onClick={onClose}
            aria-label='close'
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              color: "rgb(235, 91, 41)",
            }}
          >
            <CloseIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
