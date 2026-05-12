import React, { useState } from 'react';
import { Brain, Plus, Book, PenTool, Layout, Sparkles } from 'lucide-react';

export default function App() {
  const [words, setWords] = useState([]);
  const [eng, setEng] = useState('');
  const [arb, setArb] = useState('');

  const addWord = () => {
    if (!eng || !arb) return;

    setWords([...words, { eng, arb }]);
    setEng('');
    setArb('');
  };

  return (
    <div style={{ minHeight: '100vh', padding: '30px', background: '#000', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: '900' }}>
          يوسف محمد ✨
        </h1>

        <div style={{
          padding: '10px 20px',
          border: '1px solid #333',
          borderRadius: '999px'
        }}>
          English AI Tutor
        </div>
      </div>

      <div style={{
        marginTop: '30px',
        background: '#111',
        borderRadius: '30px',
        padding: '30px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Brain />
          <h2>قاموس الكلمات</h2>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <input
            value={eng}
            onChange={(e) => setEng(e.target.value)}
            placeholder="English"
            style={inputStyle}
          />

          <input
            value={arb}
            onChange={(e) => setArb(e.target.value)}
            placeholder="العربي"
            style={inputStyle}
          />

          <button onClick={addWord} style={buttonStyle}>
            <Plus size={18} />
            إضافة
          </button>
        </div>

        <div
          className="custom-scrollbar"
          style={{
            marginTop: '30px',
            maxHeight: '400px',
            overflowY: 'auto'
          }}
        >
          {words.length === 0 ? (
            <p style={{ opacity: 0.5 }}>لا توجد كلمات بعد.</p>
          ) : (
            words.map((w, i) => (
              <div
                key={i}
                style={{
                  background: '#1a1a1a',
                  padding: '18px',
                  borderRadius: '20px',
                  marginBottom: '12px',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <span>{w.arb}</span>
                <span dir="ltr">{w.eng}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <div style={{
        marginTop: '40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
        gap: '20px'
      }}>
        <MenuCard icon={<Book />} title="القاموس" />
        <MenuCard icon={<PenTool />} title="تسميع" />
        <MenuCard icon={<Layout />} title="بطاقات" />
        <MenuCard icon={<Sparkles />} title="امتحان AI" />
      </div>
    </div>
  );
}

function MenuCard({ icon, title }) {
  return (
    <div style={{
      background: '#111',
      borderRadius: '30px',
      padding: '40px',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '15px' }}>
        {icon}
      </div>

      <div style={{ fontWeight: '700' }}>
        {title}
      </div>
    </div>
  );
}

const inputStyle = {
  background: '#000',
  border: '1px solid #333',
  color: '#fff',
  padding: '15px',
  borderRadius: '16px',
  outline: 'none'
};

const buttonStyle = {
  background: '#fff',
  color: '#000',
  border: 'none',
  padding: '15px 25px',
  borderRadius: '16px',
  cursor: 'pointer',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
};
