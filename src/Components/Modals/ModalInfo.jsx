import { motion } from "motion/react"
import PropTypes from "prop-types";


// eslint-disable-next-line react/prop-types
const ModalInfo = ({ visible, message, onClose, type }) => {
    if (!visible) {
        return null;
    }
    const modalClass = type === "success" ? "notification-success" : "notification-error";
    const closeButtonClass = type === "success" ? "close-btn-success" : "close-btn-error";
  
    return (
      <div className="modal-overlay">
        <motion.div
          className={modalClass}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p>{message}</p>
          </div>
          <button
            className={closeButtonClass}
            onClick={onClose}
          >
            X
          </button>
        </motion.div>
      </div>
    );
  };
  
  ModalInfo.propTypes = {
    visible: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["success", "error"]).isRequired,
  };
  
  export default ModalInfo;