export default function UpiPayment({ onPaid }) {
  return (
    <section className="max-w-xl mx-auto mt-20 p-6 bg-black/70 rounded-2xl text-center">
      <h2 className="text-2xl font-bold text-fire">Pay via UPI</h2>

      <p className="text-gray-400 mt-2">
        Pay ₹199 and unlock CLASHER Premium (Lifetime)
      </p>

      {/* QR Image */}
      <img
        src="/upi-qr.png"
        alt="UPI QR"
        className="mx-auto mt-5 w-52 rounded-xl border border-fire"
      />

      <p className="mt-3 text-sm text-gray-300">
        UPI ID: <span className="text-neon font-semibold">yourupi@upi</span>
      </p>

      <p className="text-xs text-gray-500 mt-2">
        After payment, click below and enter UTR number
      </p>

      <button
        onClick={onPaid}
        className="mt-6 px-8 py-3 bg-fire rounded-xl font-semibold"
      >
        ✅ I Have Paid
      </button>
    </section>
  );
}
