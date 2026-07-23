export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923337411400"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl hover:bg-green-600 transition flex items-center gap-2 font-semibold z-50"
    >
      <span className="text-xl">
        💬
      </span>

      WhatsApp Us
    </a>
  );
}