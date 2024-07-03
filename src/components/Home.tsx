import React from 'react';
import photo from "../assets/photo.jpg"
import '../fonts/css/styles.css'


const Home: React.FC = () => {
  return (
    <main>
      <div className="profile">
        <img src={photo} className="profile-image" alt="Profile Image"/>
        <div className="social-links">
          <a id="gh-link" href="https://github.com/4hellboy4" target="_blank" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a id="tg-link" href="https://t.me/pushkin404" target="_blank" title="Telegram">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a id="email" href="mailto:gsv132005@gmail.com" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="info">
          <p>Hi! I'm Hellboy, a passionate software developer who also has a love for dancing and sport gymnastics. I'm well-built thanks to my active lifestyle. I enjoy programming and constantly creating new projects. I like hobbyhorsing, yeah! I'm dreaming of starting a hobbyhorsing club and a business for super people like you and me!</p>
        </div>
        <div className="skills">
          <ul>
            <li><i className="fab fa-python" title="Python"></i> Python</li>
            <li><i className="fas fa-code" title="C++"></i> C++</li>
            <li><i className="fas fa-code" title="C#"></i> C#</li>
            <li><i className="fas fa-code" title="Java"></i> Java</li>
            <li><i className="fab fa-python" title="Django"></i> Django</li>
            <li><i className="fas fa-mobile-alt" title="Flutter"></i> Flutter</li>
            <li><i className="fas fa-database" title="Firebase"></i> Firebase</li>
            <li><i className="fas fa-database" title="PostgreSQL"></i> PostgreSQL</li>
            <li><i className="fas fa-database" title="MongoDB"></i> MongoDB</li>
            <li><i className="fas fa-database" title="MySQL"></i> MySQL</li>
            <li><i className="fab fa-github" title="GitHub"></i> GitHub</li>
            <li><i className="fab fa-html5" title="HTML5"></i> HTML5</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
