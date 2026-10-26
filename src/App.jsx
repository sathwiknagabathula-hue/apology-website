
import { useState } from "react";
import "./App.css";

const messages = [
  {
    title: "You Mean Everything to Me",
    text: "Out of all the people in this world, you have a very special place in my heart.",
    note: "I want to do better, my love. 💗",
    bear: "🥺",
  },
  {
    title: "I Know I Hurt You",
    text: "I'm truly sorry for hurting your feelings. You didn't deserve to feel sad because of me.",
    note: "I never wanted to be the reason for your tears. 💔",
    bear: "😔",
  },
  {
    title: "Please Hear My Heart",
    text: "I know that saying sorry cannot undo what happened. I want to listen, understand, and do better.",
    note: "Your feelings matter to me. Always. 🫶",
    bear: "🧸",
  },
  {
    title: "Can We Make Things Better?",
    text: "I hope I can earn back your smile and your trust, one little step at a time.",
    note: "You mean so much to me. 💕",
    bear: "🐻‍❄️",
  },
];

const floatingHearts = ["♡", "♥", "💗", "💕", "💜", "♡", "♥"];

export default function App() {
  const [page, setPage] = useState(-1);
  const [answer, setAnswer] = useState("");

  function nextPage() {
    setAnswer("");
    setPage((current) => Math.min(current + 1, messages.length));
  }

  function restart() {
    setPage(-1);
    setAnswer("");
  }

  return (
    <main className="apology-page">
      <div className="floating-hearts" aria-hidden="true">
        {floatingHearts.map((heart, index) => (
          <span
            key={index}
            className={`floating-heart heart-${index + 1}`}
            style={{ animationDelay: `${index * -1.7}s` }}
          >
            {heart}
          </span>
        ))}
      </div>

      <p className="top-caption">A LITTLE NOTE FROM MY HEART 💌</p>

      <section className="letter-card" key={page}>
        {page === -1 ? (
          <>
            <div className="illustration">
              <span className="big-bear">🥺</span>
              <span className="illustration-heart">💗</span>
              <span className="sparkle sparkle-left">✦</span>
              <span className="sparkle sparkle-right">✧</span>
            </div>

            <p className="eyebrow">JUST FOR YOU</p>
            <h1>Hey, my love...</h1>
            <p className="description">
              I have something from my heart that I really want you to read.
            </p>

            <button className="primary-button" onClick={nextPage}>
              Open my little letter 💌
            </button>

            <p className="small-note">Made with love, just for you ♡</p>
          </>
        ) : page < messages.length ? (
          <>
            <div className="progress">
              {messages.map((_, index) => (
                <span
                  key={index}
                  className={
                    index <= page ? "progress-dot active" : "progress-dot"
                  }
                />
              ))}
            </div>

            <div className="illustration">
              <span className="big-bear">{messages[page].bear}</span>
              <span className="illustration-heart">💗</span>
              <span className="sparkle sparkle-left">✦</span>
              <span className="sparkle sparkle-right">✧</span>
            </div>

            <p className="eyebrow">A LITTLE SOMETHING FROM ME</p>
            <h1>{messages[page].title}</h1>
            <p className="description">{messages[page].text}</p>
            <p className="handwritten">{messages[page].note}</p>

            <button className="primary-button" onClick={nextPage}>
              {page === messages.length - 1
                ? "One last thing... 💗"
                : "Read the next page →"}
            </button>

            <p className="small-note">
              Page {page + 1} of {messages.length} · take your time ♡
            </p>
          </>
        ) : (
          <>
            <div className="final-illustration">
              <span>💗</span>
              <span className="final-bear">🧸</span>
              <span>💗</span>
            </div>

            <p className="eyebrow">ONE LAST QUESTION</p>
            <h1>Will you forgive me?</h1>
            <p className="description">
              I'm truly sorry, my love. I hope I can make things right.
              You don't have to answer before you're ready.
            </p>

            <div className="answer-buttons">
              <button
                className="primary-button"
                onClick={() =>
                  setAnswer(
                    "Thank you for giving me a chance, my love. I'll do my best to show you through my actions. ❤️"
                  )
                }
              >
                I'll forgive you 💗
              </button>

              <button
                className="secondary-button"
                onClick={() =>
                  setAnswer(
                    "I understand, my love. Take all the time you need. I'll respect your feelings and listen when you're ready. 🫂"
                  )
                }
              >
                I need some time 🫂
              </button>
            </div>

            {answer && (
              <p className="answer-message" role="status">
                {answer}
              </p>
            )}

            <button className="restart-button" onClick={restart}>
              Read my letter again ↺
            </button>
          </>
        )}
      </section>

      <p className="footer-caption">NO PRESSURE, ONLY LOVE ♡</p>
    </main>
  );
}
