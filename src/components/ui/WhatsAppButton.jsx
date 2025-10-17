const WhatsAppButton = ({ message, className = "" }) => {
  const phone = "255786216284";
  const text = encodeURIComponent(message || "Hello JS Royal, I want to place an order!");
  const url = `https://wa.me/${phone}?text=${text}`;

  return (
    <button
      onClick={() => window.open(url, "_blank")}
      className={`bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 font-semibold ${className}`}
    >
      📱 Order via WhatsApp
    </button>
  );
};

export default WhatsAppButton;