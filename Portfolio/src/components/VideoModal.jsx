import Modal from "react-modal";

// Only register ONCE
Modal.setAppElement("#root");

export default function VideoModal({ isOpen, onClose, videoSrc }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      style={{
        content: {
          width: "85%",
          maxWidth: "950px",
          padding: 0,
          inset: "50% auto auto 50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "14px",
          background: "#000",
          border: "none",
          overflow: "hidden",
          position: "relative",
        },
        overlay: {
          background: "rgba(0,0,0,0.8)",
          zIndex: 2000,
        },
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: "#ff3b3b",
          border: "none",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "bold",
          zIndex: 3000,
          transition: "0.25s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        ✖
      </button>

      {/* Video */}
      <video
        src={videoSrc}
        controls
        autoPlay
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "85vh",
          display: "block",
        }}
      />
    </Modal>
  );
}
