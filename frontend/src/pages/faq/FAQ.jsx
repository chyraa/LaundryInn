import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  // State untuk tracking pertanyaan yang sedang dibuka
  const [openQuestion, setOpenQuestion] = useState(null);

  // Data FAQ
  const faqData = [
    {
      id: 1,
      question: "Bagaimana cara memesan layanan LaundryInn?",
      answer: "Untuk memesan layanan LaundryInn, Anda dapat mengikuti langkah berikut:\n1. Login ke akun Anda\n2. Pilih layanan yang diinginkan (Regular atau Custom)\n3. Masukkan detail pesanan\n4. Konfirmasi dan lakukan pembayaran"
    },
    {
      id: 2,
      question: "Berapa lama waktu pengerjaan laundry?",
      answer: "Waktu pengerjaan laundry bervariasi tergantung jenis layanan:\n- Regular: 2-3 hari\n- Express: 24 jam\n- Super Express: 6-12 jam\nWaktu bisa berbeda tergantung jumlah item dan tingkat kesulitan"
    },
    {
      id: 3,
      question: "Apa saja metode pembayaran yang tersedia?",
      answer: "Kami menerima berbagai metode pembayaran:\n- Transfer Bank\n- E-wallet (OVO, GoPay, DANA)\n- Cash on Delivery\n- Kartu Kredit/Debit"
    },
    {
      id: 4,
      question: "Bagaimana jika ada pakaian yang hilang atau rusak?",
      answer: "Kami memiliki prosedur khusus untuk menangani kehilangan atau kerusakan:\n1. Laporkan segera melalui fitur Contact Support\n2. Tim kami akan melakukan investigasi\n3. Jika terbukti kesalahan kami, kami akan memberikan kompensasi sesuai kebijakan"
    },
    {
      id: 5,
      question: "Apakah LaundryInn menyediakan layanan antar-jemput?",
      answer: "Ya, LaundryInn menyediakan layanan antar-jemput gratis untuk:\n- Minimal order Rp50.000\n- Area dalam radius 5km\nUntuk area lebih jauh mungkin dikenakan biaya tambahan"
    },
    {
      id: 6,
      question: "Bagaimana cara melacak status pesanan?",
      answer: "Anda dapat melacak status pesanan dengan cara:\n1. Login ke akun Anda\n2. Klik menu 'Pesanan'\n3. Pilih pesanan yang ingin dilacak\n4. Lihat detail status dan progress pengerjaan"
    }
  ];

  // Toggle pertanyaan
  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="faq-container">
      <header className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Temukan jawaban untuk pertanyaan umum tentang layanan LaundryInn</p>
      </header>

      <div className="faq-content">
        {faqData.map((faq) => (
          <div 
            key={faq.id} 
            className={`faq-item ${openQuestion === faq.id ? 'active' : ''}`}
          >
            <button 
              className="faq-question" 
              onClick={() => toggleQuestion(faq.id)}
            >
              {faq.question}
              <span className="faq-icon">{openQuestion === faq.id ? '−' : '+'}</span>
            </button>
            <div className="faq-answer">
              {faq.answer.split('\\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="faq-contact">
        <h2>Masih punya pertanyaan?</h2>
        <p>Hubungi tim support kami melalui WhatsApp atau email</p>
        <div className="contact-buttons">
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-button whatsapp"
          >
            WhatsApp
          </a>
          <a 
            href="mailto:support@laundryinn.com"
            className="contact-button email"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;