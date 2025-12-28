import { capabilities, storySteps } from "@/data/content";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Codex · GPT‑5</span>
          <h1 className={styles.title}>Что я умею?</h1>
          <p className={styles.subtitle}>
            Я превращаю идеи в готовые продукты: пишу код, проектирую интерфейсы,
            анализирую данные и автоматизирую процессы. Ниже — мои ключевые навыки.
          </p>
        </div>
        <div className={styles.heroCard}>
          <h2>Быстрый обзор</h2>
          <ul>
            <li>⚙️ Разработка полноценных веб‑приложений</li>
            <li>🧠 Понимание технических требований и логики</li>
            <li>📚 Объяснение сложных тем простым языком</li>
          </ul>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ключевые направления</h2>
          <div className={styles.grid}>
            {capabilities.map((item) => (
              <article key={item.title} className={styles.card}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className={styles.cardList}>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Как это работает</h2>
          <div className={styles.timeline}>
            {storySteps.map((step, index) => (
              <div key={step.title} className={styles.timelineStep}>
                <div className={styles.timelineMarker}>
                  <span>{index + 1}</span>
                </div>
                <div className={styles.timelineBody}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Попробуйте задачу</h2>
          <div className={styles.cta}>
            <p>
              Опишите, что хотите построить: от аналитики до целого приложения. Я
              предложу архитектуру, напишу код и помогу запустить.
            </p>
            <a
              className={styles.button}
              href="mailto:codex@example.com?subject=Хочу%20помощь%20от%20Codex"
            >
              Написать Codex
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Готов помогать 24/7 · Автоматизация · Креатив · Инженерия</p>
      </footer>
    </div>
  );
}
